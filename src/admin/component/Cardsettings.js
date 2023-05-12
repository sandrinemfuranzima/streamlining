import React, { useState } from 'react'


function Cardsettings() {



  return (
    <div
    class="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0 lithopedion bg-blue-100"
  >
    <div class="rounded-t bg-site-yellow-4 mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-site-gray-1 text-xl font-bold">My account</h6>
        <button
          class="bg-site-green-1 hover:bg-site-green-2 text-white active:bg-site-green-3 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
        
        >
          Edit Settings
        </button>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-sm mt-3 mb-6 font-bold uppercase">User Information</h6>
        <div class="flex flex-wrap gap-4">
          <input type="text" placeholder="078..." label="Phone Number" name="phone"  className='w-[16rem] h-[2rem]'/>
          <input type="number" placeholder="National ID" className='w-[16rem] h-[2rem]' />

          <input type="text" placeholder="First Name" className='w-[16rem] h-[2rem]' /> 
            
          
          <input type="text" placeholder="Last Name" className='w-[16rem] h-[2rem]' />
          
        </div>

        <hr class="mt-6 border-b-1 border-site-white-2" />

        <h6 class="text-sm mt-3 mb-6 font-bold uppercase">
          Contact Information
        </h6>
        <div class="flex flex-wrap gap-4">
          <div class="w-full lg:w-12/12 ">
            <input type="text" v-model="name" className='mb-2'/><br/>
            <input type="text" placeholder="KN 123 St 132" className='w-[33.5rem] h-[2rem]' />
             
          </div>

          <div class="flex flex-nowrap gap-3">
            <input type="text" placeholder="Province" className='w-[10rem] h-[2rem]'/>
            <input type="text" placeholder="Disctrict "  className='w-[10rem] h-[2rem]' />
            <input  type="text" placeholder="Sector"/>
            
             
            
            
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-site-white-2" />

        <h6 class="text-sm mt-3 mb-6 font-bold uppercase">About Me</h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-site-gray-1 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                About me
              </label>
              <textarea
                type="text"
                class="border-0 px-3 py-3 placeholder-site-white-1 text-site-gray-1 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                rows="4"
                v-model="info.about"
              >
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab ipsam saepe voluptatibus reiciendis fugit numquam.
                      </textarea
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Cardsettings