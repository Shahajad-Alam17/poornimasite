import React from "react";
import about from "../assets/vision.gif";
function Vision() {
  return (
    <div className="pb-10">
      <div className=" text-black lg:flex md:flex  justify-center items-center">
        <div className="text-black  lg:w-[50%] md:w-[50%]">
          <h2 className="text-2xl font-bold py-5 ">Vision of R&D Cell</h2>
          <p>
            To establish a robust mechanism for developing and strengthening the
            research ecosystem within university to reshape industries and
            elevate society for the benefit of the world using transformative
            innovation and advancing knowledge.
          </p>
          <h2 className="text-2xl font-bold py-5 ">Mission of R&D Cell</h2>
         <li>To create an enabling environment for enhancing research productivity.</li>
         <li>To encourage collaboration among industry, government, community-based organizations, and agencies at the local, national and international contexts.</li>
         <li>To facilitate greater access to research through mobilization of resources and funding.</li>

        </div>
        <div className="py-14">
          <img src={about} alt="about" className="justify-center h-80 " />
        </div>
      </div>
    </div>
  );
}

export default Vision;
