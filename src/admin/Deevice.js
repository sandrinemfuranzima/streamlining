import React from 'react'
import Sidebar from './component/Sidebar'
import Singledevice from './component/Singledevice'

function Deevice() {
  return (
    <div>
    <Sidebar/>
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="My Device " down="small" />

      {/* <single-device/> */}
      <Singledevice/>
       
      

      <div class="px-4 md:px-10 mx-auto w-full">
        <footer-admin />
      </div>
    </div>
  </div>
  )
}

export default Deevice