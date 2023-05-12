import React from 'react'
import Sidebar from './component/Sidebar'
import Cardstats from './component/Cardstats'
import Invoice from './component/Invoice'

function Invoiceview() {
  return (
    <div>
    <Sidebar/>
    <div class="relative md:ml-64 bg-site-white-5 dark:bg-site-gray-1 mt-3">
      <admin-navbar path="List of all Invoices " down="medium" />

      <div class="flex justify-around flex-wrap mb-6">
        <div class="w-full lg:w-6/12 xl:w-3/12 px-2">
          <Cardstats
            statSubtitle="Devices"/>
          
        </div>
        <div class="w-full lg:w-6/12 xl:w-3/12 px-2">
          <Cardstats
            statSubtitle="Invoices"/>
           
          
        </div>

        <div class="w-full lg:w-6/12 xl:w-3/12 px-2">
          <Cardstats
            statSubtitle="Declared Lost"/>
           
          
        </div>
      </div>
  
      <div class="flex flex-wrap justify-center align-baseline">
        <Invoice/>
      </div>
     
      <div class="px-4 md:px-10 mx-auto w-full">
        <footer-admin />
      </div>
    </div>
  </div>
  )
}

export default Invoiceview