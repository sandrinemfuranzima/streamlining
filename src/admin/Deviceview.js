import React from 'react'
import { NavLink } from 'react-bootstrap'
import Sidebar from './component/Sidebar'
import Cardstats from './component/Cardstats'
import Devicecard from './component/Devicecard'

function Deviceview() {
  return (
    <div>
        <Sidebar/>
        <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1">
      <admin-navbar path="List of all Invoices " down="medium" />
       {/* Card Devices  */}
      <div class="flex justify-around flex-wrap mb-6">
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
       
          <Cardstats
          
          statSubtitle="Devices"
            statTitle="devices.length"
            statArrow="devices.length !== 0 ? 'up' : 'down'"
            statPercent="0.4"
            statPercentColor="
              devices.length !== 0 ? 'text-emerald-500' : 'text-red-500'
            "
            statDescripiron="This week"
            statIconName="chart-bar"
            statIconColor="bg-site-yellow-1"
          
          
          />





        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
          <Cardstats/>
        </div>

        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
        <Cardstats/>
        </div>
        <div class="self-center w-full lg:w-6/12 xl:w-3/12 px-4 ">
          <NavLink
            to="`/${$i18n.locale}/admin/devices/pending`"
            className=" cursor-pointer group flex items-center basis-2/5 justify-between rounded-lg border border-current px-3 py-2 text-site-green-2 transition-colors hover:bg-site-green-1 focus:outline-none focus:ring active:bg-site-green-3"
          >
            <span class="font-medium transition-colors group-hover:text-white">
              My Pending Device
            </span>

            <span
              class="ml-4 flex-shrink-0 rounded-full border border-current bg-white p-2 text-site-green-2 group-active:text-site-green-1"
            >
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg>
            {/* <fa icon="arrow-right" class="h-5 w-6" /> */}
            </span>
          </NavLink>
        </div>
      </div>

      {/* Devices  */}
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
            class="btn inline-block px-6 py-2.5 bg-site-gray-1 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-site-gray-2 hover:shadow-lg focus:bg-site-gray-1 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-site-gray-1 active:shadow-lg transition duration-150 ease-in-out items-center dark:bg-site-yellow-3"
            type="button"
            id="button-addon2"
          >
            <fa icon="search"></fa>
          </button>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-around flex-wrap ">
        
        <Devicecard
        v-for="(device, index) in devices"
        key="index"
        device="device"
        class="basis-1/4"
        name="device.name"
        model="device.device_model"
        imei="device.mac_address"
        date="formatDate(device.date_of_creation)"
        status="device.availability"
        type="device.category"
        text="device.desc"
        />
         <Devicecard
        v-for="(device, index) in devices"
        key="index"
        device="device"
        class="basis-1/4"
        name="device.name"
        model="device.device_model"
        imei="device.mac_address"
        date="formatDate(device.date_of_creation)"
        status="device.availability"
        type="device.category"
        text="device.desc"
        />
      
       
      </div>
      {/* -- ---- -- */}
      <div class="px-4 md:px-10 mx-auto w-full">
        <footer-admin />
      </div>
    </div>

    </div>
  )
}

export default Deviceview