import React from 'react';
import aboutImage from "./assets/aboutsectionimage.jpg"

const AboutSection = () => {
  return (
    <div className="w-4/5 mx-auto grid md:grid-cols-2 md:grid-cols-[1fr,0.5fr] ">
      <div className="grid gap-8">
        <p>
          As a creative incubator for local arts; Art-Life is keen to provide
          opportunities for diverse cultural and artistic expression,
          development, training and employment; with a focus on underserved
          youths from the city’s poor neighbourhoods and their counterparts from
          Kenya’s conflict ridden communities. Art-Life aims at helping to
          improve the efficacy of the arts industry, so as to become an
          underlying benefactor to the country’s socio-economic growth; with
          programs, services and resources aimed at engaging communities through
          the arts, culture and heritage programs led by professional artists in
          the performing, visual, digital, culinary, media, crafts, fashion,
          theatre, and literary arts; and become the thread that weaves together
          generations, to create transformative opportunities for wealth and job
          creation.
        </p>
        <p className="bg-green-200 shadow-md shadow-green-100 rounded p-4 mt-4 md:w-4/5 md:mx-auto">
          To achieve milestones, <b>Art-Life</b> will continuously strive to
          appropriate a vibrant working culture with the arts sector; become a
          listening post for news and expert insights of the arts-sector through
          maintaining an active industry blog/newsletter; drive mentorship and
          capacity development programs; stand-in for advocacy and research;
          curate an international multi-disciplinary festival, that provide
          local arts with an opportunity to learn from the best international
          undertakers, as they build strong networks for accessing the
          global-arts-market.
        </p>
        <p>
          As Art-Life we catalyze new discussions and relationships. We collect
          research and share information. We help artists and community
          organizations do what they do best: enrich Nairobi and transform it
          into a more vibrant, beautiful, liveable city. Therefore, with the
          enerous support of individual donors, corporations and our funding
          partners, we will continue to respond to the needs of Kenya’s artists
          and the arts industry at large.
        </p>
      </div>
      <div className="mt-8 md:mt-0">
        <div>
          {" "}
          <img
            src={aboutImage}
            alt="about us section image self-end"
            // className="W-[100%] h-[50%] lg:h-[50%]"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection