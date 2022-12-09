import { useLoaderData } from "@remix-run/react"
import { useState, useEffect } from "react"
import useLocalStorage from "~/utils/useLocalStorage"

import ButtonDark from "~/components/Buttons/ButtonDark"
import WhiteBox from "~/components/WhiteBox"
import ProgressBar from "~/components/ProgressBar"
import CheckboxGroup from "~/components/CheckboxGroup"
import RadioGroup from "~/components/RadioGroup"
import PageHeading from "~/components/PageHeading"
import Paragraph from "~/components/Paragraph"

import { quizzes } from "~/utils/quizzes"

export const loader = async ({ params }) => {
  const { quizName, questionNum } = params
  const quizData = quizzes[quizName]

  return {
    quizData,
    quizName,
    quizTitle: quizzes[quizName].title,
    questionNum: questionNum - 1,
  }
}

export default function Quiz() {
  const { quizData, quizTitle, quizName, questionNum } = useLoaderData()

  const [quizAnswers, setQuizAnswers] = useLocalStorage(quizName, quizData.questions)

  const [noAnswerError, setNoAnswerError] = useState(false)

  // when inputs in the form are clicked, update the quizInfo object
  const handleFormChange = (e) => {
    setNoAnswerError(false)
    const { name, value } = e.target
    const updatedAnswers = [ ...quizAnswers ]
    const options = document.querySelectorAll(`.option`)
    for (let i = 0; i < options.length; i++) {
      updatedAnswers[questionNum].options[i].checked = options[i].checked
    }
    setQuizAnswers(updatedAnswers)
  }

  const handleNextClick = () => {
    const options = Array.from(document.querySelectorAll(`.option`)).map(opt => opt.checked)
    const somethingChecked = options.reduce((acc, curr) => acc || curr, false)
    if (!somethingChecked) {
      setNoAnswerError(true)
      return
    }
    if (questionNum < quizAnswers.length - 1) {
    location.assign(`/quiz/${quizName}/${questionNum + 2}`)
    } else {
      location.assign(`/quiz/${quizName}/results`)
    }
  }

  const handleBackClick = () => {
    location.assign(`/quiz/${quizName}/${questionNum}`)
  }

  return (
    <>
      {quizAnswers && <ProgressBar progressPercentage={ Math.round(questionNum * 100 / quizAnswers.length )  } />}
      <PageHeading text={quizTitle} />
      <WhiteBox>
        {quizAnswers && <Paragraph text={quizAnswers[questionNum].text} />}
      </WhiteBox>

      {quizAnswers && <form>
        {
          quizAnswers[questionNum].multiple ? (
            <CheckboxGroup 
              name={quizAnswers[questionNum].title} 
              options={quizAnswers[questionNum].options} 
              handleChange={handleFormChange}
            />
          ) : (
            <RadioGroup 
              name={quizAnswers[questionNum].title} 
              options={quizAnswers[questionNum].options} 
              handleChange={handleFormChange}
            />
          )
        }

        {quizAnswers && questionNum === 0 && <div className="flex justify-end">
          {
            (questionNum < quizAnswers.length - 1) 
            ? 
            <ButtonDark text="Next" onClick={handleNextClick} type="button" />
            :
            <ButtonDark text="Show Results" onClick={handleNextClick} type="button"  />
          }
        </div>}

        {noAnswerError && <p className="text-red-500 text-right -mb-6">
          Please select an option
          </p>}

        {quizAnswers && questionNum > 0 && <div className="flex justify-between">
          <ButtonDark text="Back" onClick={handleBackClick} />
          {
            (questionNum < quizAnswers.length - 1) 
            ? 
            <ButtonDark text="Next" onClick={handleNextClick} type="button" className="align-self-end" />
            :
            <ButtonDark text="Show Results" onClick={handleNextClick} type="button"  />
          }
        </div>}
        
      </form>}
    </>
  )
}