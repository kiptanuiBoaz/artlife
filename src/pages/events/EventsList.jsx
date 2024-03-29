import React from "react";
// import SectionTitle from "../sectionTitle/SectionTitle";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import EventCard from "../../components/eventCard/EventCard";
import { Slide } from "react-awesome-reveal";
import ProgramCard from "../../components/eventCard/ProgramCard";


const CardList = ({data}) => {

  const items = data.map((card) => (
    <EventsCard key={card.id} {...card} />
  ))

  const responsive = {
    0: {
      items: 1
    },
    568: {
      items: 2
    },
    783: {
      items: 3,
      itemsFit: 'contain'
    },
    1024:{
      items:4,
      itemsFit: 'contain'
    }
  }


  return (
    <div className=" mx-auto">
      <div className="  mt-8">
      <Slide cascade duration={2000}>
        { }
        <AliceCarousel
          disableButtonsControls={true}
          controlsStrategy="alternate"
          mouseTracking items={items}
          responsive={responsive}
        />
</Slide>
      </div>
    </div>
  );
};

export default CardList;
