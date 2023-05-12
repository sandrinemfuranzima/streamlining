import React from 'react'
import Sidebar from './component/Sidebar'
import Safetychecktmelineview from './component/Safetychecktmelineview'

function Traceownership() {
  return (
<div>
    <Sidebar/>
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar
        path="Trace the a device path from it's origins up to now"
        down="medium"
      />
      <section class="lithopedion">
       <Safetychecktmelineview/>
      </section>
      <div class="px-4 md:px-10 mx-auto w-full">
        <footer-admin />
      </div>
    </div>
  </div>
  )
}

export default Traceownership