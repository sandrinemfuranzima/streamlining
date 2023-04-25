import React from "react";
// import Mycarousel from './Carousel'
import { Link } from "react-router-dom";
 
import { NavLink } from 'react-router-dom';
import { FaSearch, FaWhatsapp } from "react-icons/fa";
import Footer from "../component/Footer";
import image1 from "../assets/image/image1.svg";
import image3 from "../assets/image/image3.svg";import image4 from "../assets/image/image4.svg";



export default function home() {
  return (
    <div>

<div class="dark:bg-site-gray-1 relative bg-[length:200px_200px] bg-fixed bg-right-top bg-no-repeat pb-24 md:bg-[length:400px_700px] lg:pb-12" 
// style="{ backgroundImage: 'url(' + rectanglebg + ')' }"
>
    <div class="">
      <div class="container relative  z-20  px-4 lg:px-0">
        <div class="my-10 flex flex-col-reverse items-center justify-between lg:flex-row">
          <div class="pt-8 lg:w-1/2 lg:pt-0">
            <h1 class="text-site-gray-1 border-site-yellow-3 dark:text-site-green-5 mt-24 border-l-8 pl-2 text-3xl leading-8 lg:pl-12 lg:text-6xl xl:mt-0">
              <b>Streamlining</b>
              <br />
              <span class="dark:text-site-green-5 text-4xl font-bold xl:text-4xl 2xl:text-8xl"> We track for you </span>
            </h1>
  
            <h1 class="dark:text-site-green-5 mt-6 border-l-8 py-2 pl-2 text-lg leading-6 text-gray-800 lg:pl-12 lg:text-2xl lg:leading-8">The ultimate solution for keeping track of your devices. Whether you're an individual or a business owner, our powerful and easy-to-use platform makes it simple to manage and protect your devices.</h1>
            <div class="mt-12 items-center justify-center sm:flex">
             

              <Link >
                <action-button type="tertiary" size="sm" text="btn.learnMore" class="mr-5" />
              </Link>
            </div>
            <div class="mt-12 flex items-center justify-center pl-16 sm:pl-0 md:flex md:pl-0 lg:pl-12 xl:pl-16 2xl:mt-24 2xl:pl-16">
              {/* <ActionButton/> */}
              <NavLink to="/about
              ">
              <button class="inline-flex text-black text-center  border px-5 py-1 focus:outline-none mx-1 my-30 hover:bg-violet-300 rounded-lg text-sm mr-3 bg-yellow-300" >Learn More </button>
            </NavLink>
            </div>
          </div>
          <div class="block">
            <img  src={image1} alt="LandingScreen" class="mt-4 w-96 md:w-96 rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
 
  
  
    <section class="body-font lithopedion dark bg-site-white-5 dark:bg-site-gray-1 dark:text-site-white-4"    >
      <div
        class="container mx-auto flex flex-col px-5 py-24 justify-center items-center"
      >
        <img  src={image3} alt="LandingScreen" class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" />
       
        <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1
            class="title-font sm:text-4xl text-2xl mb-4 font-bold text-site-gray-2 dark:dark:text-site-yellow-4"
          >
          Not sure about the device you are about to buy? How about we help you check it.
          </h1>
          <p class="mb-8 leading-relaxed drop-shadow-2xl">
            With our powerful search capabilities, you can quickly and easily loop up any device by searching with it's unique ID such as serial number, IMEI or any other identifying information to make sure that it's clean!
          </p>
          <div class="flex w-full justify-center items-end">
            <div
              class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left"
            >
              <form class="flex items-center">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                  <div
                    class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                  >
                    <FaSearch/>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    class="bg-site-gray-5 border border-site-gray-1 text-sm shadow-xl rounded-lg block w-full pl-10 p-2.5 dark:bg-site-gray-2"
                    placeholder="Serial Number or IMEI"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  class="p-2.5 ml-2 text-sm font-medium text-site-white-5 bg-site-gray-1 rounded-lg border border-site-gray-2 hover:bg-site-gray-2 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-site-yellow-2"
                >
                  <FaSearch/>
                  <span class="sr-only">search something</span>
                </button>
              </form>
            </div>
          </div>
          <p class="text-sm mt-5 mb-8 w-full">
            <Link
              to=""
              class="text-site-green-3 underline"
            >
              <action-button
                text="btn.searchPlace"
                type="quaternary"
                frontIcon="arrow-right"
              ></action-button>
            </Link>
          </p>
        </div>
      </div>
    </section>
  
  
  {
  /*
  
  Device look up section 
  */
  }
  
  
  
      <section
      class="relative py-20 dark:bg-site-gray-1 dark:text-site-yellow-5 text-site-gray-1"
    >
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            
            <img  src={image4} alt="LandingScreen"  class="max-w-full rounded-lg shadow-lg" />
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                class="text-site-yellow-5 p-3 text-2xl text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-site-yellow-2"
              >
               <a href="https://www.flaticon.com/free-icons/gears" title="gears icons"></a>

              </div>
              <h3 class="text-3xl font-semibold">
               Are you a business owner?
              </h3>
              <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
               Streamlining offers you powerful tools for managing and protecting your inventory. You can easily track the devices you've sold, monitor remaining warranty, and generate detailed reports to optimize your operations.
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-site-yellow-5 bg-site-yellow-2 mr-3 dark:text-site-yellow-5 dark:bg-site-yellow-3"
                      >
                        <FaWhatsapp class="text-xl"/>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">
                       Generate Contract
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-site-yellow-5 bg-site-yellow-2 mr-3 dark:text-site-yellow-5 dark:bg-site-yellow-3"
                      >
                        <FaWhatsapp class="text-xl" />
                      </span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">
                        Keep Track of devices under warranty
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-site-yellow-5 bg-site-yellow-2 mr-3 dark:text-site-yellow-5 dark:bg-site-yellow-3"
                      >
                        <FaWhatsapp class="text-xl" />
                      </span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">
                      Transfer the ownsership
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  
  
  
  
  {
  /*
  
  Published Device Section
  */
  }
  
  
  
  
    
    <section
      class="text-site-gray-1 py-10 body-font dark:bg-site-gray-1 dark:text-site-green-5"
    >
      <div class="container px-5 mx-auto">
        <div
          class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
        >
          <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font">
            title
            <p>E-holdings makes it easy to track your devices no matter the circumstances. With our powerful organization tools, you'll always find it a joke to keep track of your device, we are here to giving you peace of mind.</p>
          </h1>
  
          <Link to="">
            <action-button
              type="tertiary"
              text="btn.onMarket"
              size="sm"
              frontIcon="arrow-right"
            ></action-button>
          </Link>
        </div>
      </div>
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-wrap -mx-4">
          <div
            class="py-8 px-4 lg:w-1/3 hover:bg-site-green-5 rounded-3xl dark:hover:bg-site-gray-2 transition-colors delay-100"
          >
            <div class="h-full flex items-start">
              <div
                class="w-12 flex-shrink-0 flex flex-col text-center leading-none"
              >
                <span
                  class="text-xs text-site-gray-3 pb-2 mb-2 border-b-2 border-gray-200 dark:text-site-yellow-5"
                >
                 January 23
                </span>
                <span
                  class="font-medium text-lg text-site-gray-1 title-font leading-none dark:text-site-yellow-3"
                >
                  <FaWhatsapp/>
                </span>
              </div>
              <div class="flex-grow pl-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-site-gray-3 mb-1 dark:text-site-yellow-4"
                >
                Kigali
                </h2>
                <h1
                  class="title-font text-xl font-bold text-site-gray-2 mb-3 dark:text-site-green-5"
                >
                 Iphone 6 Plus
                </h1>
                <p class="leading-relaxed mb-5">
                  A brand new new product that i wish i had something to say about
                  but guess what, i don't absolutely dont
                </p>
                <Link class="inline-flex items-center">
                   <FaWhatsapp/>
                  <span class="flex-grow flex flex-col pl-3">
                    <span
                      class="title-font font-medium text-site-gray-2 dark:text-site-green-5"
                    >
                     Mumbere Carlos
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div
            class="py-8 px-4 lg:w-1/3 hover:bg-site-green-5 rounded-3xl dark:hover:bg-site-gray-2 transition-colors delay-100"
          >
            <div class="h-full flex items-start">
              <div
                class="w-12 flex-shrink-0 flex flex-col text-center leading-none"
              >
                <span
                  class="text-xs text-site-gray-3 pb-2 mb-2 border-b-2 border-gray-200 dark:text-site-yellow-5"
                >
                 January 23
                </span>
                <span
                  class="font-medium text-lg text-site-gray-1 title-font leading-none dark:text-site-yellow-3"
                >
                  <FaWhatsapp/>
                </span>
              </div>
              <div class="flex-grow pl-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-site-gray-3 mb-1 dark:text-site-yellow-4"
                >
                Kigali
                </h2>
                <h1
                  class="title-font text-xl font-bold text-site-gray-2 mb-3 dark:text-site-green-5"
                >
                 Iphone 6 Plus
                </h1>
                <p class="leading-relaxed mb-5">
                  A brand new new product that i wish i had something to say about
                  but guess what, i don't absolutely dont
                </p>
                <Link class="inline-flex items-center">
                   <FaWhatsapp/>
                  <span class="flex-grow flex flex-col pl-3">
                    <span
                      class="title-font font-medium text-site-gray-2 dark:text-site-green-5"
                    >
                     Mumbere Carlos
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div
            class="py-8 px-4 lg:w-1/3 hover:bg-site-green-5 rounded-3xl dark:hover:bg-site-gray-2 transition-colors delay-100"
          >
            <div class="h-full flex items-start">
              <div
                class="w-12 flex-shrink-0 flex flex-col text-center leading-none"
              >
                <span
                  class="text-xs text-site-gray-3 pb-2 mb-2 border-b-2 border-gray-200 dark:text-site-yellow-5"
                >
                 January 23
                </span>
                <span
                  class="font-medium text-lg text-site-gray-1 title-font leading-none dark:text-site-yellow-3"
                >
                  <FaWhatsapp/>
                </span>
              </div>
              <div class="flex-grow pl-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-site-gray-3 mb-1 dark:text-site-yellow-4"
                >
                Kigali
                </h2>
                <h1
                  class="title-font text-xl font-bold text-site-gray-2 mb-3 dark:text-site-green-5"
                >
                 Iphone 6 Plus
                </h1>
                <p class="leading-relaxed mb-5">
                  A brand new new product that i wish i had something to say about
                  but guess what, i don't absolutely dont
                </p>
                <Link class="inline-flex items-center">
                   <FaWhatsapp/>
                  <span class="flex-grow flex flex-col pl-3">
                    <span
                      class="title-font font-medium text-site-gray-2 dark:text-site-green-5"
                    >
                     Mumbere Carlos
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  
  
  {
  /*
  Short about us section
  */
  }
  
  
    
    <section
                           class="main-section bg-no-repeat bg-fixed bg-cover dark:bg-site-gray-1"
                        // style={{ backgroundImage: "" }}
    >
      <section class="mx-auto container">
        <div class="px-4 lg:px-0">
          <div class="flex items-center flex-col px-4">
            <p
              class="my-5 uppercase text-lg text-center text-gray-600 leading-normal dark:text-site-yellow-4"
            >
           WHAT DO WE DO FOR YOU ?
            </p>
            <h2
              class="text-4xl lg:text-5xl pt-4 font-extrabold text-center leading-tight text-site-gray-1 lg:w-7/12 md:w-9/12 dark:text-site-yellow-4 dark:drop-shadow-2xl"
            >
              All your electronics managed in one place for indubitable ownership
            </h2>
          </div>
        </div>
      </section>
      <section class="py-12 mt-20">
        <div class="px-4 lg:px-0">
          <div class="mx-auto container flex flex-wrap px-2 md:px-24">
            <div
              class="flex sm:w-full md:w-1/2 lg:border-r md:border-r sm:border-r-0 border-site-green-1 pb-10 lg:pt-10"
            >
              <div class="mr-5 text-site-gray-1">
                <FaWhatsapp class="text-4xl text-site-yellow-3"/>
              </div>
              <div class="md:w-9/12 lg:w-9/12 mt-1">
                <h4
                  class="text-lg font-bold leading-tight text-site-gray-1 dark:text-site-yellow-3"
                >
                Track you items
                </h4>
                <p
                  class="text-base text-site-gray-2 leading-normal xl:w-10/12 pt-2 dark:text-site-yellow-5"
                >
                 E-holdings makes it easy to track your devices no matter the circumstances. With our powerful organization tools, you'll always find it a joke to keep track of your device, we are here to giving you peace of mind.
                </p>
              </div>
            </div>
            <div class="flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10">
              <div class="sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-site-gray-1">
                <FaWhatsapp class="text-4xl text-site-yellow-3"/>
              </div>
              <div class="md:w-9/12 lg:w-9/12 mt-1">
                <h4
                  class="text-lg font-bold leading-tight text-site-gray-1 dark:text-site-yellow-3"
                >
                 title
                </h4>
                <p
                  class="text-base text-site-gray-2 leading-normal xl:w-10/12 pt-2 dark:text-site-yellow-5"
                >
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, qui beatae. Nihil quas a, deleniti neque quos iure labore animi.
                </p>
              </div>
            </div>
            <div
              class="flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0 border-site-green-1 pt-10 lg:pb-20"
            >
              <div class="mr-5 text-site-gray-1">
                <FaWhatsapp class="text-4xl text-site-yellow-3"/>
              </div>
              <div class="md:w-9/12 lg:w-9/12 mt-1">
                <h4
                  class="text-lg font-bold leading-tight text-site-gray-1 dark:text-site-yellow-3"
                >
                Transfer the ownership
                </h4>
                <p
                  class="text-base text-site-gray-2 leading-normal xl:w-10/12 pt-2 dark:text-site-yellow-5"
                >
                E-holdings simplifies the process of transferring device ownership. Whether you're transferring a device to a new owner or acquiring it from an organization, our platform makes it easy.
                </p>
              </div>
            </div>
            <div
              class="flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-site-green-1 pt-10 lg:pb-20"
            >
              <div class="sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-site-gray-1">
                <FaWhatsapp class="text-4xl text-site-yellow-3"/>
              </div>
              <div class="md:w-9/12 lg:w-9/12 mt-1">
                <h4
                  class="text-lg font-bold leading-tight text-site-gray-1 dark:text-site-yellow-3"
                >
               Report stolen devices
                </h4>
                <p
                  class="text-base text-site-gray-2 leading-normal xl:w-10/12 pt-2 dark:text-site-yellow-5"
                >
                 With E-holdings, you can quickly and easily report lost or stolen devices to the authorities. Our reporting system streamlines the process, so you can rest easy knowing your devices are protected and ready to be found anytime if lost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <div>
      <Footer/>
    </div>
    </div>
  );
}
