import React, { useEffect } from 'react'
import Banner from '../../components/banner/Banner'
 import bg from "./assets/naifest_bg.jpg";
 import NaiFestImage from "./assets/naifest.jpg"
 import naifest from "./assets/nai_fest.pdf";
 
const NaiFest = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner
        bg={bg}
        title="Nairobi Art-Life International Festival"
        description="Spearhead public surveys that provide public snapshots of how residents access their art, how the arts contribute to community development and improve the quality of life in our communities."
      />

      <div className="w-4/5 mx-auto grid md:grid-cols-2 md:grid-cols-[1fr,0.5fr] mb-8">
        <div className="grid gap-8 ">
          <p>
            As a creative incubator for local arts; Art-Life is keen to provide
            opportunities for diverse cultural and artistic expression,
            development, training and employment; with a focus on underserved
            youths from the city’s poor neighbourhoods and their counterparts
            from Kenya’s conflict ridden communities. Art-Life aims at helping
            to improve the efficacy of the arts industry, so as to become an
            underlying benefactor to the country’s socio-economic growth; with
            programs, services and resources aimed at engaging communities
            through the arts, culture and heritage programs led by professional
            artists in the performing, visual, digital, culinary, media, crafts,
            fashion, theatre, and literary arts; and become the thread that
            weaves together generations, to create transformative opportunities
            for wealth and job creation.
          </p>
          <p>
            To achieve milestones, Art-Life will continuously strive to
            appropriate a vibrant working culture with the arts sector; become a
            listening post for news and expert insights of the arts-sector
            through maintaining an active industry blog/newsletter; drive
            mentorship and capacity development programs; stand-in for advocacy
            and research; curate an international multi-disciplinary festival,
            that provide local arts with an opportunity to learn from the best
            international undertakers, as they build strong networks for
            accessing the global-arts-market.
          </p>
          <p>
            As Art-Life we catalyze new discussions and relationships. We
            collect research and share information. We help artists and
            community organizations do what they do best: enrich Nairobi and
            transform it into a more vibrant, beautiful, liveable city.
            Therefore, with the enerous support of individual donors,
            corporations and our funding partners, we will continue to respond
            to the needs of Kenya’s artists and the arts industry at large.
          </p>
          <a
            href={naifest}
            target="_blank"
            class="hover:scale-y-105 hover:text-secondary_yellow"
          >
           Read more...
          </a>
        </div>
        <div className="mt-8 md:mt-0">
          <div>
            <img src={NaiFestImage} alt="about us section image self-end" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaiFest;