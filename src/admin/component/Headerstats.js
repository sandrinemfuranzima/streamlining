import React from 'react'
import Cardstats from './Cardstats'

function Headerstats() {
  return (
    <div
    class="relative md:pt-32 pb-32 pt-5 bg-site-yellow-5 dark:bg-site-gray-1"
  >
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
       
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <Cardstats/>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <Cardstats/>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <Cardstats/>
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <Cardstats/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Headerstats