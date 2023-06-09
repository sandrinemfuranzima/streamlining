import React from 'react'
import Footer from "../component/Footer"
const contact = () => {
  return (
    <div>
    <div class="container mx-auto py-24 dark:bg-site-gray-1">
    <div class="lg:flex">
      <div
        class="xl:w-2/5 lg:w-2/5 text-white border-r-8 border-site-yellow-2 bg-site-gray-1 dark:bg-site-green-1 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none"
      >
        <div class="xl:w-5/6 xl:px-0 px-8 mx-auto">
          <h1 class="xl:text-4xl text-3xl pb-4 text-white font-bold">
            Get in touch
          </h1>
          <p class="text-xl pb-8 leading-relaxed font-normal lg:pr-4">
            Got a question about us? Are you interested in partnering with us?
            Have some suggestions or just want to say Hi? Just contact us. We
            are here to asset you.
          </p>
          <div class="flex justify-center pb-4 items-center">
            <div>
              <fa icon="phone"></fa>
            </div>
            <p class="pl-4 text-base">+250782222564</p>
          </div>
          <div class="flex justify-center items-center">
            <div>
              <fa icon="envelope"></fa>
            </div>
            <p class="pl-4 text-white text-base">Info@eholdings.com</p>
          </div>
          <p class="text-lg text-white pt-10 tracking-wide">
            KN 123 Street, Block 3
            <br />
            Revolution Boulevard, Kigali
          </p>
          <a href="javascript:void(0)">
            <p class="text-white pt-16 font-bold tracking-wide underline">
              More About Us
            </p>
          </a>
        </div>
      </div>
      <div
        class="self-center xl:w-3/5 lg:w-3/5 bg-site-white h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br -ml-5"
      >
        <form
          id="contact"
          class="text-site-gray-1 bg-site-white-5 border-l-8 border-site-yellow-2 py-4 px-8 rounded-tr rounded-br dark:bg-site-gray-1 dark:text-site-gray-5"
        >
          <h1 class="text-4xl font-extrabold mb-6">Enter Details</h1>
          <div class="flex sm:flex-row flex-col justify-around mb-6">
            <div class="mb-6 xl:mb-0">
              <div class="flex flex-col">
                <input
                  required
                  id="first_name"
                  name="full_name"
                  type="text"
                  class="focus:outline-none focus:border focus:border-site-green-1 font-normal full h-10 flex items-center pl-3 text-sm border-site-gray-5 rounded border-2"
                  placeholder="First name"
                />
              </div>
            </div>
            <div class="mb-6 xl:mb-0">
              <div class="flex flex-col">
                <input
                  required
                  id="lastname"
                  name="lastname"
                  type="text"
                  class="focus:outline-none focus:border focus:border-site-green-1 font-normal full h-10 flex items-center pl-3 text-sm border-site-gray-5 rounded border-2"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          <div class="flex sm:flex-row flex-col justify-around mb-6">
            <div class="mb-6 xl:mb-0">
              <div class="flex flex-col">
                <input
                  required
                  id="full_name"
                  name="full_name"
                  type="text"
                  class="focus:outline-none focus:border focus:border-site-green-1 font-normal full h-10 flex items-center pl-3 text-sm border-site-gray-5 rounded border-2"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div class="mb-6 xl:mb-0">
              <div class="flex flex-col">
             <label
                  for="lastname"
                  class="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                >
                  LastName
                </label> 
                <input
                  required
                  id="lastname"
                  name="email"
                  type="text"
                  class="focus:outline-none focus:border focus:border-site-green-1 font-normal full h-10 flex items-center pl-3 text-sm border-site-gray-5 rounded border-2"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
         
          <div class="w-full mt-6">
            <div class="flex flex-col">
              <label class="text-sm font-semibold mb-2" for="message">
                Message
              </label>
              <textarea
                placeholder=""
                name="message"
                class="border-site-gray-1 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-site-green-1"
                rows="8"
                id="message"
              ></textarea>
            </div>
            <action-button type="primary" size="md" text="btn.send" class="" />
          </div>
          <button className='bg-site-yellow-2 px-2 py-1 focus:outline-none  hover:bg-violet-400 rounded-lg text-sm mr-3'>Send</button>
        </form>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
    </div>
  )
}

export default contact
