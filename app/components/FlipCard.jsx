import React from 'react'


export default function FlipCard({ knowledge }) {
  return (
      <div
        className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective "
      >
        <div
          className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
        >
          <div className="absolute backface-hidden border-2 w-full h-full bg-[#F7DC9E] rounded-2xl flex flex-col items-center justify-center text-center">
            <div
              className=" text-center flex flex-col items-center justify-center h-full text-gray-800 px-6 py-4 rounded-2xl gap-y-4"
            >
              <h1 className="text-3xl font-semibold">{knowledge.title}</h1>
              <p className="text-xl">
                {knowledge.frontText}
              </p>
            </div>
          </div>

          <div
            className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
          >
            <div
              className="bg-[#3B8D95] text-center flex flex-col items-center justify-center h-full text-gray-800 px-6 py-4 rounded-2xl gap-y-4"
            >
              <h1 className="text-3xl font-semibold">{knowledge.title}</h1>
              
              <p className="text-xl">
                {knowledge.backText}
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
