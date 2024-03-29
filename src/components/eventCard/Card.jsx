import React from "react";
// import SectionTitle from "../sectionTitle/SectionTitle";
import OneCard from "./OneCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Slide } from "react-awesome-reveal";

const CardList = ({ data }) => {
  const items = data.map((card) => <OneCard key={card.id} {...card} />);

  const responsive = {
    0: {
      items: 1,
    },
    568: {
      items: 2,
    },
    768: {
      items: 3,
      itemsFit: "contain",
    },
    // 1024: {
    //   items: 4,
    //   itemsFit: "contain",
    // },
  };

  return (
    <div className="  md:w-4/5 mx-auto  ">
      <div className="  mt-8 ">
        <Slide cascade up duration={2000}>
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
