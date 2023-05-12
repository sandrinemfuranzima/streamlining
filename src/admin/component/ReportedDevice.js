import React from 'react'

function ReportedDevice() {
  return (
    <div>

<div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3 class="font-semibold text-base text-blueGray-700">
          Devices Reported Lost
        </h3>
      </div>
      <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
        <action-button type="tertiary" text="btn.seeAll"></action-button>
      </div>
    </div>
  </div>
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead
      class="text-xs text-site-gray-1 uppercase bg-site-green-5 dark:bg-site-yellow-3 dark:text-site-gray-1"
    >
      <tr>
        <th scope="col" class="py-3 px-1">Id</th>
        <th scope="col" class="py-3 px-1">Name</th>
        <th scope="col" class="py-3 px-1 hidden lg:table-cell">Model</th>

        <th scope="col" class="py-3 px-1">Actions</th>
      </tr>
    </thead>
    <tbody v-if="lostDevices.length !== 0">
      <tr
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
       
      >
        <td class="py-4 px-2 text-site-gray-1 dark:text-site-white-2">
          <div class="flex">
            <span class="">index === 0 ? index + 1 : index + 1 </span>
            <span class="p-1 bg-site-yellow-5 rounded-full text-site-yellow-1">
            <svg  class="text-site-gray-1 mt-1 dark:text-site-yellow-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg>
            </span>
          </div>
        </td>
        <th
          scope="row"
          class="py-4 px-4 font-light whitespace-nowrap dark:text-white"
        >
          <ul>
            <li class="text-site-gray-1 font-bold dark:text-site-white-5">
             device.name
            </li>
            <li>
              <p>Owner: device.owner.name </p>
              <p>device.owner.phone </p>
            </li>
          </ul>
        </th>
        <td class="py-4 px-2 collapse hidden lg:table-cell">
          <ul class="text-xs">
            <li>Model:  device.device_model </li>
            <li>SN/IMEI:  device.mac_address </li>
          </ul>
        </td>

        <td class="py-4 px-2 text-right">
          <ul class="flex justify-between text-site-green-5 text-xl">
            <li class="hover:text-site-green-4">
              <popover
                title="Alert The authorities"
                text="Were you in contact with this device? let the authorities know."
              >
                <fa icon="eye"></fa>
              </popover>
            </li>
            <li class="hover:text-site-green-4">
              <popover
                title="Message the owner"
                text="Send a whatsapp message to the owner"
              >
                <svg  class="text-site-gray-1 mt-1 dark:text-site-yellow-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg>
              </popover>
            </li>
          </ul>
        </td>
      </tr>
   
    </tbody>
  </table>

    </div>
  )
}

export default ReportedDevice