import React from 'react'
import Sidebar from './component/Sidebar'
import Assigndeviceform from './component/Assigndeviceform'

function Assigndeviceview() {
  return (

    <div>
    <Sidebar/>
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1 mt-4">
      <admin-navbar path="Assign Device To a User" down="small" />

      <div
        class="flex flex-col text-center w-full mb-10 text-gray-900 dark:text-site-green-3"
      >
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4">
          Assign A New Device To A User
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          You can Assign a new device to a user
        </p>
      </div>
    
      <div class="flex flex-wrap mx-auto align-baseline max-w-3xl p-6">
        <Assigndeviceform/>
      </div>
   
      <div class="px-4 md:px-10 mx-auto w-full">
        <footer-admin />
      </div>
    </div>
  </div>

  )
}

export default Assigndeviceview