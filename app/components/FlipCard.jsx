import React from 'react'
import ButtonDark from './ButtonDark'

export default function FlipCard() {
  return (
    <>
    <div
        className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective"
      >
        <div
          className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
        >
          <div className="absolute backface-hidden border-2 w-full h-full bg-[#F7DC9E] rounded-2xl">
          <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
          </div>
          
          <div
            className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
          >
            <div
              className="bg-[#3B8D95] text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24 rounded-2xl"
            >
              <h1 className="text-3xl font-semibold">The King's Man</h1>
              <p className="my-2">9.0 Rating</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
              <button
                className="bg-[#3B8D95] px-6 py-2 font-semibold text-white rounded-2xl absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#FCDE97] max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full h-60" src="https://cdn.pixabay.com/photo/2022/10/02/06/42/blackout-7492849_1280.png" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div> */}
    </>
  )
}
