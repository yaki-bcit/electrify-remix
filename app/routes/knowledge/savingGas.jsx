import React from 'react'
import ProgressBar from '~/components/ProgressBar'
import FlipCard from '~/components/FlipCard'
import ButtonBackAndNext from '~/components/Buttons/ButtonBackAndNext'
import {useState} from 'react'

export default function jane() {
    const [knowledge, setKnowledge] = useState([
        {
            title: "Electric vs Gas",
            frontText: "According to NRDC A 2018 study by the University of Michigan's Transportation Research Institute found that the average cost to fuel an electric car was $485 a year, compared to $1,117 for a gas-powered vehicle.",
            backText: "That is $632 that you will save every year. Of course every car is different and you need to do your own research, but you will most likely save money after using an electric vehicle for a couple of years. ",
        },
        {
            title: "Cost Per 1500 Miles",
            frontText: "According to Yahoo Finance A 2022 Honda Accord Sport has $1929 in fuel costs over 15000 miles and A 2022 Kia EV6 Wind has $605 in electricity costs over 1500 miles!",
            backText: " That is a 1324 dollar difference that you will save using an EV."
        }, {
            title: "Electricity Bill",
            frontText: "Plugging your car at home is going to increase your electricity bill, but the amount that you will save at the end depends on the region that you live in.",
            backText: "For example the best place that you can own an EV in UnitedStates is Washington, because they can save as much as 14,480 dollars in the lifetime of their vehicle according to NRDC.ORG"
        }, {
            title: "Charging During Night",
            frontText: "According to NRDC if you charge your car overnight, when electricity demand and price drop, can save you 30 percent on that charge.",
            backText: "Also have in mind that the charging stations tend to be more expensive then charging at home and can increase your electricity bill significantly!"
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
        if (page < 3) {
            setPage(page + 1)
        } if(page === 3){
            window.location.href = "/safetyKnowledgeCompleted"
        }
    }


    return (
        <div className='mx-4 mt-9'>
            {conditionalComponent()}
            <ButtonBackAndNext clickBack={clickBack} clickNext={clickNext}/>
        </div>
    )
}
