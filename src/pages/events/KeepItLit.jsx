import React, { useEffect } from "react";
import Banner from "../../components/banner/Banner";
 import bg from "./assets/keep_bg.jpg";
 import KeepItLitImage from "./assets/keepitlit.jpg"

const KeepItLit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner
        bg={bg}
        title="Keep It Lit"
        description="Spearhead public surveys that provide public snapshots of how residents access their art, how the arts contribute to community development and improve the quality of life in our communities."
      />

      <div className="w-4/5 mx-auto grid md:grid-cols-2 md:grid-cols-[1fr,0.5fr] mb-8">
        <div className="grid gap-8 ">
          <p>
            <b> #Keep-It-Lit</b> is expected to be a spectacular bonfire of
            annual “Red Alert” (Social Media) campaign, that brings together
            public solidarity in support of the arts community – the event will
            often highlight the devastation that the creative, live events and
            entertainment industries in Kenya have endured since the era of
            government lockdowns & shutdown directives that came to force in the
            wake of COVID 19 pandemic as well as other natural occurrences.
          </p>
          <p>
            The campaign will see Kenya’s Creative & Live Events sector players
            i.e. Technical Teams, Entertainers, etc. supported by business & the
            concerned public – join up to light key landmarks, buildings,
            business premises, home gardens, cultural spaces or any object in
            red, as a mark of honor celebrating the milestones of the industry
            as well as raise awareness to draw public and government attention
            to the plight of the industry; through sharing photos in their
            social media platforms while including the campaign hashtag, <br />
            <b className="mt-8">
              <i> #Keep-it-Lit, #Keep-it-Alive.</i>
            </b>
          </p>
        </div>
         <div className="mt-8 md:mt-0">
        <div>
          <img src={KeepItLitImage} alt="about us section image self-end" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default KeepItLit;
