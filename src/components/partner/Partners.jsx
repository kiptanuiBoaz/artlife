import React from 'react';
import uon_logo from "./assets/UoN_Logo.png";

const Partners = () => {
  return (
    <div className="border-t-8  ">
      <div>
        <h2 className="text-2xl">Our Partners</h2>
        <div className="h-2 w-16 bg-primary_green rounded mt-2"></div>
      </div>
      <div className="mt-4 mb-12">
        <a href="https://uonbi.ac.ke/news/art-life-conference-2021-stakeholders-discuss-resuscitation-creative-sector">
          <img src={uon_logo} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Partners