import React from 'react'
import { NavLink } from 'react-bootstrap'

function Sidebar() {
  return (
    <div>
     

     <nav
    class="md:left-0 text-left md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-site-white-5 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 dark:bg-site-gray-2"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
       {/* Toggler  */}
      <button
        class="cursor-pointer text-site-gray-1 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border-solid border-transparent"
        type="button"
        // v-on:click="
        //   toggleCollapseShow (
        //     'bg-site-white-4 dark:bg-site-gray-2 m-2 py-3 px-6'
        //   )
        
      >
        <fa
          icon="['fa', 'bars']"
          class="text-site-gray-1 text-2xl dark:text-site-yellow-3"
        />
      </button>
       {/* Brand  */}
      <NavLink
        class="md:block text-left md:pb-2 text-site-green-2 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 dark:text-site-white-5"
        to="/"
      >
        E-Holdings
        {/* <p v-if="userInfo !== null">{{ userInfo.account_type }}</p> */}
      </NavLink>
       {/* User  */}
      <ul class="md:hidden items-center flex flex-wrap list-none">
        <li class="inline-block relative">
          <notification-dropdown />
        </li>
        <li class="inline-block relative">
          <dark-mode-switcher />
        </li>
        <li class="inline-block relative">
          <user-dropdown />
        </li>
      </ul>
      {/* Collapse  */}
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        // v-bind:class="collapseShow"
      >
         {/* Collapse header  */}
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-site-yellow-2"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <NavLink 
                class="md:block text-left md:pb-2 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 text-site-green-2"
                to="/"
              >
                E-Holdings
              </NavLink>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border-solid border-transparent"
                // v-on:click="toggleCollapseShow('hidden')"
              >
                <fa
                  icon="['fa', 'times']"
                  class="text-site-green-1 text-xl dark:text-site-yellow-3"
                />
              </button>
            </div>
          </div>
        </div>

        <hr class="my-4 md:min-w-full" />
         {/* Heading  */}
        <h6
          class="md:min-w-full text-site-gray-2 text-xs uppercase font-bold block pt-1 pb-4 no-underline dark:text-site-yellow-5"
        >
          Admin Layout Pages
        </h6>
         {/* Navigation  */}

        <ul
          class="md:flex-co justify-start md:min-w-full flex flex-col list-none"
        >
          <li class="items-start">
            <NavLink
              to="`/${$i18n.locale}/admin`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                href="href"
                click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                // class="[
                //   isActive
                //      'text-site-yellow-2 hover:text-site-yellow-3'
                //     'text-site-gray-4 hover:text-site-gray-3',
                // ]"
              >
                <fa
                  icon="['fa', 'gauge']"
                  class="text-xl"
                //   class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                <div className='flex gap-1 px-2'>
                <svg  className='mt-[2px]' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM482 232c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8h-44c-4.4 0-8-3.6-8-8v-80zM270 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44zm90.7-204.5l-31.1 31.1a8.03 8.03 0 0 1-11.3 0L261.7 352a8.03 8.03 0 0 1 0-11.3l31.1-31.1c3.1-3.1 8.2-3.1 11.3 0l56.6 56.6c3.1 3.1 3.1 8.2 0 11.3zm291.1 83.6l-84.5 84.5c5 18.7.2 39.4-14.5 54.1a55.95 55.95 0 0 1-79.2 0 55.95 55.95 0 0 1 0-79.2 55.87 55.87 0 0 1 54.1-14.5l84.5-84.5c3.1-3.1 8.2-3.1 11.3 0l28.3 28.3c3.1 3.1 3.1 8.1 0 11.3zm43-52.4l-31.1-31.1a8.03 8.03 0 0 1 0-11.3l56.6-56.6c3.1-3.1 8.2-3.1 11.3 0l31.1 31.1c3.1 3.1 3.1 8.2 0 11.3l-56.6 56.6a8.03 8.03 0 0 1-11.3 0zM846 582c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8v-44c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v44z"></path></svg>
               <NavLink>DASHABOARD</NavLink></div>
              </a>
            </NavLink>
          </li>

          <li class="items-center">
            <NavLink
              to="`/${$i18n.locale}/admin/settings`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                href="href"
                click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                // class="[
                //   isActive
                //     ? 'text-site-yellow-2 hover:text-site-yellow-3'
                //     : 'text-site-gray-4 hover:text-site-gray-3',
                // ]"
              >
                <fa
                  icon="['fa', 'gears']"
                  class="text-xl"
                //   class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                {/* {{ $t("nav.settings") }} */}
                <div className='flex gap-1 px-2'>
                <svg  className='mt-[2px]' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0 1 12 8.57 3.44 3.44 0 0 1 15.43 12a3.43 3.43 0 1 1-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0 0 13.71 12a1.71 1.71 0 1 0-2.66 1.422z"></path></svg>
                <NavLink>SETTINGS</NavLink>
                </div>
              </a>
            </NavLink>
          </li>
        </ul>
        <hr class="my-4 md:min-w-full" />
         {/* Heading  */}
        <h6
          class="md:min-w-full text-site-gray-2 text-xs uppercase font-bold block pt-1 pb-4 no-underline dark:text-site-yellow-5"
        >
          Device Management
        </h6>
         {/* Navigation  */}

        <ul
          class="md:flex-co justify-start md:min-w-full flex flex-col list-none"
        >
          <li class="items-center">
            <router-link
              to="`/${$i18n.locale}/admin/devices`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                href="href"
                click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                // class="[
                //   isActive
                //     ? 'text-site-yellow-2 hover:text-site-yellow-3'
                //     : 'text-site-gray-4 hover:text-site-gray-3',
                // ]"
              >
                <fa
                  icon="['fa', 'mobile-button']"
                //   class="text-xl"
                //   class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                {/* {{ $t("nav.devices") }} */}
                <div className='flex gap-1 px-2'>
                <svg className='mt-[2px]' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 10 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 15.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zM9 12H1V2h8v10z"></path></svg>
                <NavLink>DEVICES</NavLink>
                </div>
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              to="`/${$i18n.locale}/admin/invoice`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                href="href"
                click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                // class="[
                //   isActive
                //     ? 'text-site-yellow-2 hover:text-site-yellow-3'
                //     : 'text-site-gray-4 hover:text-site-gray-3',
                // ]"
              >
                <fa
                  icon="['fa', 'file-contract']"
                  class="text-xl"
                //   class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                {/* {{ $t("nav.invoices") }} */}
                <div className='flex gap-1 px-2'>
                <svg className='mt-[2px]' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 256H96v64h192v-64zm89-151L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm256 304c0 4.42-3.58 8-8 8h-80c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16zm0-200v96c0 8.84-7.16 16-16 16H80c-8.84 0-16-7.16-16-16v-96c0-8.84 7.16-16 16-16h224c8.84 0 16 7.16 16 16z"></path></svg>
                <NavLink>INVOICES</NavLink>
                </div>
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <NavLink
              to="`/${$i18n.locale}/admin/add-device`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                href="href"
                click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                // class="[
                //   isActive
                //     ? 'text-site-yellow-2 hover:text-site-yellow-3'
                //     : 'text-site-gray-4 hover:text-site-gray-3',
                // ]"
              >
                <fa
                  icon="['fa', 'circle-plus']"
                  class="text-xl"
                //   class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                {/* {{ $t("nav.addDevice") }} */}
                <div className='flex gap-1 px-2'>
                <svg className='mt-[2px]' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.125 48 48 141.125 48 256s93.125 208 208 208 208-93.125 208-208S370.875 48 256 48zm107 229h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z"></path></svg>
               <NavLink>ADD DEVICE</NavLink>  
               </div>     
              </a>
            </NavLink>
          </li>
        </ul>

        <hr
          class="my-4 md:min-w-full"
          v-if="userInfo !== null && userInfo.account_type === 'business'"
        />
         {/* Heading  */}
        <h6
          class="md:min-w-full text-site-gray-2 text-xs uppercase font-bold block pt-1 pb-4 no-underline dark:text-site-yellow-5"
          v-if="userInfo !== null && userInfo.account_type === 'business'"
        >
          Business
        </h6>
         {/* Navigation  */}

        <ul
          class="md:flex-co justify-start md:min-w-full flex flex-col list-none"
          v-if="userInfo !== null && userInfo.account_type === 'business'"
        >
          <li class="items-center">
            <router-link
              to="`/${$i18n.locale}/admin/assign-device`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                href="href"
                click="navigate"
                class="text-xs uppercase py-3 font-bold block "
              
                // class="[
                // //   isActive
                // //     ? 'text-site-yellow-2 hover:text-site-yellow-3'
                // //     : 'text-site-gray-4 hover:text-site-gray-3',
                // // ]"
              >
                <fa
                  icon="['fa', 'share-nodes']"
                  class="text-xl "
                //   class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                Assign New Device
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <NavLink
              to="`/${$i18n.locale}/admin/publish-device`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                href="href"
                click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                // class="[
                //   isActive
                //     ? 'text-site-yellow-2 hover:text-site-yellow-3'
                //     : 'text-site-gray-4 hover:text-site-gray-3',
                // ]"
              >
                <fa
                  icon="['fa', 'file-contract']"
                  class="text-xl"
                //   class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                Publish Device
              </a>
            </NavLink>
          </li>
          <li class="items-center">
            <NavLink
              to="`/${$i18n.locale}/admin/stats`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                href="href"
                click="navigate"
                class="text-xs uppercase py-3 font-bold block   isActive
                text-site-yellow-2 hover:text-site-yellow-3
                text-site-gray-4 hover: text-site-gray-3" >
                <fa
                  icon="['fa', 'chart-simple']"
                  class="text-xl isActive ? text-site-yellow-2 opacity-75"
                  
                ></fa>
                Business Stats
              </a>
            </NavLink>
          </li>
          <li class="items-center">
            <NavLink
              to="`/${$i18n.locale}/admin/trace-ownership`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                href="href"
                click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                // class="[
                //   isActive
                //     ? 'text-site-yellow-2 hover:text-site-yellow-3'
                //     : 'text-site-gray-4 hover:text-site-gray-3',
                // ]"
              >
                <fa
                  icon="['fa', 'route']"
                  class="text-xl"
                //   class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                Trace Ownership
              </a>
            </NavLink>
          </li>
        </ul>

        <hr class="my-4 md:min-w-full" />
         {/* Heading  */}
        <h6
          class="md:min-w-full text-site-gray-2 text-xs uppercase font-bold block pt-1 pb-4 no-underline dark:text-site-yellow-5"
        >
          Authentication
        </h6>
         {/* Navigation  */}

        <ul
          class="md:flex-co justify-start md:min-w-full flex flex-col list-none"
          v-if="isAuthenticated"
        >
          <li class="items-center">
            <NavLink
              to="`/${$i18n.locale}/logout`"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                href="href"
                click="navigate"
                class="text-xs uppercase py-3 font-bold block"
                // class="[
                //   isActive
                //     ? 'text-site-yellow-2 hover:text-site-yellow-3'
                //     : 'text-site-gray-4 hover:text-site-gray-3',
                // ]"
              >
                <fa
                  icon="['fa', 'right-from-bracket']"
                  class="text-xl"
                //   class="[isActive ? 'text-site-yellow-2' : 'opacity-75']"
                ></fa>
                Logout
              </a>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>



    </div>
  )
}

export default Sidebar