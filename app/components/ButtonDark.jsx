import React from 'react'

export default function ButtonDark({text}) {
    return (
        <div>
            <button
                className="py-2 px-4  bg-[#3B8D95] hover:bg-[#C2E1E8] hover:text-[#3B8D95] text-white text-xl font-bold  border border-[#3B8D95] rounded">
                {text}
            </button>
        </div>
    )
}
