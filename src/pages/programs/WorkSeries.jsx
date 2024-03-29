import React, { useEffect } from 'react'
import Banner from '../../components/banner/Banner'
 import bg from "./assets/workshop_series.jpg";
 
const WorkSeries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner
        bg={bg}
        title="Workshop Series"
        description="A Workshop Series to empower young artists with valuable inforamtion to help them make new connections. Enhance their creative capacity & learn the new trends of the global arts market"
      />

      <div className="w-11/12 md:w-10/12 mx-auto mb-12 grid gap-8 ">
        <p>
          Art-Life’s ground breaking programme for the workshop series on key
          thematic but diverse areas of value-knowledge that would refresh,
          equip, reposition and help Kenyan art-makers enhance the quality of
          their art; capable to competitively subsist in the frontlines of the
          multi-billion dollar global-arts-market. The program would help young
          emerging artists create connections with leading regional &
          international curators, art educators, marketing/branding experts,
          museum directors & creative experts in other fields.
        </p>
        <p className="border border-green-200 shadow-md shadow-green-100 mx-4 p-4 rounded">
          The Art-Life <b>“LET’S TALK ART”</b> program is a bi-monthly webinar
          series; intended to cover far ranging topics in arts making, cultural
          entrepreneurship, project management, marketing and technological
          trends, cultural policies, etc. to equip the young art-makers with
          vital knowledge to help them adopt new paradigms of art-making,
          improve their competencies and foster excellence in arts-making.
        </p>
      </div>
    </div>
  );
};

export default WorkSeries;