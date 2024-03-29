import React from "react";
import Navbar from "../navbar/Navbar";
import { Fade } from "react-awesome-reveal";


const Banner = (props) => {
  return (
    <div>
      <div
        className="bg-cover bg-center mb-[80px] "
        style={{ backgroundImage: `url(${props.bg})`, height: "60vh" }}
      >
        {/* Navbar section */}
        <Navbar />
        {/* Home hero section text */}
      </div>
      <Fade>
        <div
          className={`text-neutral_white mt-[-60%] md:mt-[-30%] lg:mt-[-13%] mx-auto  md:ml-10% self-end  max-w-sm md:max-w-lg px-8 mb-8  py-12 ${
            props.color === "green" ? "bg-primary_green" : "bg-secondary_yellow"
          }`}
        >
          <h1 className="text-2xl font-bold mb-4">{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </Fade>
    </div>
  );
};

export default Banner;
