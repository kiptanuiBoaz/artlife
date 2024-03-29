import React, { useEffect } from 'react'
import Banner from '../../components/banner/Banner'
import CardList from '../../components/eventCard/Card';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import ArtlifeBluRoom from './KeepItLit';
import ArtlifeHood from './NaiFest';
 import bg from "./assets/bg.jpg";
import ArtLifeAwards from './ArtLifeAwards';
import NaiFest from './NaiFest';
import KeepItLit from './KeepItLit';
import WestAFest from './WestAFest';
import data from "../../components/eventCard/data";
import ProgramsList from "../../pages/programs/ProgramsList"

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner
        bg={bg}
        title="Festivals & Events"
        color="green"
        description="Our events are more than just celebrations of art; they're platforms for artists to showcase their work, connect with like-minded individuals, and gain valuable exposure to the wider community. We work closely with young and emerging artists to provide them with mentorship and guidance, helping them to grow and develop their skills.

Our festivals and events are designed to be inclusive, welcoming audiences of all ages and backgrounds to come together and experience the transformative power of art. "
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
        <SectionTitle title="Explore Upcoming Festivals and Events" />

        <ProgramsList data={data} />
        {/* <ArtLifeAwards />
        <NaiFest />
        <KeepItLit />
        <WestAFest /> */}
      </div>
    </div>
  );
};

export default Events;