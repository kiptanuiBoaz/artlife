import React, { useEffect } from 'react'
import Banner from '../../components/banner/Banner'
import ProgramsList from "./ProgramsList"
import SectionTitle from '../../components/sectionTitle/SectionTitle';
 import bg from "./assets/bg.jpg";
 import data from "../../components/eventCard/programs_data";

const Programs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner
        bg={bg}
        title="Programs"
        description="Art-Life Group seeks to broaden the vision of the arts, with programming that stretches beyond the reach of the greater Nairobi Metropolitan Community; focusing on areas that deserve extra attention due to limiting economic, civic, social and environmental factors. By empowering local emerging artists through organized festivals and events, producing innovative programs, leading the arts community with effective research and advocacy; to enhance the quality of life and develop the cultural, educational, civic and economic fundamentals of the underlying communities."
      />

      <div>
        <p className="w-11/12 md:w-4/5 mx-auto my-12">
          Art-Life Group has determined that to create change towards our vision
          of greater Nairobi as a creative city, we must develop, incubate,
          maintain and grow initiatives that directly impact Kenya’s artists and
          its creative interlocutors in and within our communities. These
          initiatives serve our strategic goals of increasing public engagement
          with the arts from creation to participation to appreciation,
          increasing inclusion to ensure that the arts reflect the diversity of
          greater Nairobi, and encouraging artistic excellence.
        </p>
        <SectionTitle title="Explore our programs " />

        <ProgramsList data={data}  />
       
      </div>
    </div>
  );
}

export default Programs