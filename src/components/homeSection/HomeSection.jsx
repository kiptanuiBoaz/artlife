import React from "react";
// import "./style/style.css";
import mission from "./assets/mission.jpg";
import vision from "./assets/vision.jpg";
import public_act from "./assets/public_act.jpg";
import {Fade} from "react-awesome-reveal"


const categorys = [
  {
    index: 1,
    image: vision,
    title: "Our Vision",
    details:
      "To be the premier and lead promoter of art-cultural programmes and events in Kenya and beyond",
  },
  {
    index: 2,
    image: mission,
    title: "Our Mission",
    details:
      "To identify needs, develop talents, create opportunities, promote high impact art-focused programmes and festival events for Kenyans and the visiting global audience.",
  },
  // {
  //   index: 3,
  //   image: public_act,

  //   title: "We Support Public Act",
  //   details:
  //     "Art-Life Group is designed to be a premier and lead promoter of art-culture programmes and events. We believe that art is the language of humanity and a medium of expression which allows for the communication of the intricate and complex emotions which make us inherently human. Through public art the greater human collective can be engaged, environments can be infused with beauty, and center-pieces can be created for community.",
  // },
];

const HomeSection = () => {
  return (
    <div className="py-24 pb-8 w-11/12 md:w-4/5 mx-auto">
      
      {categorys.map((category, index) => (
        <div
          className={`mb-12 border border-primary_green rounded  shadow-md md:flex ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          } justify-center items-center gap-8`}
        >
          <div className="">
            <Fade duration={3000}>
            <img
              style={{ width: "100%", height: "auto" }}
              src={category.image}
              alt={category.title}
            />
            </Fade>
          </div>

          <div className="  flex flex-col justify-center p-2 md:w-1/2 md:mx-auto">
            <h4 className="text-2xl text-bold text-primary_green ">{category.title}</h4>
            <p className=" mt-8 ">
              {category.details}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeSection;
