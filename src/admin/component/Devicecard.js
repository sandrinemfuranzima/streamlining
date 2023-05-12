import React from 'react'
import { NavLink } from 'react-bootstrap'
import {AiOutlineEye} from "react-icons/ai";
import {AiOutlineDashboard} from "react-icons/ai"
import {GiConcentrationOrb} from "react-icons/gi"
import {BsPhoneFill} from "react-icons/bs"




function Devicecard() {
  return (
    <div
    class="relative rounded-xl bg-site-white-5 dark:bg-site-gray-3 border-site-white-3 cursor-pointer p-8 shadow-xl mx-5 my-5 bg-contain bg-no-repeat"
    
  >
    <NavLink >
    
      <span class=" top-4 rounded-full py-1.5 text-xs font-medium text-gray-1">
        Since:  jan 23, 2023
      </span>

      <span class=" right-4 top-4 rounded-full px-3 py-1.5 text-xs font-medium bg-blue-100 ml-4" >
         status 
      </span>
     


      <div class="mt-4 text-gray-500 dark:text-site-yellow-5">
        <div class="flex justify-around ">
          <p
            class="dark:text-site-yellow-4 dark:bg-site-gray-1 dark:p-1 dark:rounded-full"
          >
            {/* <AiOutlineEye/>
            <AiOutlineDashboard/>
            <GiConcentrationOrb/> */}
            <BsPhoneFill/>
          </p>
          <p class="text-xs">SN/IMEI: 780620718 </p>
        </div>

        <h3 class="mt-4 text-xs text-site-gray-1">
          <p class="font-bold text-ellipsis">Samsung Limeo </p>

          <p class="text-xs text-site-gray-3 dark:text-site-gray-1">
            Model: LIMEQT
          </p>
          <p></p>
        </h3>

        <p class="mt-2 hidden text-xs text-gray-4 sm:block text-ellipsis">
           truncated_text Lorem ipsum dolor,<br/> consectetur adipiscing elit.
           
        </p>

        <div class="flex mt-3 text-lg sm:block">
          <div class="flex">
            <div
              class="border-r-2 px-2 text-site-green-3 hover:text-site-green-1 dark:text-site-yellow-4"
            >
              <popover
                title="Check out device"
                text="View your device for further actions"
              >
                <AiOutlineEye/>
              </popover>
            </div>
            <div
              class="border-r-2 px-2 text-site-green-3 hover:text-site-green-1 dark:text-site-yellow-4"
            >
             <AiOutlineDashboard/>
            </div>

            <div
              class="px-2 text-site-green-3 hover:text-site-green-1 dark:text-site-yellow-4"
            >
              <popover
                title="Report lost or Stolen"
                text="Did you lose this device? report it as lost."
              >
                <GiConcentrationOrb/>
              </popover>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  </div>
  )
}

export default Devicecard