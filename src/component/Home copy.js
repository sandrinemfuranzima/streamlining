import React from "react";
// import Mycarousel from './Carousel'
import { Link } from "react-router-dom";
import { FaSearch, FaWhatsapp } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import Ourteam from "../component/Ourteam";
import Services from "../component/Services";
import Footer from "./Footer";
// import hero_image2 from '../assets/img/hero_image2.png'
export default function home() {
  return (
    <div>
      {/* <div className='p-2'>
      <h2 className='px-2'><strong><i>Streamlining</i></strong></h2>
      <h3 className='px-2'><i>We track for you</i></h3>
      
      <p className='mx-auto px-2'>The ultimate solution for keeping track of your devices. Whether you're an individual or a business owner, our powerful and easy-to-use platform makes it simple to manage and protect your devices.</p>
      <div className='flex justify-between p-64 text-white'>
      <button className='px-16 bg-gray-700 mx-2 rounded-b-3xl' >LogIn</button>
      <button className='px-12 bg-black rounded-b-3xl '>Learnmore</button>
      </div>
      </div>
      {/* <div className='w-full'>
        <img src={hero_image2}/>
      </div> */}

      <div>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
            {/* <Mycarousel />  */}

            <div class="text-center lg:w-2/3 w-full">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Device Streamlining Company
              </h1>
              <p class="mb-8 leading-relaxed">
                Device Streamlining company help people to register their device
                to help them to keep device records which used to find lost
                devices.
              </p>
               <div class="flex justify-center sm-4">
                <div class="flex text-gray-600 border-2 border-gray-500 w-3/6 rounded-full">
                  <input
                    type="search"
                    name="serch"
                    placeholder="Serial Number or IMEI"
                    class=" h-10 px-5 rounded-full text-xl focus:outline-none"
                  />
                  <button type="submit" class="mt-3">
                    <span>
                      <FaSearch className="text-xl pb-2" />
                    </span>
                  </button>
                </div>
              </div>
              <div class="flex justify-center">
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Learn more
                </button>
              </div>
              <div>
                <Services />
              </div>
              <div className="flex">
                <Link
                  to="/businessowneracc"
                  className="text-white font-semibold mx-4 text-green-600"
                >
                  <FaWhatsapp />
                </Link>
                <Link
                  to="/need help"
                  className="text-white font-semibold mx-4 text-black"
                >
                  <FaQuestion />
                </Link>
              </div>
             
            </div>
          </div>
        </section>
      </div>
      <div>
        <Ourteam />
      </div>
      <Footer />
    </div>
  );
}
