import React from "react";
import about from "../assets/raj.jpeg";

const Raj = () => {
  return (
    <div>
      <div className=" text-black lg:flex md:flex mx-10 justify-center items-center">
        <div className="py-14">
          <img src={about} alt="about" className="justify-center " />
        </div>
        <div className="text-black  mx-10 lg:w-[50%] md:w-[50%]">
          <h2 className="text-2xl font-bold py-10 ">About Rajasthan</h2>
          <p>
            Rajasthan is the largest state of India by an area 3,42,239 sq km.
            It encompasses most of the area of the large, inhospitable Great
            Indian Desert (Thar Desert), which has an edge paralleling the
            Sutlej-Indus River valley along its border with Pakistan. The state
            has borders with Pakistan to the west, Gujrat to the southwest,
            Madhya Pradesh to the southeast, Uttar Pradesh & Haryana to the
            northeast & Punjab to the north. The glory of the state is retained
            by its majestic places, forts, monuments, vibrant culture, and rich
            heritage which draw innumerable tourists from across the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Raj;
