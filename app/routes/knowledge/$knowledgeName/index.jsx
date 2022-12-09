import { useLoaderData } from "@remix-run/react"
import ProgressBar from '~/components/ProgressBar'
import FlipCard from '~/components/FlipCard'
import ButtonBackAndNext from '~/components/Buttons/ButtonBackAndNext'
import Logo from '~/components/icons/Logo'
import {useState} from 'react'

import { knowledge } from '~/utils/knowledge'

export const loader = async ({ params }) => {
    const { knowledgeName } = params
    const knowledgeData = knowledge[knowledgeName].knowledgeData
    return {
        knowledgeData,
        knowledgeName,
    }
}

export default function chargingKnowledge() {
    const { knowledgeData, knowledgeName } = useLoaderData()

    const [page, setPage] = useState(0);

    function clickBack() {
        if (page > 0) {
            setPage(page - 1)
        } if(page === 0){
            window.location.href = "/knowledge"
        }
    }

    function clickNext() {
        console.log("click next", page)
        if (page < knowledgeData.length - 1) {
            setPage(page + 1)
        } if(page === knowledgeData.length - 1){
            window.location.href = `/knowledge/${knowledgeName}/completed`
        }
    }

    return (
        <>
            <ProgressBar progressPercentage={Math.round(page * 100 / knowledgeData.length)} />
            <div className='mt-9'>
                <FlipCard knowledge={knowledgeData[page]}/>
                <ButtonBackAndNext clickBack={clickBack} clickNext={clickNext}/>
            </div>
        </>
    )
}
