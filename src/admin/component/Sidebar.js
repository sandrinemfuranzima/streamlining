import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillDashboard} from 'react-icons/ai';
import { MdOutlineSettingsSuggest, MdPublishedWithChanges } from 'react-icons/md';
import { HiDeviceMobile, HiPlusCircle, HiShare } from 'react-icons/hi';
import { FaFileInvoice} from 'react-icons/fa';
import { IoMdStats } from 'react-icons/io'
import { TbTransformFilled } from 'react-icons/tb'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import './style/sidebar.css'



function Sidebar() {
  return (
 
     

     <nav
    class="md:left-0 text-left md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-site-white-5 flex flex-wrap items-center justify-between relative md:w-64 z-10  px-6 dark:bg-site-gray-2 " 
  >
    <div
      class=" content md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto  "
    >
      <button
        class="cursor-pointer text-site-gray-1 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border-solid border-transparent"
        type="button"
         >
        
        <svg  class="text-site-gray-1 text-2xl dark:text-site-yellow-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg>
     
         
    
      </button>
      <div className='bg-white fixed  z-10 md:w-1/6 pt-4'>
      <NavLink
        class="md:block text-left md:pb-2 text-site-green-2 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0 dark:text-site-white-5"
        to="/"
      >
        <p className='font-bold'>Streamlining</p>
        {/* <p className='font-bold'>Business</p> */}
      </NavLink>
      </div>
      <ul class="md:hidden items-center flex flex-wrap list-none ">
        <li class="inline-block relative">
          O
        </li>
        <li class="inline-block relative">
          T
        </li>
        <li class="inline-block relative">
         H
        </li>
      </ul>
     
      <div
        class="z-0    px-2 md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-[6rem] md:shadow-none shadow absolute top-0 left-0 right-0  overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
    
      >
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
              
              >
                <svg  class="text-site-gray-1 text-2xl dark:text-site-yellow-3" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg>
     
              </button>
            </div>
          </div>
        </div>

        <hr class="my-4 md:min-w-full " />
 
        <h6
          class="md:min-w-full text-site-gray-2 text-xs uppercase font-bold block pt-1 pb-3 no-underline dark:text-site-yellow-5"
        >
          Admin Layout Pages
        </h6>

        <ul
          class="md:flex-co justify-start md:min-w-full flex flex-col list-none"
        >
          <li class="items-start">
            <NavLink to="/index">
            <div class="flex text-xs uppercase py-2 font-bold gap-1 ">
              <AiFillDashboard className='h-[1.3rem] w-[1.3rem]'/>
              <p className='mt-1'>Daashboard </p>
            </div>  
            </NavLink>
          </li>

          <li class="items-center">
            <NavLink to="/setng">
             
              
                <div class="flex text-xs uppercase py-2 font-bold gap-1 ">
               <MdOutlineSettingsSuggest className='h-[1.3rem] w-[1.3rem]' />
     
                <p className='mt-1'>Settings</p>
                </div>
             
            </NavLink>
          </li>
        </ul>
        <hr class="my-4 md:min-w-full" />
        
        <h6
          class="md:min-w-full text-site-gray-2 text-xs uppercase font-bold block pt-1 pb-3 no-underline dark:text-site-yellow-5"
        >
          Device Management
        </h6>
        <ul
          class="md:flex-co justify-start md:min-w-full flex flex-col list-none"
        >
          <li class="items-center">
            <NavLink to="/device">
           <div class="flex text-xs uppercase py-2 font-bold gap-1 ">
          <HiDeviceMobile className='h-[1.3rem] w-[1.3rem]'/>
                <p className='mt-1'>Devices</p>
             </div>
            </NavLink>
          </li>
          
          <li class="items-center">
            <NavLink to="/invoice">
           
                <div class="flex text-xs uppercase py-2 font-bold gap-2">
                 <FaFileInvoice className='h-[1.3rem] w-[1.3rem]' />
     
                 <p className='mt-1'>Invoices </p>
                </div>
              
            </NavLink>
          </li>
          <li class="items-center">
            <NavLink to="/adddevice" >
              
                 <div class="flex text-xs uppercase py-2 font-bold gap-1 ">
              <HiPlusCircle className='h-[1.3rem] w-[1.3rem]'/>
     
                <p className='mt-1'>Add Devices</p>
                </div>
             
            </NavLink>
          </li>
        </ul>

        <hr
          class="my-4 md:min-w-full"
          v-if="userInfo !== null && userInfo.account_type === 'business'"
        />
        <h6
          class="md:min-w-full text-site-gray-2 text-xs uppercase font-bold block pt-1 pb-3 no-underline dark:text-site-yellow-5"
         
        >
          Business
        </h6>

        <ul
          class="md:flex-co justify-start md:min-w-full flex flex-col list-none"
         
        >
           <li class="items-center">
            <NavLink to="/assigndevice">
              <div class="flex text-xs uppercase py-2 font-bold gap-1"
              >
              <HiShare className='h-[1.3rem] w-[1.3rem]'/>
     
               <p className='mt-1'>Assign New Device</p> 
              </div>
            </NavLink>
          </li>
          <li class="items-center">
            <NavLink to="/publishdevice">
              <div class="text-xs uppercase py-2 font-bold flex gap-1"
              >
              <MdPublishedWithChanges className='h-[1.3rem] w-[1.3rem] ' />
                <p className='pt-1'>Publish Device</p>
              </div>
            </NavLink>
          </li>
          <li class="items-center">
            <NavLink to="/statusview">
              <div class="text-xs uppercase py-2 font-bold flex gap-1"
              >
              <IoMdStats className='h-[1.3rem] w-[1.3rem]'/>
                <p className='pt-1'>Business Stats</p>
              </div>
            </NavLink>
          </li>
          <li class="items-center">
            <NavLink to="/traceownership">
              <div class="text-xs uppercase py-2 font-bold  flex gap-1"
              >
              <TbTransformFilled className='h-[1.3rem] w-[1.3rem]'/>   
                <p className='pt-1'>Trace ownership</p>
              </div>
            </NavLink>
          </li>
        </ul>

        <hr class="my-4 md:min-w-full" />
       
        <h6
          class="md:min-w-full text-site-gray-2 text-xs uppercase font-bold block pt-1 pb-4 no-underline dark:text-site-yellow-5"
        >
          Authentication
        </h6>
        
        <ul
          class="md:flex-co justify-start md:min-w-full flex flex-col list-none"
          v-if="isAuthenticated"
        >
           <li class="items-center">
            <NavLink >
              <div class="text-xs uppercase py-3 font-bold flex gap-1"
              >
              <RiLogoutCircleRLine className='h-[1.3rem] w-[1.3rem]' />    
                <p className='pt-1'>Logout</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>






    
  )
}

export default Sidebar