import React from "react";
import about from "../assets/about1.gif";
import Raj from "./Raj";
import Jaipur from "./Jaipur";
import Rdcell from "./Rdcell";
import Vision from "./Vision";

function About() {
  return (
    <div>
    <div className="py-20 text-black lg:flex md:flex mx-10 justify-center items-center">
      <div className="text-black py-20 mx-10 lg:w-[50%] md:w-[50%]">
        <h2 className="text-2xl font-bold py-10 ">About Conference</h2>
        <p>
          The design and development of new technologies to handle the arising
          stability and reliability concerns will determine the sustainability
          of the global economy in the future. Modern technologies like cloud
          computing, edge computing, artificial intelligence, and the internet
          of things present a fantastic chance to educate people for a wiser
          world that will be better equipped to face the difficulties of
          sustainability in the years to come. There is a lot of interest in the
          field of sustainable computing research as well as its applications,
          but there are not many research perspectives that have the necessary
          wider perspective. To provide attendees with the most recent findings
          in sustainable computing and smart technologies, the 1st International
          Conference on Sustainable Computing and Intelligent Systems
          (ICSCIS-2025) has been suggested. In order to share research ideas and
          information on this platform, participants from academia and industry
          are welcome to submit their works in the broad category of "Smart,
          computing technologies and intelligent systems." By bringing together
          top researchers, academics, scholars, scientists, and industry
          leaders, this conference aims to improve the focus on sustainable
          future research by facilitating face-to- face interactions and the
          exchange and sharing of research ideas and experiences.
        </p>
      </div>
      <div className="py-14 lg:w-[50%] md:w-[50%]  ">
        <img src={about} alt="about" className="justify-center " />
      </div>
    </div>
    <Raj />
    <Jaipur />
    <Rdcell />
    <Vision />
    </div>
  );
}

export default About;
