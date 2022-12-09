import React from 'react'
import ProgressBar from '~/components/ProgressBar'
import FlipCard from '~/components/FlipCard'
import ButtonBackAndNext from '~/components/Buttons/ButtonBackAndNext'
import {useState} from 'react'

export default function knowledgeHistory() {
	const [knowledge, setKnowledge] = useState([
		{
			title: "1",
			frontText: "The first electric car",
			backText: "Robert Anderson, a Scottish inventor, built the first electric car in 1832. It was a basic electric horse carriage.",
		},
		{
			title: "2",
			frontText: "The first fall of electric cars",
			backText: "Electric cars were popular in the 19th century. They died off because of advancements in internal-combustion engines, and mass production of cheaper gasoline.",
		},
		{
			title: "3",
			frontText: "First commercial use of electric cars",
			backText: "Electric cars were first used commercially as taxis in Britain and in the United States. This started in the late 19th century.",
		},
		{
			title: "4",
			frontText: "Most popular electric car",
			backText: "Currently, the most popular electric car is the Tesla Model 3. It is the best-selling electric car in the world.",
		},
		{
			title: "5",
			frontText: "The renaissance of electric cars",
			backText: "Starting in 2008, a renaissance in electric vehicle manufacturing occurred due to advances in batteries, and the desire to reduce greenhouse-gas emissions and to improve urban air quality",
		}
	])

	const [page, setPage] = useState(0);

    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return<FlipCard knowledge={knowledge[0]}/>
            case 1:
                return<FlipCard knowledge={knowledge[1]}/>
            case 2:
                return<FlipCard knowledge={knowledge[2]}/>
            case 3:
                return<FlipCard knowledge={knowledge[3]}/>
						case 4:
                return<FlipCard knowledge={knowledge[4]}/>
        }
    }
    function clickBack() {
        if (page > 0) {
            setPage(page - 1)
        } if(page === 0){
            window.location.href = "/knowledge"
        }
    }
    function clickNext() {
        console.log("click next")
        if (page < knowledge.length) {
            setPage(page + 1)
        } if(page === knowledge.length){
            window.location.href = "/historyCompleted"
        }
    }


    return (
        <div className='mx-4 mt-9'>
            {conditionalComponent()}
            <ButtonBackAndNext clickBack={clickBack} clickNext={clickNext}/>
        </div>
    )
}

