import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


function Authenticate() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState('');

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  return (
    <div>
      
      <section class="py-24 lithopedion">
    <div class="container mx-auto px-4 h-full">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-6/12 px-4">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-site-white-4 border-0 dark:bg-site-white-2"
          >
            <div class="rounded-t mb-0 px-6 py-6">
              <div class="mb-3">
                <h6 class="text-site-gray-1 text-sm font-bold">
                  <fa icon="fingerprint" class="text-3xl"></fa>
                </h6>
              </div>
              <div class="btn-wrapper">
                <h2 class="font-bold text-lg mb-5 text-site-gray-1">
                  Login to your account
                </h2>
              </div>
              <hr class="mt-4 border-b-1 text-site-gray-1" />
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form id="form">
                <span
                  class="text-xs text-site-yellow-1"
                  v-if="this.errors.length"
                >
                  {/* <span v-for="error in errors" key="error">{{ error }}</span> */}
                </span>
                <div className="relative w-full mb-3">
                  <label htmlFor="phoneNumber" className="block uppercase text-gray-700 text-xs font-bold mb-2">
                   Your Phone
                  </label>
                  <input
                   type="text"
                   id="phoneNumber"
                   placeholder="07.."
                   value={phoneNumber}
                   onChange={(event) => setPhoneNumber(event.target.value)}
                   className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>

                <div className="relative w-full mb-3">
      <label htmlFor="password" className="block uppercase text-gray-700 text-xs font-bold mb-2">
        Your password
      </label>
      <input
        type="password"
        id="password"
        placeholder="What is your password?"
        value={password}
        onChange={handlePasswordChange}
        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      />
    </div>

                <div>
                  <label class="inline-flex items-center cursor-pointer">
                    <span class="ml-2 text-sm font-semibold text-blueGray-600">
                      Don't have an account?
                      <NavLink
                        to="/registration"
                        class="text-site-green-3"
                      >
                        SignUp
                      </NavLink>
                    </span>
                  </label>
                </div>

                <div class="text-center mt-6">
                  <button
                    class="bg-site-gray-2 text-site-white-5 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg hover:bg-site-gray-1 outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  >
                    Login
                  </button>
                  <NavLink to="/index">admin</NavLink>
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

export default Authenticate