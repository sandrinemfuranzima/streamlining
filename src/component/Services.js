import React from "react";
import { FaDesktop, FaTabletAlt } from "react-icons/fa";
const Services = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                <span>Our Services</span>
              </h1>
              <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"></p>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-2 -mb-10 ">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden"></div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Mobile Phone
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Customer software development services to help your busisness
                leverage the power of digital transformation{" "}
              </p>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <FaTabletAlt />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Tablet
              </h2>
              <p class="text-base leading-relaxed mt-2">
                We create specially design E-commerce websites that delivery
                mermorable buying experiences & compel users to revisit your
                website.
              </p>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <FaDesktop />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Laptops
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Well-thought UX and UI designs that are compatible with all Web
                development platforms. Offers immensive User experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
