import React from 'react'
import { NavLink } from 'react-router-dom'
import phones from "../../component/image/phones.jpg"
import phone from "../../component/image/phone.jpg"
import '../component/style/singledevice.css'
import { AiFillFlag } from "react-icons/ai"
import { TbLamp } from "react-icons/tb"
import { HiOutlineDownload } from "react-icons/hi"
import { IoMdShareAlt } from "react-icons/io"


function Singledevice() {
  return (
    
    <div>
      <section class="py-10 text-gray-600 body-font">
        <div
          class="container px-5 mx-auto flex items-center md:flex-row flex-col"
        >
          <div
            class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center"
          >
            <h2
              class="text-xs text-site-yellow-2 tracking-widest font-medium title-font mb-1"
            >
              INFORM THE AUTHORITIES
            </h2>
            <h1
              class="md:text-2xl text-2xl font-medium title-font text-site-gray-1 dark:text-site-white-4 mb-3"
            >
              Report Your Device For Assistence
            </h1>
            <h2
              class="w-3/4 text-sm text-center text-site-gray-4 tracking-widest font-medium title-font mb-1"
            >
              Report Your device if lost or stolen so that no one would be able to
              legally sell it anywhere
            </h2>
          </div>
          <div
            class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4"
          >
            <button
              class="bg-site-yellow-5 inline-flex py-1 px-2 rounded-lg items-center hover:bg-site-yellow-4 focus:outline-none cursor-pointer"
           
            >
              <AiFillFlag/>
              <span class="ml-2 flex items-start flex-col leading-none">
                <span class="text-xs text-gray-600 mb-1">Lost or Stolen</span>
                <span class="title-font text-sm font-medium">Report your Device</span>
              </span>
            </button>
            
            <button className='Report inline-flex py-2 px-4 rounded-lg items-center hover:bg-site-yellow-4 '><p className='mr-2'><TbLamp/></p><p>Report Dead</p></button>
          
            
          </div>
        </div>
        {/* <custom-modal >
      
          <div class="flex justify-around">
           
            <button>quaternary</button>
            <button>yellow-clear</button>
            
          </div>
        </custom-modal> */}
      </section>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-3 py-10 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap justify-around">
            <div
              class="cardd relative lg:w-1/2 w-full lg:p-10 lg:py-6 mb-6 lg:mb-0 bg-no-repeat place-self-center dark:bg-site-white-1 "
             
            >
              <h2
                class="text-sm title-font text-site-gray-2 tracking-widest dark:text-site-gray-1"
              >
                Device Name
              </h2>
              <h1
                class="text-site-gray-1 text-3xl title-font font-bold mb-4 dark:text-site-yellow-3 drop-shadow-lg"
              >
                 Samsung
              </h1>
              <div class="flex mb-4">
                <a
                  class="flex-grow text-site-gray-1 border-b-2 border-site-gray-3 py-2 text-lg px-1 dark:text-site-white-1"
                >
                  Description
                </a>
              </div>
              <p class="leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac placerat lectus,
              non posuere orci. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque ac aliquet sapien, at sagittis augue.
              </p>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-site-gray-3">Model:</span>
                <span
                  class="ml-auto font-bold text-site-gray-1 dark:text-site-white-4"
                >
                  device.device_model 
                </span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-site-gray-3">Serial Number</span>
                <span
                  class="ml-auto font-bold text-site-gray-1 dark:text-site-white-4"
                >
                  device.serial_number 
                </span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-site-gray-3">Mac Address</span>
                <span
                  class="ml-auto font-bold text-site-gray-1 dark:text-site-white-4"
                >
                   device.mac_address 
                </span>
              </div>
            
              <span
                class="mt-1 mr-1 absolute bg-site-white-3 text-site-gray-1 right-0 top-0 rounded-full px-3 title-font py-1.5 text-sm font-medium dark:bg-site-gray-1 dark:text-site-yellow-3"
              >
                RWF 19,000
              </span>
              <div class="container">
                <div class="flex justify-around">
                  
                  <button className='ownershipbtn w-auto px-2 flex gap-1 font-semibold'><p className='mt-1'><HiOutlineDownload className='-green-600' /></p><p>ownership</p></button>
                 
                    <button className='transferbtn w-auto px-2 gap-1 font-semibold flex'><p className='mt-1'><IoMdShareAlt/></p><p>transfer</p></button>
                  
                </div>
              </div>
            </div>
            <img
             src={phone}
              alt="image"
              class="lg:w-1/3 w-full lg:h-auto  object-cover object-center rounded"
           
            />
          </div>
        </div>
      </section>
  
      <div class="mb-6 text-center">
        <h2
          class="text-xs text-site-yellow-2 tracking-widest font-medium title-font mb-1"
        >
          YOUR DEVICE TIMELINE
        </h2>
        <h1
          class="md:text-3xl text-2xl font-medium title-font text-site-gray-1 dark:text-site-white-4"
        >
          History of Ownership
        </h1>
      </div>
      <device-timeline></device-timeline>
      <div useRef="pdfContent"></div>
    </div>


  )
}

export default Singledevice