import React from 'react'
import { CgSearch } from "react-icons/cg"
import { FaFilter, FaSortUp } from "react-icons/fa"
import { HiOutlineDownload } from "react-icons/hi"
import { AiFillMobile, AiFillEye } from "react-icons/ai"




function Invoice() {
  return (
    <div>

<div class="w-full justify-center my-2">
    <div class="flex w-2/4 mx-auto">
      <input
        type="search"
        class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
      />
      <button
        class="btn inline-block px-6 py-2.5 bg-site-gray-1 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-site-gray-2 hover:shadow-lg focus:bg-site-gray-1 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-site-gray-1 active:shadow-lg transition duration-150 ease-in-out items-center"
        type="button"
        id="button-addon2"
      >
        <CgSearch/>
      </button>
    </div>
  </div>
  <div class="w-[60rem] px-2 overflow-x-auto relative shadow-md sm:rounded-lg">
   
    <ul class="flex justify-between border-b border-site-white-3">
      <li class="flex basis-2/5 border-b-2 hover:border-site-green-1">
        <a class="relative block p-4">
          <div class="flex items-center justify-center">
            <FaFilter/>
            &nbsp;
        

            <div class="flex gap-8">
              <div class="relative">
                <details
                  class="group [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary
                    class="flex items-center gap-2 pb-1 text-site-gray-1 transition border-b border-gray-400 cursor-pointer hover:border-gray-600 dark:text-site-yellow-4"
                  >
                    <span class="text-sm font-medium">By Device</span>

                    <span class="transition group-open:-rotate-180">
                      <FaSortUp/>
                    </span>
                  </summary>

                  <div
                    class="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2"
                  >
                    <div
                      class="bg-white border border-gray-200 rounded w-96 dark:bg-site-gray-2"
                    >
                      <header class="flex items-center justify-between p-4">
                        <span
                          class="text-sm text-site-gray-3 dark:text-site-yellow-4"
                        >
                          0 Selected
                        </span>

                        <button
                          type="button"
                          class="text-sm text-site-gray-2 underline underline-offset-4 dark:text-site-yellow-5"
                        >
                          Reset
                        </button>
                      </header>

                      <ul
                        class="p-4 space-y-1 border-t border-gray-200 dark:text-site-yellow-4"
                      >
                        <li>
                          <label
                            for="FilterInStock"
                            class="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterInStock"
                              class="w-5 h-5 border-gray-300 rounded"
                            />

                            <span class="text-sm font-medium">Phones</span>
                          </label>
                        </li>

                        <li>
                          <label
                            for="FilterPreOrder"
                            class="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterPreOrder"
                              class="w-5 h-5 border-gray-300 rounded"
                            />

                            <span class="text-sm font-medium">Computers</span>
                          </label>
                        </li>

                        <li>
                          <label
                            for="FilterOutOfStock"
                            class="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOutOfStock"
                              class="w-5 h-5 border-gray-300 rounded"
                            />

                            <span class="text-sm font-medium">Others</span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>

              <div class="relative">
                <details
                  class="group [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary
                    class="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
                  >
                    <span class="text-sm font-medium">By Price</span>

                    <span class="transition group-open:-rotate-180">
                      <FaSortUp/>
                    </span>
                  </summary>

                  <div
                    class="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2"
                  >
                    <div class="bg-white border border-gray-200 rounded w-96">
                      <header class="flex items-center justify-between p-4">
                        <span class="text-sm text-gray-700">
                          The highest price is $600
                        </span>

                        <button
                          type="button"
                          class="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Reset
                        </button>
                      </header>

                      <div class="p-4 border-t border-gray-200">
                        <div class="flex justify-between gap-4">
                          <label
                            for="FilterPriceFrom"
                            class="flex items-center gap-2"
                          >
                            <span class="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceFrom"
                              placeholder="From"
                              class="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                            />
                          </label>

                          <label
                            for="FilterPriceTo"
                            class="flex items-center gap-2"
                          >
                            <span class="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceTo"
                              placeholder="To"
                              class="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>

          
          </div>
        </a>
      </li>
      <li class="flex basis-1/5 border-b-2 hover:border-site-green-1">
        <a class="relative block p-4" >
          <div class="flex items-center justify-center">
            <HiOutlineDownload/>

            <span class="ml-1 text-xs font-medium text-gray-900">
              Export CSV
            </span>
          </div>
        </a>
      </li>
    </ul>
 
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-site-gray-1 uppercase bg-site-gray-5 dark:bg-site-yellow-3 dark:text-site-gray-1"
      >
        <tr>
          <th scope="col" class="py-3 px-1">Id</th>
          <th scope="col" class="py-3 px-1">Name</th>
          <th scope="col" class="py-3 px-1 hidden lg:table-cell">Model</th>
          <th scope="col" class="py-3 px-1">Sold To</th>
          <th scope="col" class="py-3 px-1 hidden md:table-cell">Date</th>
          <th scope="col" class="py-3 px-1 hidden lg:table-cell">Price</th>
          <th scope="col" class="py-3 px-1">Actions</th>
        </tr>
      </thead>
      

      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        > 
          
        
          <td class="py-4 px-2 text-site-gray-1 dark:text-site-white-2">
            <div class="flex">
              <span class=""> 1 </span>
              <span
                class="p-1 bg-site-yellow-5 rounded-full text-site-yellow-1"
              >
               <AiFillMobile/>
                <fa
                  v-else-if="invoice.transfer.device.category == 'computer'"
                  icon="laptop"
                ></fa>
                <fa v-else icon="plug"></fa>
              </span>
            </div>
          </td>
          <th
            scope="row"
            class="py-4 px-4 font-medium whitespace-nowrap dark:text-white"
          >
            <ul>
              <li class="text-site-gray-1 font-bold dark:text-site-white-5">
                Lenovo
              </li>
              <li> phone </li>
            </ul>
          </th>
        
          <td class="py-4 px-2">
            <ul class="text-xs">
              <li
                class="text-xs text-site-gray-1 font-bold dark:text-site-white-2"
              >
                Model:  U430
              </li>
              <li class="text-xs my-1">
              SN/IMEI:  7800620718
              </li>
            </ul>
          </td>
          
          <td class="py-4 px-2">
            <ul class="text-xs">
              <li
                class="text-xs text-site-gray-1 font-bold dark:text-site-white-2"
              >
                Ftrucker
              </li>
              <li class="text-xs my-1">
              07800620718
              </li>
            </ul>
          </td>


          <td class="text-xm py-4 px-2 hidden md:table-cell">
            <span class="text-site-gray-2 px-2 rounded-full bg-site-white-4">
               jan 23, 2023
            </span>
            <p>
              <span
                class="mt text-site-yellow-2 px-2 rounded-full bg-site-yellow-5"
              >
                Warranty
                <fa icon="xmark-circle" class="text-site-yellow-1" />
              </span>
            </p>
          </td>
          <td class="py-4 px-2 hidden lg:table-cell">
             RWF 670,000
          </td>
          <td class="py-4 px-2 text-right">
            <ul class="flex justify-around text-site-green-5 text-md">
              <li class="hover:text-site-green-4">
                <AiFillEye/>
              </li>
              <li
                class="hover:text-site-green-4"
              >
                <HiOutlineDownload />
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

    </div>
  )
}

export default Invoice