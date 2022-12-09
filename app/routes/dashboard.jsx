import useLocalStorage from "~/utils/useLocalStorage"

import PageHeading from "~/components/PageHeading"
import WhiteBox from "~/components/WhiteBox"
import Table from "~/components/Table"
import Paragraph from "~/components/Paragraph"

import { knowledge } from '~/utils/knowledge'
import { quizzes } from '~/utils/quizzes'

export const loader = async () => {
  const quizData = quizzes

  return {
    quizData,
    knowledgeList
  }
}

export default function Dashboard() {
  const { quizData, knowledgeList } = useLoaderData()
  const [quizAnswers, setQuizAnswers] = useLocalStorage(quizName, quizData.questions)

  return (
    <>
      <PageHeading text="Dashboard" />

      <WhiteBox>
        <h2 className="text-lg font-semibold">
          EV Advice for You
        </h2>

        <Paragraph text="You should buy a Tesla Model 3." />

        <h2 className="text-lg font-semibold mt-4">
          Knowledge Base and Quizzes
        </h2>

        <Table />
      </WhiteBox>
    </>
  );
}