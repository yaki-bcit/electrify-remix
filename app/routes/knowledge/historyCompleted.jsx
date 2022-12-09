import React from 'react'
import PageHeading from '~/components/PageHeading'
import WhiteBoxTall from '~/components/WhiteBoxTall'

export default function safetyKnowledgeCompleted() {
  return (
    <div>
      <PageHeading text="History Knowledge Completed" />
      <WhiteBoxTall buttonText="Start the quiz" text="You just completed learning about EV History, let’s start the quiz to test your knowledge."/>
    </div>
  )
}
