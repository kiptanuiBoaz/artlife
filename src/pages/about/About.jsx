import React, { useEffect } from "react";
import AboutSection from "../../components/aboutSection/AboutSection";
import MissionCard from "../../components/aboutSection/MissionCard";
import Banner from "../../components/banner/Banner";
import OrganisationFocus from "../../components/organisationFocus/OrganisationFocus";
import bg from "./bg.jpg";
import { Link } from "react-router-dom";


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner
        bg={bg}
        title="About Art-Life"
        description="Art-Life is a progressive, not-for-profit community
      organization that was founded in 2014 through a relentless vision and
      investment of a private individual who believed in the powerful rippling
      effect of celebrating Kenyan arts. It was incorporated in August 2019 to
      identify a number of specific needs that must be addressed in an effort to
      strengthening the country’s creative and cultural landscape."
        color="green"
      />

      <AboutSection />
      <MissionCard />
      <div className=" grid justify-center gap-8 mt-4 mb-12">
        <div>
          {" "}
          <h3 className="text-2xl">Want to meet out Team?</h3>
          <div className="h-2 w-16 bg-primary_green rounded "></div>
        </div>
        <div className="text-white">
          <Link
            to="/team"
            className="border-2 border-secondary_yellow md:ml-4  bg-secondary_yellow  font-bold py-2 px-8 hover:scale-105 rounded"
          >
            Artlife Team
          </Link>
        </div>
      </div>
      <OrganisationFocus />
    </div>
  );
};

export default About;
