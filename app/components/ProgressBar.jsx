import React from 'react'

export default function ProgressBar({ progressPercentage }) {
    return (
        <>
            <div className="w-full bg-[#3B8D95] rounded-full ">
                <div
                    style={{ width: `${progressPercentage}%` }}
                    className=" bg-[#FCDE97] text-xs font-medium text-dark-100 text-center p-0.5 leading-none rounded-full"> {progressPercentage}%</div>
            </div>
        </>
    )
}
