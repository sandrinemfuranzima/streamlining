import React from 'react'
import Sidebar from './component/Sidebar'
import Adddeviceform from './component/Adddeviceform'

function Adddeviceview() {
  return (
    <div>
    <Sidebar/>
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="Device Self Registration" down="small" />

      
      <div class="flex flex-wrap mx-auto align-baseline max-w-3xl p-6">
        <Adddeviceform/>
      </div>
     
      <div class="px-4 md:px-10 mx-auto w-full">
        <footer-admin />
      </div>
    </div>
  </div>
  )
}

export default Adddeviceview