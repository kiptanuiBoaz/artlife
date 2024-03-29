import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Quote from "../../components/quote/Quote";
import Card from "../../components/eventCard/Card";
import HomeSection from '../../components/homeSection/HomeSection';
import PerspectiveSection from '../../components/perpectiveSection/PerspectiveSection';
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import data from "./assets/data";
import ImageArt from "../../components/homeSection/ImageArt";
import PublicAct from "../../components/perpectiveSection/PublicAct";
import art from './assets/art.jpg'
import Navbar from "../../components/navbar/Navbar";
import Naifest from './assets/Naifest.jpg';
import Naifestpdf from "./assets/naifest.pdf";
import KeepitLIt from "./assets/keepitlit.jpg";
import keepitlitpdf from "./assets/keepitlit.pdf";
import WestsLife from './assets/westalife.jpg';
import WestaLifepdf from "./assets/westalife.pdf";
import Partners from "../../components/partner/Partners";
import Welcome from "../../components/hero/Welcome";



 const pdfFiles = [
  
 ];

const Home = () => {
 
   const [selectedPDF, setSelectedPDF] = useState("");

   const handleCardClick = (index) => {
     setSelectedPDF(pdfFiles[index].path);
   };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <div className="border border-green-200 w-11/12 md:w-4/5 mx-auto pt-8">
        <SectionTitle title="Upcoming Events" />
        {/* <Card data={data} /> */}

        <div class=" grid md:flex gap-4 md:gap-12 my-12 w-11/12 md:w-4/5 mx-auto ">
          <a
            href={Naifestpdf}
            target="_blank"
            class="h-auto max-w-sm bg-[#ffc000] rounded shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          >
            <img
              src={Naifest}
              // onClick={() => handleCardClick(0)}

              alt=""
            />
          </a>
          <a
            href={keepitlitpdf}
            target="_blank"
            class="h-auto max-w-sm border-2 border-red-500 rounded shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          >
            <img
              src={KeepitLIt}
              // onClick={() => handleCardClick(0)}

              alt=""
            />
          </a>{" "}
          <a
            href={WestaLifepdf}
            target="_blank"
            class="h-auto max-w-sm  rounded shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          >
            <img
              src={WestsLife}
              // onClick={() => handleCardClick(0)}

              alt=""
            />
          </a>
          {selectedPDF && <embed src={selectedPDF} />}
        </div>
      </div>
      <ImageArt />
      <h2 className=" text-xl  w-11/12 md:w-4/5 mx-auto py-12 text-center">
        In defining the path way of Art-Life Group’s mission, we recognize the
        huge role that arts and culture has played in the socio-economic
        transformation of many developed economies.
      </h2>
      <HomeSection />
      <PublicAct />

      <PerspectiveSection />
      <Quote />
     
    </>
  );
};

export default Home;
