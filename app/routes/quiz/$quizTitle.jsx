import { useLoaderData } from "@remix-run/react";
import { useState } from "react"
import useLocalStorage from "~/utils/useLocalStorage"

import ButtonDark from "~/components/ButtonDark"
import WhiteBox from "~/components/WhiteBox"
import ProgressBar from "~/components/ProgressBar"
import CheckboxGroup from "~/components/CheckboxGroup"
import RadioGroup from "~/components/RadioGroup"
import PageHeading from "~/components/PageHeading"
import Paragraph from "~/components/Paragraph"

import { quizzes } from "~/utils/quizzes"

export const loader = async ({ params }) => {
  console.log('params', params.quizTitle)
  console.log('quizzes', quizzes)
  const quiz = quizzes[params.quizTitle]
  return quiz
}

export default function Quiz() {
  const quiz = useLoaderData()

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizAnswers, setQuizAnswers] = useLocalStorage({})
  /* 
  quizAnswers = { // this is what's saved in local storage
    quizTitle1: [
      { // this is for question 1
        optionValue1: true, // selected or not
        optionValue2: false, // these should be easy to compare with the correct answers
        optionValue3: true,
        optionValue4: false,
      },
      { // this is for question 2
        optionValue1: true,
        optionValue2: false,
        optionValue3: false,
      },
      {
        optionValue1: true,
        optionValue2: false,
      },
      {
        optionValue1: false,
        optionValue2: true,
        optionValue3: false,
        optionValue4: true,
      },
    ],
    quizTitle2: [],
    quizTitle3: [], // etc.
  }
  */

  const [showResults, setShowResults] = useState(false)

  const handleAnswerOptionClick = (optionValue, checked) => {
    const quizTitle = quiz.title
    const updatedAnswers = { ...quizAnswers }
    updatedAnswers[quizTitle][currentQuestion] = {
      ...updatedAnswers[quizTitle][currentQuestion],
      [optionValue]: checked,
    }

    setQuizAnswers(updatedAnswers)

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowResults(true);
    }
  }

  const handleNextClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowResults(true)
    }
  }

  const handleBackClick = () => {
    const nextQuestion = currentQuestion - 1;
    if (nextQuestion >= 0) {
      setCurrentQuestion(nextQuestion)
    }
  }

  function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

  return (
    <>
      <ProgressBar progressPercentage={ (currentQuestion / quiz.questions.length ) * 100 } />
      {
        showResults ? (
          <>
          <PageHeading text={ quiz.title + 'Results' } />
          <WhiteBox>
            
          </WhiteBox>
          </>
        ) : (
          <>
            <PageHeading text={quiz.title} />
            <WhiteBox>
              <Paragraph text={quiz.questions[currentQuestion].text} />
            </WhiteBox>

            <form>
            
              { quiz.questions[currentQuestion].multiple ? (
                <>
                  <CheckboxGroup name={ quiz.questions[currentQuestion].title } options={quiz.questions[currentQuestion].options} />
                </>
              ) : (
                <>
                  <RadioGroup name={quiz.questions[currentQuestion].title} options={quiz.questions[currentQuestion].options} />
                </>
              ) }

              <div className="flex justify-between">
                <ButtonDark text="Back" onClick={handleBackClick} />
                <ButtonDark text="Next" onClick={handleNextClick} />
              </div>

            </form>
          </>
         )
      }
    </>
  )
}