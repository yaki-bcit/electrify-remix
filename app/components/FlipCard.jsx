import React from 'react'


export default function FlipCard({ knowledge }) {
  return (
      <div
        className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective "
      >
        <div
          className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
        >
          <div className="absolute backface-hidden border-2 w-full h-full bg-[#F7DC9E] rounded-2xl flex flex-col items-center justify-center text-center gap-y-4">
          <h1 className="text-3xl font-semibold">{knowledge.title}</h1>
            <p>
              {knowledge.frontText}
            </p>
          </div>

          <div
            className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
          >
            <div
              className="bg-[#3B8D95] text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24 rounded-2xl gap-y-4"
            >
              <h1 className="text-3xl font-semibold">{knowledge.title}</h1>
              <p>
              {knowledge.backText}
              </p>
              {/* <button
                className="bg-[#3B8D95] px-6 py-2 font-semibold text-white rounded-2xl absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
              >
                Next
              </button> */}
            </div>
          </div>
        </div>
      </div>
  )
}
