import React from "react";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6  text-center">
      <div className="mx-10 ">
        <a
          href="#"
          class="flex flex-col items-center bg-[#355392] border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#344b7d]"
        >
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Full Paper Submission
            </h5>
            <p class="mb-3 font-normal text-white ">Dec 10, 2024</p>
          </div>
        </a>
      </div>

      <div className=" mx-10">
        <a
          href="#"
          class="flex flex-col items-center bg-[#355392] border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#344b7d]"
        >
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Notification of Acceptance
            </h5>
            <p class="mb-3 font-normal text-white ">Jan 10, 2025</p>
          </div>
        </a>
      </div>
      <div className=" mx-10">
        <a
          href="#"
          class="flex flex-col items-center bg-[#355392] border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#344b7d]"
        >
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Revised Paper Submission
            </h5>
            <p class="mb-3 font-normal text-white ">Jan 25, 2025</p>
          </div>
        </a>
      </div>
      <div className=" mx-10">
        <a
          href="#"
          class="flex flex-col items-center bg-[#355392] border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#344b7d]"
        >
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Early Bird Registration
            </h5>
            <p class="mb-3 font-normal text-white ">Feb 15, 2025</p>
          </div>
        </a>
      </div>
      <div className=" mx-10">
        <a
          href="#"
          class="flex flex-col items-center bg-[#355392] border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#344b7d]"
        >
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Late Registration
            </h5>
            <p class="mb-3 font-normal text-white ">Feb 25, 2025</p>
          </div>
        </a>
      </div>
      <div className=" mx-10">
        <a
          href="#"
          class="flex flex-col items-center bg-[#355392] border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#344b7d]"
        >
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Conference Dates
            </h5>
            <p class="mb-3 font-normal text-white ">March 21-22, 2025</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Cards;
