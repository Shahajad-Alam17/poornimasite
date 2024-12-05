import React from "react";
import Nav from "./Nav";
import home from "../assets/home.jpeg";
import Cards from "./Cards";
import Poornima from "./Poornima";

const Home = () => {
  return (
    <div className="py-2 mx-2 ">
      <Nav />
      <div className="mx-4 py-4">
        <h2 className="text-center font-bold text-2xl text-black">
          1st International Conference on Sustainable Computing and Intelligent
          Systems (ICSCIS 2025)
          <br />
          March 21-22, 2025
        </h2>
      </div>
      <div className="py-2 mx-4 flex justify-center ">
        <img src={home} alt="" className="w-[50%]" />
      </div>
      <h3 className="text-center py-5 underline cursor-pointer text-[#355392]">
        All papers under acceptance in ICSCIS-2025 will be published in AIP
        Conference Proceedings (SCOPUS INDEXED)
      </h3>

      <h4 className="py-4 mx-10 cursor-pointer text-black font-bold text-[30px]">
       
      </h4>
      
     
     <Cards />
     <Poornima />
    </div>
  );
};

export default Home;
