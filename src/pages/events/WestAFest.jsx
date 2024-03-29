import React, { useEffect } from "react";
import Banner from "../../components/banner/Banner";
 import bg from "./assets/west_bg.jpg";
 import westafest from "./assets/WEST' a fest-.jpg"

const WestAFest = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner
        bg={bg}
        title="Trans-Western Cycling Festival (WEST’A FEST)"
        description="An art space for aspiring creative women and at-risk youth from street families, ghettos, refugees, etc."
        color="green"
      />

      <div className="w-4/5 mx-auto grid md:grid-cols-2 md:grid-cols-[1fr,0.5fr] mb-8">
        <div className="grid gap-8 ">
          <p>
            The iconic Trans-Western Cycling Festival (WEST’A FEST) is a
            multi-day road cycling race & artistic program designed to be East
            Africa’s premier and largest Elite-Cycling & Cultural Event,
            expected to join the league of International Cycling Union (UCI)
            Africa Tour stage race and cycle-art festival events. It’s a
            Cross-County non-profit initiative expected to be a 5 day annual
            cycling festival and artistic program showcasing the very best of
            raw local Western Kenya sporting & artistic talents in a
            comprehensive and concurrent program of events ranging from -
            Cycling, Music, A Mega Street Carnival (featuring Drum Bitters,
            Flutists, Instrumentalists, Street Dancers, Fire Spatters, Skaters &
            Acrobatics). Also Comedy, Traditional Poetry, Fashioners, Children’s
            Circus & A Virtual Arts-Expo (featuring Top West-Kenya Contemporary
            Artworks; such as Handcrafts, Drawings, Paintings, Sculptures, Batik
            & Ceramics) Food & Beverages & of-course the WEST’A FEST Talent
            Awards.
          </p>
          <p>
            WEST’A-FEST 2024 - is a show that attempts to influence a shift of
            thinking, strategy, innovation & professionalism in the greater
            Western Kenya Art-Cultural Sports & Entertainment industry into high
            value branding to enhance its visibility atop the global market
            place to attract a competitive edge & a huge global audience for the
            benefit of the region’s tourism economy. The Trans-Western Cycling
            Festival will work to create a legacy programme for cycling in the
            region as well as engage the SMMEs in the region to become suppliers
            to the event, while also exploring the rich cultural diversity that
            exists across the region.
          </p>
        
        </div>
         <div className="mt-8 md:mt-0">
        <div>
          <img src= {westafest} alt="about us section image self-end" />
        </div>

        </div>
      </div>
    </div>
  );
};

export default WestAFest;
