import React from 'react'
import Cardsettings from './component/Cardsettings'
import Cardprofile from './component/Cardprofile'
import Sidebar from './component/Sidebar'

function Settingview() {
  return (
    <div class="dark:bg-site-gray-1">
    <Sidebar/>
    <div class="relative md:ml-64 mt-4 ">
      <admin-navbar path="Account Settings" down="medium" />

     
      <div class="flex flex-wrap align-baseline">
        <div class="w-full xl:w-8/12 px-4">
          
          <Cardsettings/>
        </div>
        <div class="w-full xl:w-4/12 px-4 xl:mt-0 mt-20">
          <card-profile />
          <Cardprofile/>
        </div>
      </div>
     
      <div class="px-4 md:px-10 mx-auto w-full">
        <footer-admin />
      </div>
    </div>
  </div>
  )
}

export default Settingview