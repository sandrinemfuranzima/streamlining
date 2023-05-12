import React from 'react'
import Sidebar from './component/Sidebar'
import { BsFillPhoneFill } from "react-icons/bs"
import { IoMdShareAlt } from "react-icons/io"

function Devicetransferform() {
  return (
    <div>
        <Sidebar/>
      <section class="text-gray-600 body-font ">
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center justify-end ">
      <div class="lg:w-2/6 md:pr-16 lg:pr-0 pr-0   mr-[-2rem] w-[20px] ">
        <h1
          class="title-font font-medium text-3xl text-site-gray-3 mb-2"
        >
         Samsung
        </h1>
        <div class="flex justify-around font-semibold ">
          <p>Model: LIMEQT </p>
          <p className='flex'>
            <p>category:</p>
           <p className='mt-1'><BsFillPhoneFill/></p>
            <fa
              v-else-if="device.category == 'computer'"
              icon="laptop"
              class="text-xl"
            />
            <fa v-else icon="plug" class="text-xl" />
          </p>
        </div>
        <div className='p-3'>
        <p class="leading-relaxed mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac placerat lectus, non posuere orci.
         Lorem ipsum dolor sit amet,
         consectetur adipiscing elit. Quisque ac aliquet sapien, at sagittis augue.
        </p>
        </div>
      </div>
      <div
        class="lg:w-2/6 bg-site-yellow-5 rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0"
      >
     
        <step-mark></step-mark>
       
        <h2 class="text-site-gray-3 text-lg font-medium title-font ">
          Transfer the Ownsership
        </h2>
        <form  action="text.com ">
          <div  class="relative my-4">
           <label className='text-xs font-semibold'>PHONE NUMBER</label>
            <input
              type="text"
              name="id"
              className='w-[18rem] h-[2.5rem] mt-2'
              placeholder="Phone Number"
             
            ></input>
          </div>
          <div class="relative mb-4">
          <label className='text-xs font-semibold'>NATIONAL ID</label>
            <input
              name="id"
              className='w-[18rem] h-[2.5rem] mt-2'
              placeholder="ID/Passport"
             
            ></input>
          </div>
          <div v-if="step === 2">
            <div>
              <div class="w-2/3 mx-auto">
          
                <img  />
              </div>
            </div>
          </div>
          <div >
            <div class="w-2/3 mx-auto">
           
              <img />
            </div>
          </div>
          <button className='confermbtn px-3 py-1 flex bg-site-green-1 text-white rounded font-semibold'>
            <p className='mt-1.5'><IoMdShareAlt/></p><p>onfirm</p>
            </button>
           
         
        </form>
        <p class="text-xs text-site-yellow-2 mt-3 font-semibold">
          You are about to give the ownership of this device, you won't be able
          to revert this action.
        </p>
      </div>
    </div>
  </section>


    </div>
  )
}

export default Devicetransferform