import React, { useEffect } from "react";
import Banner from "../../components/banner/Banner";
 import bg from "./assets/bluroom.jpg";

const ArtlifeBluRoom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner
        bg={bg}
        title="Art-Life Blu' Room"
        description="An art space for aspiring creative women and at-risk youth from street families, ghettos, refugees, etc."
        color="green"
      />

      <div className="w-11/12 md:w-10/12 mx-auto mb-12 grid gap-8">
        <p>
          The Art-Life Blu’ Room is an upcoming creative arts development and
          mentorship centre being set-up through our partnership with the
          University of Nairobi (UoN). The initiative will champion schemes that
          would help strengthen the growth of Kenya’s creative and cultural
          landscape; while piloting the creation of artistic spaces where young
          aspiring women art-makers and at-risk youth from the street families,
          ghettos, refugees, etc. visit to develop, co-create, plan and test
          their ideas.
        </p>
        <p>
          The Art-Life Blu’ Room will provide aspiring women art-makers and
          young vulnerable artists access to vibrant spaces and Art-Making
          Classes for professional coaching, mentoring & incubation; as they
          create connections with the leading arts educators, creative and
          marketing experts that can help them learn more about the new emerging
          trends of the global-arts-market, scale-up their creative competencies
          and realize their art-life mission.
        </p>{" "}
        <p className="mb-8 border border-green-200 shadow-md shadow-green-100 mx-4 p-4 rounded">
          The initiative is designed to provide access to:
          <ul className="grid gap-4 pt-8 pl-12 list-decimal ">
            <li className="ml-4">
              {" "}
              A fully equipped artistic laboratory and incubation centre for
              arts research, residence training, testing and mentorship of an
              ever-expanding community of young aspiring creators of Music,
              Performing Arts, Visual Arts, etc. With the main focus of
              improving women participation in CCIs at the ratio of 2:1 female
              and male from under-represented groups. The centre will provide
              room for cross-cultural expression and showbiz programs.
            </li>
            <li className="ml-4">
              The centre will also spearhead for the creation of a special
              first-ever unit for Psycho-Social Support program targeting to
              provide{" "}
              <span className="underline font-semibold">
                counselling services
              </span>{" "}
              to all categories of artists and art-makers that may be
              psychologically traumatized to manage their emotional and mental
              health.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default ArtlifeBluRoom;
