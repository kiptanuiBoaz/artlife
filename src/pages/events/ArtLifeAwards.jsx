import React, { useEffect } from "react";
import Banner from "../../components/banner/Banner";
 import bg from "./assets/ArtLifeAwards.jpeg";
 import awards from "./assets/awards.jpg";

const ArtLifeAwards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner
        bg={bg}
        title="Art_Life Awards"
        description="Spearhead public surveys that provide public snapshots of how residents access their art, how the arts contribute to community development and improve the quality of life in our communities."
      />

      <div className="w-4/5 mx-auto grid md:grid-cols-2 md:grid-cols-[1fr,0.5fr] mb-8">
        <div className="grid gap-8 ">
          <p>
            Art-Life Group offers multiple awards to celebrate the rich artistic
            talent of local artists, newcomer artists and arts organizations
            throughout Kenya. We believe that the arts help cities and nations
            to thrive. The arts in all its forms can offer perspective and
            creative solutions to the challenges we face. The arts inspire,
            challenge, excite, spark conversations, bridge differences, and so
            much more.
          </p>
          <p>
            Our awards are presented to artists, cultural leaders and
            organizations in recognition of artistic excellence, cultural
            leadership and contribution to the arts. Financial support of our
            awards will be provided through a partnership of legacies and annual
            donations from private and corporate donors. Explore more categories
            of the Art-Life Awards below.
          </p>
          <p>
            Art-Life Awards is one of the major highlights of our annual
            programs that will feature cash-prizes and other surprises. The
            Awards will prominently include the following categories:
          </p>
          <h2 className="font-bold text-xl">NAI’TURE FEST AWARD</h2>
          <p>
            Presented in honour of{" "}
            <b>
              <i>
                {" "}
                <u>“Prof. Wangari Mathai”</u>
              </i>
            </b>{" "}
            to the best university/ institutional groups with the most exciting
            & original presentation of dance, song & costume mimicking nature to
            help highlight its vulnerability in the face of climate-change,
            human activity and inordinate conservation at the iconic{" "}
            <b>Nairobi Art-Life International Festival</b> carnival program
            dubbed as the <b>NAI’TURE FEST</b> parade. The participants would be
            expected to adopt an animal species; choreograph a dance, song &
            costuming that feature the mannerism of that species. Finalists will
            be nominated by a panel of experts.
          </p>
          <h2 className="font-bold text-xl">COMMUNITY ARTS AWARD</h2>
          <p>
            An award for community-engaged artists and organizations. The
            Community Arts Award is a Ksh.150, 000 cash prize. This award
            celebrates community-engaged arts organization or individual who had
            made a significant contribution in Kenya by working with, in and for
            communities, while creating access and inclusion to arts and
            culture.
          </p>
          <h2 className="font-bold text-xl"> NEW-COMER ARTS AWARD </h2>
          <p>
            Micro-awards for newcomer artists. The Newcomer Arts Award is a
            people’s choice award and initiative offered by Art-Life Awards with
            a total of Ksh.150, 000 to support select categories of newcomer
            artists across the Kenyan republic.
          </p>
          <h2 className="font-bold text-xl"> EMERGING ARTS LEADER AWARD </h2>
          <p>
            Our Emerging Arts Leaders Award focuses on honoring a dynamic
            individual, young professional, an arts lover, and arts
            philanthropist; who has played a consistent role in mentoring
            creative’s, supporting the growth of arts or advocating for the arts
            industry’
          </p>
          <h2 className="font-bold text-xl">
            {" "}
            ART-LIFE ARTIST OF THE YEAR AWARD{" "}
          </h2>
          <p>
            An Award would be targeting to recognize the top-most creator of art
            from across the diversity of categories Music, Fashion, Sculpting,
            Literature, Culinary, etc.
          </p>
        </div>

         <div className="mt-8 md:mt-0">
        <div>
          <img 
          // style={{width:"100%", height:"auto"}}

           className="" src={awards} alt="about us section image " />
        </div>
        </div>
      </div>
    </div>
  );
};

export default ArtLifeAwards;
