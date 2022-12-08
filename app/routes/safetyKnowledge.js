import React from 'react'
import ProgressBar from '~/components/ProgressBar'
import FlipCard from '~/components/FlipCard'
import ButtonBackAndNext from '~/components/Buttons/ButtonBackAndNext'
import {useState} from 'react'

export default function jane() {
    const [knowledge, setKnowledge] = useState([
        {
            title: "Battery Safely",
            frontText: "For any electric cars to be sold, manufacturers have to comply with specific design regulations and the majority of those features should ensure that their vehicle is safe enough for drivers.However, the power source of an electric vehicle presents a risk of hazard and manufacturers are developing the corresponding safety features to lessen the risks.",
            backText: "The Lithium - ion battery is combustible and can catch fires, it has power cells that can cause short - circuiting if it is damaged.However, lithium - ion batteries have a much lower risk of fire explosions than gasoline in conventional vehicles.",
        },
        {
            title: "Temperature range",
            frontText: "A lithium - ion battery has a much narrower range of operation about 15 to 45 degrees, while modern standard vehicles are designed to operate in temperatures from minus 30 degrees celsius to heat beyond 50 degrees. ",
            backText: "Temperature range: A lithium - ion battery has a much narrower range of operation about 15 to 45 degrees, while modern standard vehicles are designed to operate in temperatures from minus 30 degrees celsius to heat beyond 50 degrees."
        }, {
            title: "Thermal runaway",
            frontText: "From having larger battery packs with more cells to put in larger battery packs with packed capacity, they are all susceptible to thermal runaway.Containing a flammable liquid electrolyte, each cell in a lithium - ion battery, when the cell short - circuits, the electrolyte can combust and the pressure will increase at speed.",
            backText: "Thermal runaway is an unstoppable chain reaction causing a fire at temperatures of 60 and above.Manufacturers are designing several ways to prevent and reduce the impact of thermal runaway in electric cars."
        }, {
            title: "Electrolyte",
            frontText: "The electrolyte in lithium - ion batteries, which is full of flammable materials with harmful chemicals, can catch fire under any circumstances.However, manufacturers are questioning the problem by dividing the battery into small cells with separating fire - walls.",
            backText: "It can be at least delayed from spreading to neighboring parts.Some engineers are making less risky electrolytes: less flammable and produce fewer harmful chemicals."

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
