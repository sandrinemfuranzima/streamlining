import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'

function Devicetimeline() {
  return (
    <div>
        
        <ol class="items-center p-3 flex flex-fow sm:flex-row waveLines  ">
    <li
      v-for="(device, key, index) in timeline"
      
      class="relative mb-3 sm:mb-0 sm:w-auto w-1/2 text-center "
    >
      <div class="flex items-center ">
        <div
          class="flex justify-center items-center w-10 h-10 bg-site-gray-4 rounded-full ring-site-gray-5 dark:bg-site-yellow-4 ring-8 dark:ring-site-yellow-5 shrink-0"
        >
          <AiOutlineCalendar className='text-2xl text-site-gray-2 dark:text-site-yellow-2'/>
          
        </div>
        <div
         
          class="hidden sm:flex w-full bg-site-gray-2 h-0.5 dark:bg-site-yellow-2"
        ></div>
        </div>

      <div class="mt-3 sm:pr-8">
        <h3
          v-if="index !== Object.keys(timeline).length - 1"
          class="text-sm md:text-base font-semibold text-site-gray-2 dark:text-site-white-4"
        >
          Niyomufasha Fabrice
        </h3>

        {/* <button
          v-if="index === Object.keys(timeline).length - 1"
       
          class="text-xs inline-flex items-center p-2 mb-1 font-medium text-site-gray-2 rounded-lg border border-site-gray-4 hover:bg-site-green-5 dark:hover:text-site-gray-1 dark:hover:bg-site-green-5"
        >
          <fa
            icon="download"
            class="text-site-gray-2 mr-2 dark:text-site-yellow-2"
          />
          Contract
        </button> */}
        <time
          class="text-xs md:text-sm block mb-2 text-center font-bold leading-none text-site-green-3"
        >
           jun 24, 2023
        </time>
      </div>
    </li>
    <li
      v-for="(device, key, index) in timeline"
      
      class="relative mb-3 sm:mb-0 sm:w-auto w-1/2 text-center "
    >
      <div class="flex items-center ">
        <div
          class="flex justify-center items-center w-10 h-10 bg-site-gray-4 rounded-full ring-site-gray-5 dark:bg-site-yellow-4 ring-8 dark:ring-site-yellow-5 shrink-0"
        >
          <AiOutlineCalendar className='text-2xl text-site-gray-2 dark:text-site-yellow-2'/>
          
        </div>
        <div
         
          class="hidden sm:flex w-full bg-site-gray-2 h-0.5 dark:bg-site-yellow-2"
        ></div>
        </div>

      <div class="mt-3 sm:pr-8">
        <h3
          v-if="index !== Object.keys(timeline).length - 1"
          class="text-sm md:text-base font-semibold text-site-gray-2 dark:text-site-white-4"
        >
          Ilunga Daniel
        </h3>

        {/* <button
          v-if="index === Object.keys(timeline).length - 1"
       
          class="text-xs inline-flex items-center p-2 mb-1 font-medium text-site-gray-2 rounded-lg border border-site-gray-4 hover:bg-site-green-5 dark:hover:text-site-gray-1 dark:hover:bg-site-green-5"
        >
          <fa
            icon="download"
            class="text-site-gray-2 mr-2 dark:text-site-yellow-2"
          />
          Contract
        </button> */}
        <time
          class="text-xs md:text-sm block mb-2 text-center font-bold leading-none text-site-green-3"
        >
           jun 24, 2023
        </time>
      </div>
    </li>
    <li
      v-for="(device, key, index) in timeline"
      
      class="relative mb-3 sm:mb-0 sm:w-auto w-1/2 text-center "
    >
      <div class="flex items-center ">
        <div
          class="flex justify-center items-center w-10 h-10 bg-site-gray-4 rounded-full ring-site-gray-5 dark:bg-site-yellow-4 ring-8 dark:ring-site-yellow-5 shrink-0"
        >
          <AiOutlineCalendar className='text-2xl text-site-gray-2 dark:text-site-yellow-2'/>
          
        </div>
        <div
         
          class="hidden sm:flex w-full bg-site-gray-2 h-0.5 dark:bg-site-yellow-2"
        ></div>
        </div>

      <div class="mt-3 sm:pr-8">
        <h3
          v-if="index !== Object.keys(timeline).length - 1"
          class="text-sm md:text-base font-semibold text-site-gray-2 dark:text-site-white-4"
        >
          Niyomufasha Fabrice
        </h3>

        {/* <button
          v-if="index === Object.keys(timeline).length - 1"
       
          class="text-xs inline-flex items-center p-2 mb-1 font-medium text-site-gray-2 rounded-lg border border-site-gray-4 hover:bg-site-green-5 dark:hover:text-site-gray-1 dark:hover:bg-site-green-5"
        >
          <fa
            icon="download"
            class="text-site-gray-2 mr-2 dark:text-site-yellow-2"
          />
          Contract
        </button> */}
        <time
          class="text-xs md:text-sm block mb-2 text-center font-bold leading-none text-site-green-3"
        >
           jun 24, 2023
        </time>
      </div>
    </li>
    <li
      v-for="(device, key, index) in timeline"
      
      class="relative mb-3 sm:mb-0 sm:w-auto w-1/2 text-center "
    >
      <div class="flex items-center ">
        <div
          class="flex justify-center items-center w-10 h-10 bg-site-gray-4 rounded-full ring-site-gray-5 dark:bg-site-yellow-4 ring-8 dark:ring-site-yellow-5 shrink-0"
        >
          <AiOutlineCalendar className='text-2xl text-site-gray-2 dark:text-site-yellow-2'/>
          
        </div>
        <div
         
          class="hidden sm:flex w-full bg-site-gray-2 h-0.5 dark:bg-site-yellow-2"
        ></div>
        </div>

      <div class="mt-3 sm:pr-8">
        <h3
          v-if="index !== Object.keys(timeline).length - 1"
          class="text-sm md:text-base font-semibold text-site-gray-2 dark:text-site-white-4"
        >
          Niyomufasha Fabrice
        </h3>

        {/* <button
          v-if="index === Object.keys(timeline).length - 1"
       
          class="text-xs inline-flex items-center p-2 mb-1 font-medium text-site-gray-2 rounded-lg border border-site-gray-4 hover:bg-site-green-5 dark:hover:text-site-gray-1 dark:hover:bg-site-green-5"
        >
          <fa
            icon="download"
            class="text-site-gray-2 mr-2 dark:text-site-yellow-2"
          />
          Contract
        </button> */}
        <time
          class="text-xs md:text-sm block mb-2 text-center font-bold leading-none text-site-green-3"
        >
           jun 24, 2023
        </time>
      </div>
    </li>
    <li
      v-for="(device, key, index) in timeline"
      
      class="relative mb-3 sm:mb-0 sm:w-auto w-1/2 text-center "
    >
      <div class="flex items-center ">
        <div
          class="flex justify-center items-center w-10 h-10 bg-site-gray-4 rounded-full ring-site-gray-5 dark:bg-site-yellow-4 ring-8 dark:ring-site-yellow-5 shrink-0"
        >
          <AiOutlineCalendar className='text-2xl text-site-gray-2 dark:text-site-yellow-2'/>
          
        </div>
        <div
         
          class="hidden sm:flex w-full bg-site-gray-2 h-0.5 dark:bg-site-yellow-2"
        ></div>
        </div>

      <div class="mt-3 sm:pr-8">
        <h3
          v-if="index !== Object.keys(timeline).length - 1"
          class="text-sm md:text-base font-semibold text-site-gray-2 dark:text-site-white-4"
        >
          Niyomufasha Fabrice
        </h3>

        {/* <button
          v-if="index === Object.keys(timeline).length - 1"
       
          class="text-xs inline-flex items-center p-2 mb-1 font-medium text-site-gray-2 rounded-lg border border-site-gray-4 hover:bg-site-green-5 dark:hover:text-site-gray-1 dark:hover:bg-site-green-5"
        >
          <fa
            icon="download"
            class="text-site-gray-2 mr-2 dark:text-site-yellow-2"
          />
          Contract
        </button> */}
        <time
          class="text-xs md:text-sm block mb-2 text-center font-bold leading-none text-site-green-3"
        >
           jun 24, 2023
        </time>
      </div>
    </li>
  </ol>

    </div>
  )
}

export default Devicetimeline