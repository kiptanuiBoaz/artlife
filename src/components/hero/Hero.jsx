import React from 'react';
import Banner from "./assets/home_banner.jpg"
import { Fade } from 'react-awesome-reveal';

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center grid items-center"
      style={{ backgroundImage: `url(${Banner})`, height: "60vh" }}
    >
      {/* Home hero section text */}
      
    </div>
  );
}

export default Hero