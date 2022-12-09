import { useLoaderData } from "@remix-run/react"
import React from 'react'
import PageHeading from '~/components/PageHeading'
import WhiteBoxTall from '~/components/WhiteBoxTall'
import ProgressBar from '~/components/ProgressBar'
import Logo from '~/components/icons/Logo'

import { knowledge } from '~/utils/knowledge'

export const loader = async ({ params }) => {
  const { knowledgeName } = params
  const knowledgeTitle = knowledge[knowledgeName].title
  return {
    knowledgeName,
    knowledgeTitle,
  }
}

export default function safetyKnowledgeCompleted() {
  const { knowledgeName, knowledgeTitle } = useLoaderData()
  return (
    <>
      <ProgressBar progressPercentage={100} />
      <div>
        <PageHeading text="Charging Knowledge Completed" />
        <WhiteBoxTall buttonText="Start the quiz" href={`/quiz/${knowledgeName}/1`} text={`You just completed learning about ${knowledgeTitle}. Let’s start the quiz to test your knowledge.`} />
      </div>
    </>
  )
}
