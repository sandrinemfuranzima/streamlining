import React from 'react'

function Cardstats() {
  return (
    <div>

<div class="relative flex flex-col min-w-0 break-words rounded mb-6 xl:mb-0 shadow-lg ring-2 ring-site-yellow-3 hover:ring-site-white-2 lithopedion" >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
          <h5 class="text-blueGray-400 uppercase font-bold text-xs">
            {/* {{ statSubtitle }} */}
          </h5>
          <span class="font-semibold text-xl text-blueGray-700">
            {/* {{ statTitle }} */}
          </span>
        </div>
        <div class="relative w-auto pl-4 flex-initial">
          <div
            class="   statIconColor  p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full"
      
          >
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></svg>
            <fa icon="statIconName"></fa>
          </div>
        </div>
      </div>
      <p class="text-sm text-blueGray-400 mt-4">
        <span class="mr-2 statPercentColor" >
          <fa icon="statArrow === 'up' ? 'arrow-up' : 'arrow-down'"></fa>
          {/* {{ statPercent }}% */}
        </span>
        <span class="whitespace-nowrap font-bold"> 
        {/* {{ statDescripiron } */}
        </span>
      </p>
    </div>
  </div>


    </div>
  )
}

export default Cardstats



