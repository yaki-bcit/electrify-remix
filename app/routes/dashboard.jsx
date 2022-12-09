import useLocalStorage from "~/utils/useLocalStorage"
import { useLoaderData } from "@remix-run/react"

import PageHeading from "~/components/PageHeading"
import WhiteBox from "~/components/WhiteBox"
import Paragraph from "~/components/Paragraph"

import { knowledge } from '~/utils/knowledge'
import { quizzes } from '~/utils/quizzes'

export const loader = async () => {
  const quizData = quizzes

  return {
    quizData,
  }
}

export default function Dashboard() {
  const { quizData } = useLoaderData()

  function getResults() {
    const quizResults = Object.keys(quizData).map((quizName) => {
      const { title } = quizData[quizName]
      const [quizAnswers, setQuizAnswers] = useLocalStorage(quizName, quizData[quizName].questions)
      if (!quizAnswers) return null
      const results = []
      quizAnswers.forEach((question, index) => {
        const answeredCorrectly = question.options.reduce((acc, opt) => acc && opt.correct === opt.checked, true)
        results.push([question.title, answeredCorrectly])
      })
      const totalCorrect = results.reduce((acc, curr) => acc + curr[1], 0)
      return { title, quizName, results, totalCorrect }
    })

    return quizResults
  }

  console.log('dashboard results', getResults())

  return (
    <>
      <PageHeading text="Dashboard" />

      <WhiteBox>
        <h2 className="text-2xl font-semibold">
          EV Advice for You
        </h2>

        <Paragraph text="You should buy a Tesla Model 3." />

        <h2 className="text-2xl font-semibold mt-6 mb-4">
          Knowledge Base and Quizzes
        </h2>

        {!quizData && <Paragraph text="Loading..." />}

        {quizData && getResults().map((result, index) => {
          if (!result || result.quizName === 'welcome') return null
          return (
            <div key={index}>
              <p className="text-xl mb-4">
                <a href={'/knowledge/' + result.quizName}>
                  <span className="text-teal-600 font-semibold underline">
                    {result.title}
                  </span>
                </a>
                <span>{' : ' + result.totalCorrect + '/' + result.results.length + ' correct'}</span>
              </p>
            </div>
          )
        })}

      </WhiteBox>
    </>
  );
}