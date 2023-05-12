import React from 'react'
import Sidebar from './component/Sidebar'
import Incomingdevice from './component/Incomingdevice'
import {BsCheckLg} from "react-icons/bs"

function Pendingdevice() {
  return (
    <div>
    <Sidebar/>
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="Your Pending Devices" down="medium" />

    
      <section class="text-site-gray-1">
        <div class="container p-5 mx-auto">
          <div
            class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
          >
            <h1
              class="flex-grow basis-1/2 sm:pr-16 text-2xl font-light title-font"
            >
              All My pending Devices
            </h1>
            <a
              class="cursor-pointer text-xs group flex items-center basis-2/5 justify-between rounded-lg border border-current p-2 text-site-white-1 transition-colors bg-site-green-1 hover:bg-site-green-2 focus:outline-none focus:ring active:bg-site-green-3"
            >
              <span
                class="font-medium transition-colors group-hover:text-white"
              >
                Accept All Pending Devices
              </span>

              <span
                class="ml-4 flex-shrink-0 rounded-full border border-current bg-white p-2 text-site-green-2 group-active:text-indigo-500"
              >
                <BsCheckLg/>
              </span>
            </a>
          </div>
        </div>
      </section>
    
      <div >
        <ul>
          <li>
           <Incomingdevice/>
          </li>
        </ul>
      </div>
   
      <div class="px-4 md:px-10 mx-auto w-full">
        <footer-admin />
      </div>
    </div>
  </div>
  )
}

export default Pendingdevice