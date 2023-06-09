import React from 'react'
import Doughnutchart from './component/Doughnutchart'
import Tablelatesttransaction from './component/Tablelatesttransaction'
import Tabledeviceoverview from './component/Tabledeviceoverview'
import Sidebar from './component/Sidebar'
import Headerstats from './component/Headerstats'
// import PieChart from './PieChart'

function Index() {
  return (
    <div>
    <Sidebar/>

    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="Quick Overview" />

     <Headerstats/>

      <div class="flex flex-wrap">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 -mt-7 z-10">
          <div class="box-border">
            <div
              class="font-bold text-site-gray-1 indent-5 mb-3 dark:text-site-yellow-4"
            >
              <p>My Devices Count By Category</p>
            </div>
            <div class="h-64 my-4">
              <doughnut-chart />
              <h1>CHAT</h1>
            </div>
          </div>
          <div class="py-5">
            <Tablelatesttransaction />
          </div>
        </div>
        <div class="w-full xl:w-4/12 -mt-7 z-10">
       
          <div class="w-full">
            <div
              class="font-bold text-site-gray-1 indent-5 mb-3 dark:text-site-yellow-4"
            >
              <p>My Devices Under Warranty</p>
            </div>
            <div class="box-border my-2">
              {/* <PieChart/> */}
              <h1>PieChart</h1>
            </div>
          </div>
         
          <div class="py-5 mt-[18rem]">
            <Tabledeviceoverview/>
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

export default Index