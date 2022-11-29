import React from 'react'

export default function ButtonLight({text}) {
    return (
        <div>
         
            <button 
          
            className="py-2 px-4 hover:bg-[#3B8D95] bg-[#C2E1E8] text-[#3B8D95]  hover:text-white text-xl font-bold  border border-[#3B8D95] rounded">
               {text}
            </button>
        </div>
    )
}
