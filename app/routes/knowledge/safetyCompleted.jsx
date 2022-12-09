import React from 'react'
import PageHeading from '~/components/PageHeading'
import WhiteBoxTall from '~/components/WhiteBoxTall'

export default function safetyKnowledgeCompleted() {
  return (
    <div>
      <PageHeading text="Safety Knowledge Completed" />
      <WhiteBoxTall buttonText="Start the quiz" href="/quiz/safety/1" text="You just completed learning about EV Safety. Let’s start the quiz to test your knowledge."/>
    </div>
  )
}
