import React from 'react'
import image1 from '../../assets/image/image1.svg'
function About() {
    return (
        <div>
          <section class="py-24 dark:bg-site-gray-2 h-[1100px]">
    <div class="xl:container xl:mx-auto">
      <div class="flex flex-col md:flex-row items-strech justify-center">
        <div class="md:w-3/5 relative">
          <img
            src={image1}
            alt=""
            role="img"
            class="absolute inset-0 object-cover object-center w-full h-full hidden lg:block rounded"
          />
          <img
            src={image1}
            alt=""
            role="img"
            class="absolute inset-0 object-cover object-center w-full h-full lg:hidden rounded"
          />
          <img
            src={image1}
            alt=""
            role="img"
            class="object-cover object-center w-full h-full md:hidden rounded"
          />
        </div>
        <div
          class="md:w-2/5 flex justify-center items-center -mt-14 md:-mt-0 md:-ml-12 lg:-ml-16 md:py-24 lg:py-36 relative z-10 mx-4 md:mx-0"
        >
          <div class="bg-site-gray-1 p-8 lg:p-10">
            <p
              class="text-base leading-none lg:text-xl lg:leading-tight text-white"
            >
              About us
            </p>
            <p
              class="text-2xl md:text-4xl lg:text-5xl font-semibold lg:font-bold md:leading-10 text-white mt-6 md:mt-4 lg:mt-8"
            >
              Here is all you need to know about us
            </p>
            <p class="text-base leading-normal text-white mt-4 lg:mt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ut
              officiis animi nihil vel eligendi commodi! Repellat, voluptatum
              consectetur deserunt ex aperiam velit eos dolorem eius rem fuga
              nesciunt amet?
              <br class="lg:hidden" />
              <br class="lg:hidden" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In dicta
              voluptas vel commodi optio quasi architecto odio quidem fugiat
              sapiente dolores voluptate, eos iusto consectetur fugit unde,
              repellendus temporibus quisquam inventore nemo harum! Quidem enim
              quo molestiae possimus, temporibus optio quis earum illum sapiente
              dolorem
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
<div
    class="py-12 2xl:px-20 px-6 xl:mx-auto xl:container overflow-y-hidden text-site-gray-1 dark:bg-site-gray-1 dark:text-site-yellow-5"
  >
    <div class="md:flex items-center justify-between">
      <div class="xl:w-5/12 md:w-1/2 xl:pr-16 md:pr-8">
        <h1 role="heading" class="lg:text-5xl text-3xl font-bold leading-tight">
          Why we do what we do?
        </h1>
        <p role="contentinfo" class="mt-4 text-base leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
          obcaecati dolores necessitatibus dignissimos unde impedit aperiam, ut
          exercitationem! Ab sequi reprehenderit voluptatibus cum repudiandae
          iusto iure. In maiores earum similique labore ab sed minima aliquam
          eligendi! Quos explicabo
        </p>
        <button
          role="button"
          aria-label="explore more"
          class="sm:w-auto w-full mt-10 text-base font-medium leading-none text-white bg-site-green-1 rounded md:p-4 p-6 focus:ring-2 focus:ring-offset-2 focus:ring-site-green-1 hover:bg-site-green-2 focus:outline-none"
        >
          Explore More
        </button>
      </div>
      <div class="xl:w-2/5 md:w-1/2 w-full md:mt-0 mt-4">
        <img
          src="allyouneed"
          alt="woman working"
          class="md:w-auto w-full dark:rounded-full"
        />
      </div>
    </div>
    <div
      class="flex flex-wrap md:mt-16 mt-8 gap-6 items-center justify-between"
    >
      <div>
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-site-green-1 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center"
          >
            <fa icon="bars"></fa>
          </div>
          <h2 class="ml-4 text-base font-semibold leading-4">
            Lorem, ipsum dolor.
          </h2>
        </div>
        <p class="sm:w-72 w-full text-base mt-5 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          voluptates, explicabo expedita totam quia odio pariatur dolore nisi
          repudiandae, hic harum! Nihil commodi molestiae reprehenderit, iste
          eligendi assumenda quis impedit.
        </p>
      </div>
      <div>
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-site-green-1 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center"
          >
            <fa icon="bars"></fa>
          </div>
          <h2 class="ml-4 text-base font-semibold leading-4">
            lorem ipsum dolor
          </h2>
        </div>
        <p class="sm:w-72 w-full text-base mt-5 leading-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eveniet
          ea inventore facilis illum sapiente. Eligendi laboriosam enim
          praesentium aliquid perspiciatis doloribus! Voluptate delectus
          incidunt autem reiciendis dolorum voluptatum enim?
        </p>
      </div>
      <div>
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-site-green-1 rounded-full text-base font-semibold leading-4 text-white flex items-center justify-center"
          >
            <fa icon="bars"></fa>
          </div>
          <h2 class="ml-4 text-base font-semibold leading-4">
            Extraordinary Performance
          </h2>
        </div>
        <p class="sm:w-72 w-full text-base mt-5 leading-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi rerum
          qui quam expedita quibusdam beatae nemo minima hic autem reprehenderit
          consequatur, non nobis earum soluta quos accusantium quaerat nihil
          maxime.
        </p>
      </div>
    </div>
  </div>
        </div>
    )
}

export default About
