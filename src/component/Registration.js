import React from 'react'
import { Link } from 'react-router-dom'
function Registration() {
  return (
    <div className=''>
     



<section class="py-24   ">
    <div class="container mx-auto px-4 h-full">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-6/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-site-white-4 border-0 dark:bg-site-gray-1"
          >
            <div class="rounded-t mb-0 px-6 py-6">
              <div class="mb-3">
                <h6
                  class="text-site-gray-1 text-sm font-bold dark:text-site-white-4"
                >
                  Sign up with
                </h6>
              </div>
              <div class="btn-wrapper">
                <h2
                  class="font-bold text-lg mb-5 text-site-gray-1 dark:text-site-white-4"
                >
                  Let's Set your account up
                </h2>
                
              </div>
              <hr class="mt-4 border-b-1 text-site-gray-1" />
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form id="form"  action="text.com">
               
                <div v-if="step == 1" class="relative w-full mb-3">
                  

                <label class="block uppercase text-site-gray-1 text-xs font-bold mb-2 dark:text-site-white-5">
      Natioanl id
      </label>
      <input placeholder='119...'
        class="border-0 px-3 py-3 placeholder-site-white-1 text-site-gray-1 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
       
      />


                  <span
                    class="text-xs text-site-yellow-1"
                    v-if="this.errors.nationalId"
                  >
                    {/* <span>error national id </span> */}
                  </span>
                </div>

                <div v-if="step == 1" class="relative w-full mb-3">
                  
                <label class="block uppercase text-site-gray-1 text-xs font-bold mb-2 dark:text-site-white-5">
      Phone Number
      </label>
      <input placeholder='07...'
        class="border-0 px-3 py-3 placeholder-site-white-1 text-site-gray-1 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
       
      />
                  <span
                    class="text-xs text-site-yellow-1"
                    v-if="this.errors.phoneNumber"
                  >
                    {/* <span>error phone </span> */}
                  </span>
                </div>

{/*                verification section
                <div v-if="step == 2" class="relative w-full mb-3">
                  <input-text
                    id="verificationCode"
                    placeholder="Your Verification Code"
                    size="lg"
                    label="'Enter Code Send to: ' + phoneNumber"
                    v-bind:data="verificationCode"
                    v-on:update="verificationCode = $event"
                  />
                  <span
                    class="text-xs text-site-yellow-1"
                    v-if="this.errors.verificationCode"
                  >
                    <span>verifivation code</span>
                  </span>
                </div> */}

                {/*  password section
                <div v-if="step == 3" class="relative w-full mb-3">
                  <input-text
                    id="password"
                    placeholder="Create Your password"
                    size="lg"
                    type="password"
                    label="Create Your password "
                    v-bind:data="password"
                    v-on:update="password = $event"
                  />
                  <span
                    class="text-xs text-site-yellow-1"
                    v-if="this.errors.password"
                  >
                    <span>{{ this.errors.password }}</span>
                  </span>
                </div> */}

                
                <div v-if="step == 4">
                  <div class="w-2/3 mx-auto">
                    <h3
                      class="font-bold text-lg mb-3 leading-5 text-site-gray-1 dark:text-site-yellow-3"
                    >
                      Account Successfully Created!
                      <Link
                        to="/authenticate"
                        class="text-site-green-3"
                      >
                        sign in
                      </Link>
                    </h3>
                    {/* <img
                      class="w-2/3 mx-20"
                      :src="accountCreationSuccessPicture"
                    /> */}
                  </div>
                </div>

                <div v-if="step == 1">
                  <label class="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      checked
                      class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      disabled
                    />
                    <span class="ml-2 text-sm font-semibold text-blueGray-600">
                      I agree with the
                      pricary
                    </span>
                  </label>
                </div>

                <div v-if="step !== 4" class="text-center mt-6">
                  <button
                    class="bg-site-gray-2 text-site-white-5 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg hover:bg-site-gray-1 outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  >
                    Create Account
                  </button> 
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>








    </div>
  )
}

export default Registration