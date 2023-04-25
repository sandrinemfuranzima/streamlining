import React from 'react'
import { NavLink } from 'react-bootstrap'


function Devicecard() {
  return (
    <div>

<div
    class="relative rounded-xl  dark:bg-site-gray-3
     border-site-white-3 cursor-pointer p-8 shadow-xl mx-5 my-5 bg-contain bg-no-repeat  bg-blue-100 w-[15rem]"

  >
    <NavLink to="`/${$i18n.locale}/admin/device/${device.uuid}`">
      <span
        class="absolute top-4 rounded-full py-1.5 text-xs font-medium text-gray-1"
      >
        {/* Since: {{ date }} */}
      </span>
      <span
        class="absolute right-4 top-4 rounded-full px-3 py-1.5 text-xs font-medium  typeClass"
      
      >
        {/* {{ status }} */}
      </span>

      <div class="mt-4 text-gray-500 dark:text-site-yellow-5">
        <div class="flex justify-around">
          <p
            class="dark:text-site-yellow-4 dark:bg-site-gray-1 dark:p-1 dark:rounded-full"
          >
            <fa v-if="type == 'phone'" icon="mobile-button" class="text-xl" />
            <fa v-else-if="type == 'computer'" icon="laptop" class="text-xl" />
            <fa v-else icon="type" class="text-xl" />
          </p>
          <p class="text-xs">SN/IMEI: 
          {/* {{ truncated_imei }} */}
          </p>
        </div>

        <h3 class="mt-4 text-xs text-site-gray-1">
          <p class="font-bold text-ellipsis">
            {/* {{ truncated_name }} */}
          </p>

          <p class="text-xs text-site-gray-3 dark:text-site-gray-1">
            {/* Model: {{ model }} */}
          </p>
          <p></p>
        </h3>

        <p class="mt-2 hidden text-xs text-gray-4 sm:block text-ellipsis">
          {/* {{ truncated_text }} */}
        </p>

        <div class="flex mt-5 text-lg sm:block">
          <div class="flex">
            <div
              class="border-r-2 px-2 text-site-green-3 hover:text-site-green-1 dark:text-site-yellow-4"
            >
              <popover
                title="Check out device"
                text="View your device for further actions"
              >
                <fa icon="eye" />
              </popover>
            </div>
            <div
              class="border-r-2 px-2 text-site-green-3 hover:text-site-green-1 dark:text-site-yellow-4"
            >
              <fa icon="gauge" />
            </div>

            <div
              class="px-2 text-site-green-3 hover:text-site-green-1 dark:text-site-yellow-4"
            >
              <popover
                title="Report lost or Stolen"
                text="Did you lose this device? report it as lost."
              >
                <fa icon="circle-info"></fa>
              </popover>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  </div>

    </div>
  )
}

export default Devicecard