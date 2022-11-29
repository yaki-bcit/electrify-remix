import React from 'react'
import ButtonDark from './ButtonDark'


export default function ButtonBackAndNext({ clickBack, clickNext }) {
    return (
        <div className='flex flew-row space-x-36 '>
            <div className='my-9'>
                <button onClick={clickBack}
                    className="py-2 px-4  bg-[#3B8D95] hover:bg-[#C2E1E8] hover:text-[#3B8D95] text-white text-xl font-bold  border border-[#3B8D95] rounded-2xl">
                    Back
                </button>
            </div>
            <div className='my-9'>
                <button onClick={clickNext}
                    className="py-2 px-4  bg-[#3B8D95] hover:bg-[#C2E1E8] hover:text-[#3B8D95] text-white text-xl font-bold  border border-[#3B8D95] rounded-2xl">
                    Next
                </button>
            </div>
        </div>
    )
}
