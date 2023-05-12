import React from 'react'
import { NavLink } from 'react-router-dom'
import Incomingdevice from './Incomingdevice'
import OwnedDeviceproof from './OwnedDeviceproof'
import ReportedDevice from './ReportedDevice'
// css
import './style/Tablelatesttransaction.css'


function Tablelatesttransaction() {
  return (
    <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a
            class="text-xs font-bold uppercase px-3  shadow-lg rounded block leading-normal"
         
          >
            <div className='flex py-3'>
             <svg  class="text-site-gray-1 mt-1 dark:text-site-yellow-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg>
            Pending Devices
            </div>
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a
            class="text-xs font-bold uppercase px-3  shadow-lg rounded block leading-normal"
         
          >
            <div className='flex py-3'>
             <svg  class="text-site-gray-1 mt-1 dark:text-site-yellow-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg>
            Proof ownership
            </div>
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a
            class="text-xs font-bold uppercase px-3  shadow-lg rounded block leading-normal"
         
          >
            <div className='flex py-3'>
             <svg  class="text-site-gray-1 mt-1 dark:text-site-yellow-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg>
            Reported Devices
            </div>
          </a>
        </li>
      </ul>
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded dark:bg-site-gray-1"
      >
        <div class="px-1 py-3 flex-auto">
          <div class="tab-content tab-space dark:text-site-yellow-3">
            <div>
        
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-blueGray-700">
                    Pending devices
                  </h3>
                </div>
                <div
                  class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
                >
                  <NavLink >
                    <button className='seeallbtn'>
                     seeAll
                    </button>
                  </NavLink>
                </div>
              </div>
              {/* <Incomingdevice/> */}
            </div>
            <div>
          
              {/* <OwnedDeviceproof/> */}
            </div>
            <div >
           
             
              {/* <ReportedDevice/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Tablelatesttransaction