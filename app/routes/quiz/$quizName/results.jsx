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
  const { quizName } = params
  const quizData = quizzes[quizName]

  return {
    quizName,
    quizTitle: quizzes[quizName].title,
    quizData,
  }
}

export default function Results() {
  const { quizData, quizTitle, quizName } = useLoaderData()
  const [quizAnswers, setQuizAnswers] = useLocalStorage(quizName, quizData.questions)

  function getResults() {
    const results = []
    quizAnswers.forEach((question, index) => {
      const answeredCorrectly = question.options.reduce((acc, opt) => acc && opt.correct === opt.checked, true)
      results.push([question.title, answeredCorrectly])
    })
    const total = results.reduce((acc, curr) => acc + curr[1], 0)
    return { results, total }
  }

  function handleRetryClick() {
    setQuizAnswers(quizData.questions)
    location.assign(`/quiz/${quizName}/1`)
  }

  function handleKnowledgeClick() {
    setQuizAnswers(quizData.questions)
    location.assign(`/knowledge/${quizName}`)
  }

  return (
    <>
      <ProgressBar progressPercentage={100} />
      <PageHeading text={quizTitle + " Quiz Results"} />

      <WhiteBox>
        <div className="mb-4">
          {quizAnswers && getResults().results.map((result, index) => {
            return (
              <div key={index}>
                <span className="text-xl">{result[0] + ': '}</span>
                <span className="text-xl">{result[1] ? 'Correct ✔️' : 'Incorrect ❌'}</span>
              </div>
            )
          })}
        </div>

        {quizAnswers && <Paragraph text={`You got ${getResults().total} out of ${quizAnswers.length} answers correct.`} />}
      </WhiteBox>

      <div className="flex-col items-center">
        <ButtonDark text="Reread Knowledge" type="button" onClick={handleKnowledgeClick} />
        <ButtonDark text="Retry Quiz" type="button" onClick={handleRetryClick} />
      </div>
    </>
  )
}