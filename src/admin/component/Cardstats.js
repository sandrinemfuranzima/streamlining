import React from 'react'
import { BsArrowUpShort } from "react-icons/bs"

function Cardstats() {
  return (
    <div
    class="relative flex flex-col min-w-0 break-words rounded mb-6 xl:mb-0 shadow-lg ring-2 ring-site-yellow-3 hover:ring-site-white-2 lithopedion"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
          <h5 class="text-blueGray-400 uppercase font-bold text-xs">
            Device
          </h5>
          <span class="font-semibold text-xl text-blueGray-700">
            4
          </span>
        </div>
        <div class="relative w-auto pl-4 flex-initial ">
          <div
            class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-site-yellow-1"
           
          >
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path></svg>
          </div>
        </div>
      </div>
      <p class="text-sm text-blueGray-400 mt-4  flex">
        <span class="mr-2 flex text-site-green-3" >
        <BsArrowUpShort className='mt-1'/>
           0.41 %
        </span>
        <span class="whitespace-nowrap font-bold">this week </span>
      </p>
    </div>
  </div>
  )
}

export default Cardstats



