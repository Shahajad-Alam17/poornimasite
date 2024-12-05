import React from "react";
import img from "../assets/college.gif"

const Poornima = () => {
  return (
    <div className="lg:flex md:flex text-black py-10 mx-10 justify-center">
        
      <div className="justify-center lg:w-[20%] md:w-[50%] py-10 mx-5">
        <img src={img} alt="img"  />
    </div>
    <div className="lg:w-[50%] md:w-[50%]">
      <h2 className="text-2xl font-bold py-5">About Poornima University</h2>
      <p>
        Poornima University (PU) is a state private University in Jaipur, India
        established by an act of the Rajasthan legislature. PU was established
        in 2012 with a vision to create a knowledge- based society with
        scientific temper, team spirit and dignity of labour to face global
        competition and challenges. PU is recognized by University Grants
        Commission (UGC) under Section 2(f) and 12(B) with the right to confer
        degrees as per Section 22 (1) of the UGC Act, 1956. Its architecture
        program is approved by the Council of Architecture (CoA) and the hotel
        management program is approved by NCHMCT. Currently, PU has more than
        8000+ students from all over the country enrolled in nine faculties and
        fourteen departments of UG/PG and PhD Programs in various areas such as
        Management, Engineering, Computer Application Sciences, Architecture,
        Design, Public Health and Hotel Management etc.
      </p>
    </div>
    
    </div>
  );
};

export default Poornima;
