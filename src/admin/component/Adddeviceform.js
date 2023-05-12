import React from 'react'
import { FaMobile, FaPlug } from "react-icons/fa"
import { BsFillLaptopFill } from "react-icons/bs"

function Adddeviceform() {
  return (
    <div>

{/* <custom-modal >
    
    <div class="text-left">
      <p class="text-site-gray-1 font-bold mb-5">
        Terms of Use for Device Registration and Tracking:
      </p>
      <ul class="list-disc text-sm">
        <li>
          By registering a device with our system, you confirm that the device
          is your property and you have the legal right to register it.
        </li>

        <li>
          You understand and agree that you will be solely responsible for any
          use or misuse of the registered device, and that you will not deny any
          implication or responsibility related to the device.
        </li>

        <li>
          You agree that the device is not stolen and that you will not use it
          for any illegal activities.
        </li>

        <li>
          You acknowledge that our system is provided "as is" and we do not
          guarantee the accuracy or completeness of the information provided
          through the system.
        </li>

        <li>
          We reserve the right to terminate your use of the system or remove any
          registered device from the system at any time, without notice, and for
          any reason, including but not limited to violation of these terms.
        </li>

        <li>
          By using our system, you agree to be bound by these terms and any
          future modifications to them. If you do not agree to these terms, you
          may not use our system.
        </li>
      </ul>
    </div>
  </custom-modal> */}
  <div class="w-full py-3 bg-site-green-4 rounded-t-lg">
    <div class="flex justify-around">
      <div
        class="flex w-14 hover:bg-site-green-3 h-14 rounded-full align-center justify-center border border-site-gray-1 shadow-xl overflow-hidden"
      >
        <button class="">
          <FaMobile className='w-[2rem] h-[2rem]'/>
        </button>
      </div>
      <div
        class="flex w-14 hover:bg-site-green-3 h-14 rounded-full align-center justify-center border border-site-gray-1 shadow-xl overflow-hidden"
      >
        <button class="">
          <BsFillLaptopFill className='w-[2rem] h-[2rem]' />
        </button>
      </div>
      <div
        class="flex w-14 hover:bg-site-green-3 h-14 rounded-full align-center justify-center border border-site-gray-1 shadow-xl overflow-hidden"
      >
        <button class="">
          <FaPlug className='w-[2rem] h-[2rem]' />
        </button>
      </div>
    </div>
  </div>

  <div class="lithopedion p-4 rounded-b-lg bg-site-gray-5">
    <form>
      {/* <h6 class="text-sm mt-3 mb-6 font-bold uppercase">User Information</h6> */}
      {/* <div class="flex flex-wrap gap-4">
       
       <div>
        <p className='mb-2 font-semibold text-xs'>PHONE NUMBER</p>
       <input
          v-if="userInfo"
          placeholder="078..."
          type="text"
          label="Phone Number"
          className='w-[18rem] h-[2rem] rounded-sm'
          
        />
       </div>
        <div>
        <p className='mb-2 font-semibold text-xs'>NATIONAL ID</p>
        <input
          placeholder="119.."
          label="National ID"
          name="national_id"
          className='w-[18rem] h-[2rem] rounded-sm'
        
        />
        </div>
      </div> */}

      {/* <hr class="mt-6 border-b-4 border-site-gray-1" /> */}

      <h6 class="text-sm mt-3 mb-6 font-bold uppercase">Device Information</h6>
      <div class="flex flex-wrap gap-4">
        <div className=' flex gap-4'>
        <div>
        <p className='mb-2 font-semibold text-xs'>CATEGORY</p>
          <input
          label="Category"
          name="category"
          className='w-[18rem] h-[2rem] rounded-sm'
         
        />
      </div>
      <div>
      <p className='mb-2 font-semibold text-xs'>PRODUCT NAME</p>
        <input
          type="text"
          id="name"
          placeholder="Product Name"
          size="md"
          className='w-[18rem] h-[2rem] rounded-sm'
          label="Product Name"
         
        />
        </div>
        </div>
       <div className=' flex gap-4'>
        <div>
        <p className='mb-2 font-semibold text-xs'>MODEL</p>
       <input
          type="text"
          placeholder="Model of the device"
          label="Model "
          name="model"
          className='w-[18rem] h-[2rem] rounded-sm'
        />
        </div>
        <div>
        <p className='mb-2 font-semibold text-xs'>SIRIAL NUMBER</p>
        <input
          type="text"
          placeholder="Serial Number of the device"
          label="Serial Number"
          name="serial_number"
          className='w-[18rem] h-[2rem] rounded-sm'
        />
        </div>
       </div>
       <div className=' flex gap-4'>
        <div>
        <p className='mb-2 font-semibold text-xs'>IMEI</p>
       <input
          placeholder="IMEI / MAC ADDRESS"
          type="text"
          label="imei "
          name="imei"
          className='w-[18rem] h-[2rem] rounded-sm'
        />
        </div>
        <div>
        <p className='mb-2 font-semibold text-xs'>WARRANTY</p>
        <input
          label="Warranty"
          name="category"
          className='w-[18rem] h-[2rem] rounded-sm'
         
        />
        </div>
       </div>

        <div class="w-full lg:w-6/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-site-gray-1 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Device Status
            </label>
            <div class="flex flex-row">
              <div class="flex items-center pl-4 rounded dark:border-gray-700">
                <input
                  id="new"
                  type="radio"
                  name="bordered-radio"
                  class="w-4 h-4 accent-site-green-1 bg-gray-100 border-gray-300 focus:ring-site-green-1 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                 
                />
                <label
                  for="new"
                  class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  New Device
                </label>
              </div>
              <div class="flex items-center pl-4 rounded">
                <input
                  id="second_hand"
                  type="radio"
                  name="bordered-radio"
                  class="w-4 h-4 accent-site-green-1 bg-gray-100 border-gray-300 focus:ring-site-green-1 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
               
                />
                <label
                  for="second_hand"
                  class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Second Hand
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className='ml-[-3rem]'>
        <p className='mb-2 font-semibold text-xs'>ESTIMATED PRICE</p>
          <input
          placeholder="Price in RWf"
          label="Estimated Price"
          name="price"
          type="number"
          className='w-[18rem] h-[2rem] rounded-sm'
        
        /></div>
      </div>
      <input
        type="file"
        useRef="fileInput"
      
        accept="image/*"
      />
      <h6 class="text-sm mt-3 mb-6 font-bold uppercase">Description</h6>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-12/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-site-gray-1 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Additional Description related to the device
            </label>
            <textarea
              type="text"
              class="border-0 px-3 py-3 placeholder-site-white-1 text-site-gray-1 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              rows="4"
              v-model="device.desc"
            ></textarea>
          </div>
        </div>
      </div>
     
      <div class="flex flex-wrap">
        <div class="w-full lg:w-12/12 px-4">
          <div class="relative w-full mb-3">
            <label
              class="block uppercase text-site-gray-1 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              I accept All consequences behind this self registration
            </label>

            <div class="flex items-center">
              <input
                v-model="selfRegistrationTerms"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the
                <i
                  class="text-site-green-3 dark:text-site-green-4 hover:underline"
                
                >
                  self registration terms and conditions
                </i>
                .
              </label>
            </div>
          </div>
        </div>
      </div>
    <div className='flex justify-center'>
      <button className='bg-site-green-1 text-white px-3 py-2 rounded font-semibold text-xs'>Add Device</button>
    </div>
      <hr class="mt-6 border-b-1 border-site-white-2" />
    </form>
  </div>


    </div>
  )
}

export default Adddeviceform