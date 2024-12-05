import React from "react";
import about from "../assets/rcell.gif";

const Rdcell = () => {
  return (
    <div>
      <div className=" text-black lg:flex md:flex mx-10 justify-center items-center">
        <div className="py-14">
          <img src={about} alt="about" className="justify-center " />
        </div>
        <div className="text-black  mx-10 lg:w-[50%] md:w-[50%]">
          <h2 className="text-2xl font-bold py-10 ">About the R&D Cell</h2>
          <p>
            Poornima University’s Research and Development (R&D) cell is a
            vibrant centre of research and innovation of the organization,
            dedicated to advancing cutting-edge research in a variety of
            subjects & pushing the boundaries of knowledge for promoting
            advanced research across diverse fields. The R&D cell has a
            commitment to creating cutting-edge research that addresses pressing
            issues and creates new opportunities in a broad variety of fields.
            It is composed of a diverse mix of experts and innovators. We
            collaborate to address important challenges like healthcare,
            education, environmental sustainability, and social fairness with an
            emphasis on interdisciplinary approaches and ethical research
            approaches. By combining in-depth research, experimentation, and
            teamwork, we also hope to create novel technologies, solutions, and
            procedures that advance the objectives of our organization and
            benefit society. The R&D cell performs a key part in innovation by
            creating a culture of research and discovery that moves society
            toward a better and more sustainable future through the dedication
            of creativity, quality, and impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rdcell;
