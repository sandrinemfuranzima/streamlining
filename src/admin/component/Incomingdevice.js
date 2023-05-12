import React from 'react'
import {GrPersonalComputer} from "react-icons/gr"
import { MdCalendarMonth } from "react-icons/md"
import { TbShare3 } from "react-icons/tb"
import { RxCrossCircled } from "react-icons/rx"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { RiSmartphoneFill } from "react-icons/ri"
// css
import './style/incomingdevices.css'



function Incomingdevice() {
  return (
    <section class="text-gray-400 body-font">
    <div class="container mx-auto">
      <div
        class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-800 flex-col"
      
      >
        
        {/* <div
          class="sm:w-14 sm:h-14 h-20 w-20 sm:mx-10 inline-flex items-center justify-center rounded-full text-site-gray-2 bg-site-white-3 flex-shrink-0"
        >
        <RiSmartphoneFill />
        </div> */}
      
        <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h2 class="text-site-gray-2 font-bold text-xl title-font mb-2 mr-[20rem]">
             Lenov thinkbad
          </h2>


          {/* <div class="flex justify-around ">
            <a class="mt-3 text-site-gray-3 inline-flex items-center">
            <span>Ftrucker &nbsp;</span>
             <TbShare3/>
             </a>
              
             <a class="align-top text-xs text-site-green-2 items-center"> 
              <p class="font-bold flex"><MdCalendarMonth className='mt-1'/>&nbsp; jan 23, 2023  </p>
               <p>model</p> 
             </a> 
              
            
          </div>
          <p class="leading-relaxed text-base mr-3">
            <slot>Lorem Ipsum is simply dummy text of the printing and typesetting industry
              . Lorem Ipsum has been the industry's standard dummy text ever
               
               </slot>
          </p> */}
          <div className='flex justify-between'>
            <div className=''>
              
            <div class="flex justify-around ">
            <a class="mt-3 text-site-gray-3 inline-flex items-center">
            <span>Ftrucker &nbsp;</span>
             <TbShare3/>
             </a>
              
             <a class="align-top text-xs text-site-green-2 items-center"> 
              <p class="font-bold flex"><MdCalendarMonth className='mt-1'/>&nbsp; jan 23, 2023  </p>
               <p>U430</p> 
             </a> 
              
            
          </div>
          <p class="leading-relaxed text-base p-2">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry
           Lorem Ipsum has been the industry's standard dummy text ever
               
               
          </p>


            </div>
            <div className=''>
            <div
          class="sm:w-32 sm:h-32 h-20 w-20 sm:mx-10 inline-flex items-center justify-center rounded-full text-site-gray-2 bg-site-white-3 flex-shrink-0"
        >
        <RiSmartphoneFill className='w-[5rem] h-[5rem]' />
        </div>
            </div>
          </div>


          <div class="mt-5">
            <div  class="flex justify-around gap-2">
            
              <button className='Accept py-1 px-[1rem] flex gap-1'><p className='mt-1'><AiOutlineCheckCircle/></p><p>Accept Incoming Device</p></button>
       
              <button className='Decline py-1 px-[1rem] flex gap-1'><p className='mt-1'><RxCrossCircled/></p><p>Decline Incoming Device</p></button>
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Incomingdevice