import React from 'react';
import bg from "./assets/bg.jpg"

const PerspectiveSection = () => {
  return (
    <div
      className="bg-cover bg-center grid mb-24"
      // style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" text-neutral_dark self-center w-4/5 mx-auto pt-24  ">
        <h2 className=" text-2xl font-bold ">
          The Art-Life perspective on art scene
        </h2>
        <div className="h-2 w-16 bg-primary_green rounded mt-2"></div>
        {/* <p className=" mt-8 leading-6 tracking-wider ">
          Kenya has a burgeoning creative sector; in 2013 it represented one
          point seven percent of Kenya’s GDP and 1.7 percent of the national
          workforce (Kenya Economic Survey, 2017). However, young people with
          creative skills face barriers and are under unemployed in this sector.
          Young people have developed skills, talent, and interest in the
          creative industries through engagement in community-based arts
          programs and self-directed learning.
        </p> */}

        <p className="w-10/12 mx-auto bg-green-200 p-6 md:p-12 my-12 ">
          <b>Art-Life</b> will equip youth artists and arts groups (at all
          levels of vulnerability) to develop appropriate knowledge, advance
          their industry skills through professional training & mentoring
          opportunities; and support the artists to access meaningful
          competitive market platforms & employment opportunities in the
          creative industries.
        </p>

        {/* <p>
          {" "}
          Art-Life Group Desires to support Kenya’s arts and culture sector
          through its Festival and Economic Beneficiation partnerships with the
          key relevant sector players. Because, the arts and culture scene in
          Kenya is important to the growth of socio-economic make-up of the
          country. The initiative will objectively enhance the country’s
          economic and cultural image as well as impact on other aspects of
          life, such as the youth, environment, health and wellbeing, crime and
          community cohesion.
        </p> */}
        <div className="border border-green-300 shadow-md shadow-green-100 rounded p-4 mt-4">
          <h2 className=" text-xl font-bold  mt-4">Art-Life Group</h2>
          <p className=" mt-8 leading-6 tracking-wider ">
            Desires to support Kenya’s arts and culture sector through its
            Festival and Economic Beneficiation partnerships with the key
            relevant sector players. Because, the arts and culture scene in
            Kenya is important to the growth of socio-economic make-up of the
            country. The initiative will objectively enhance the country’s
            economic and cultural image as well as impact on other aspects of
            life, such as the youth, environment, health and wellbeing, crime
            and community cohesion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PerspectiveSection