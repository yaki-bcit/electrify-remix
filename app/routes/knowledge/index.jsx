import { useLoaderData } from "@remix-run/react"

import PageHeading from "~/components/PageHeading"
import WhiteBox from "~/components/WhiteBox"

import HomeIconText from "~/components/HomeIconText"
import Paragraph from "~/components/Paragraph"
import ButtonDark from "~/components/Buttons/ButtonDark"

import { knowledge } from '~/utils/knowledge'

export const loader = async () => {
  const knowledgeList = Object.keys(knowledge).map((keyName) => {
    return { 
      knowledgeName: keyName, 
      knowledgeTitle: knowledge[keyName].title
    }
  })
  return {
    knowledgeList
  }
}

export default function Knowledge() {
  const { knowledgeList } = useLoaderData()
  return (
    <>
      <PageHeading text="Knowledge Base" />
      <Paragraph text="Let's earn  about electric viechles and find the most suitable car for your needs."/>

      { knowledgeList.map((item) => {
        return (
          <a href={`/knowledge/${item.knowledgeName}`} key={item.knowledgeName}>
            <WhiteBox>
              {item.knowledgeTitle}
            </WhiteBox>
          </a>
        )
      })}

      <ButtonDark text="Return to Home" href="/home"/>
    </>
  )
}