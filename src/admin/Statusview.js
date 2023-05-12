import React from 'react'
import Sidebar from './component/Sidebar'
import Headerstats from './component/Headerstats'

function Statusview() {
  return (
    <div>
<Sidebar/>

<div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="Quick Overview" />

      <Headerstats/>

      <div
        class="flex flex-col md:flex-row justify-around flex-nowrap text-site-gray-1 dark:text-site-yellow-4"
      >
        <div class="md:basis-3/5 border">
          <div class="w-full my-5">
            <div class="text-xl font-bold indent-5 mb-3">
              <p>My Devices Stats</p>
            </div>
            <div class="h-60">
              line-chart 
            </div>
          </div>
          <div class="w-full my-5">
            <div class="text-xl font-bold indent-5 mb-3">
              <p>My Devices Stats</p>
            </div>
            <div class="h-60">
              BarChart  
            </div>
          </div>
        </div>
        <div class="md:basis-2/5 border">
          <div class="w-full my-5">
            <div class="text-xl font-bold indent-5 mb-3">
              <p>Stolen Devices Per Area</p>
            </div>
            <div class="w-3/4 mx-auto">
              <doughnut  />
            </div>
          </div>
          
          <div class="w-full my-5">
            <div class="text-xl font-bold indent-5 mb-3">
              <p>Stolen Devices Per Category</p>
            </div>
            <div class="">
              pieChart 
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 md:px-10 mx-auto w-full">
        <footer-admin />
      </div>
    </div>


    </div>
  )
}

export default Statusview