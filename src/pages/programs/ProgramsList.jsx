import React from "react";
// import SectionTitle from "../sectionTitle/SectionTitle";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import EventCard from "../../components/eventCard/EventCard";
import { Slide } from "react-awesome-reveal";
import data from '../../components/eventCard/data';
import { Link } from "react-router-dom";
import ProgramCard from "../../components/eventCard/ProgramCard";
import image from "./assets/workshop_series.jpg"

const CardList = ({ data }) => {
  const items = data.map((card) => <ProgramCard key={card.id} {...card} />);

  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    783: {
      items: 3,
      itemsFit: "contain",
    },
    // 1024: {
    //   items: 4,
    //   itemsFit: "contain",
    // },
  };

  return (
    <div className=" w-11/12 md:w-4/5 mx-auto">
      <div className="  mt-8">
        <Slide cascade duration={2000}>
          {}
          <AliceCarousel
            disableButtonsControls={true}
            controlsStrategy="alternate"
            mouseTracking
            items={items}
            responsive={responsive}
          />

          
        </Slide>
      </div>
    </div>
  );
};

export default CardList;
