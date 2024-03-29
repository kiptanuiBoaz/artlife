import React, { useEffect } from "react";
import Banner from "../../components/banner/Banner";
 import bg from "./assets/bg.jpg";

const Research = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner
        bg={bg}
        title="Research & Advocacy"
        description="Spearhead public surveys that provide public snapshots of how residents access their art, how the arts contribute to community development and improve the quality of life in our communities."
      />

      <div className="w-11/12 md:w-8/12 mx-auto ">
        <div className="mb-8">
          <h2 className="font-semibold text-3xl text-neutral_dark">
            A Survey of arts in the greater Nairobi & beyond
          </h2>
          <p>
            <p className=" italic my-4">
              (Bringing the Communities Alive: Impact of the Arts) <br />
            </p>
            In addition to advocacy, Art-Life through a partnership with the
            University of Nairobi, seeks to periodically examine the impact of
            the arts on life in the Greater Nairobi and beyond. Public surveys
            provide timely snapshots of how residents access the arts, how the
            arts contribute to community development, and improve the quality of
            life in our city.
          </p>
        </div>
        <div className="mb-8 bg-green-300 px-4 py-8 rounded md:w-4/5 md:mx-auto">
          <h2 className="font-semibold text-2xl text-neutral_dark ">
            A Survey of arts in the greater Nairobi & beyond
          </h2>
          <p>
            <p className="  my-4">
              <i>We gather arts data and impact stories.</i>
              <br />
            </p>
            The research fellowship is a cross-cutting deep-end survey program
            that we seek partnerships with industry stakeholders, academia,
            government and other like-minded organizations to capture a broad
            spectrum of data and stories that will assess how the arts and
            culture workers triumph and survive crisis, conflicts and economic
            shocks as well as assess the effects of tech and globalization to
            local arts sector i.e. On-going plans to take{" "}
            <a
              href="https://www.americansforthearts.org/by-topic/disaster-preparedness/coronavirus-covid-19-resource-and-response-center?qt-view__content_fed_quick_tab__block_1=2#survey"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              the Impact Survey
            </a>{" "}
            on COVID-19 to the Kenya arts industry.
          </p>
        </div>
      </div>

      {/* Advocacy Section */}

      <div className="mb-8 bg-green-100  py-8">
        <div className="w-11/12 md:w-4/5 mx-auto">
          <h2 className="font-semibold text-3xl text-neutral_dark">Advocacy</h2>
          <div className="grid gap-4 pt-4">
            <p>
              As Art-Life we Focus on Stimulating Advocacy for the Arts &
              Culture Industry at the Community, County, National and
              International Level.
            </p>
            <p>
              We believe anyone can <span className="font-bold">Advocate</span>{" "}
              for the Arts and have impact. Art-Life provides tools, research,
              and training that help arts professionals and regular citizens
              alike become seasoned arts advocates. This Advocacy Platform
              highlights ways you can get involved and start advocating for the
              arts today.
            </p>
            <div className=" bg-white shadow-md shadow-green-100 rounded p-4 my-4 md:w-4/5 md:mx-auto">
              <span className="font-bold">
                The arts matter. Here’s what you can do to support the
                creatives.
              </span>
              <p>
                Artists and arts organizations make a tremendous contribution to
                the economic vitality and liveability of their communities.
                Investments in the arts leverages increased support from other
                sources, increases employment, encourages tourism and ensures
                greater accessibility to arts programming for creative
                practitioners in both the urban and rural settlements. Beyond
                that, the arts have an intrinsic value to individuals and
                communities; they inspire, challenge, excite, spark
                conversations, bridge differences and so much more.
              </p>
            </div>

            <p>
              Art-Life aims to regularly engage with advocacy leaders on the
              issues and needs of artists, arts organizations and arts
              enthusiasts. We believe that the arts help cities thrive, and
              through our programs and initiatives, we’re working to build a
              strong, creative city. In addition to delivering far-reaching
              programs and learning opportunities through{" "}
              <a
                href="https://torontoartsfoundation.org/initiatives/nan"
                target="_blank"
                rel="noopener noreferrer"
                className="underline pr-2"
              >
                Art-Life-Hood,
              </a>
              <a
                href="https://torontoartsfoundation.org/initiatives/arts-in-the-parks-%281%29"
                target="_blank"
                rel="noopener noreferrer"
                className="underline pr-2"
              >
                Let’s Talk Art, Culture ‘4’ Peace
              </a>
              and{" "}
              <a
                href="https://torontoartsfoundation.org/initiatives/creative-champions-network"
                target="_blank"
                rel="noopener noreferrer"
                className="underline "
              >
                Culture-Shock Initiative
              </a>
              , we invest in research that not only informs our own programming,
              but demonstrates the impact of the arts and its support by the
              majority of Kenyans.
            </p>
          </div>
        </div>
      </div>
      <div>
        {/* Advocacy  tools section */}

        <div className="w-11/12 md:w-4/5 mx-auto">
          <p className="mb-8 font-semibold text-3xl pt-12 text-primary_green   ">
            Advocacy Tools
          </p>

          <div className=" mb-8 border border-green-300 shadow-md shadow-green-100 rounded p-4 ">
            <h5 className="font-bold mb-2">Art-Life Statics 360</h5>
            <p>
              {" "}
              <a
                href="https://torontoartsfoundation.org/initiatives/research/reports-and-publications/pages/toronto-arts-stats-2018-why-the-arts-matter"
                target="_blank"
                rel="noopener noreferrer"
                className="underline mr-1"
              >
                Art-Life Statics 360
              </a>{" "}
              asks Kenyans why the arts matter. This report brings together
              results from a public opinion poll, showing that most Kenyans are
              optimistic about the industry and believe the arts add to their
              quality of life.
            </p>
          </div>
          <div className="ml border border-green-300 shadow-md shadow-green-100 rounded p-4 mb-8">
            <h5 className="font-bold mb-2">Art-Life Facts</h5>
            <p>
              {" "}
              <a
                href="https://torontoartsfoundation.org/initiatives/research/reports-and-publications/pages/toronto-arts-facts"
                target="_blank"
                rel="noopener noreferrer"
                className="underline mr-1"
              >
                Art-Life Facts
              </a>{" "}
              gathers together key information about the arts in Nairobi and
              beyond, compiled from a wide variety of research studies and
              statistical resources. This information falls into the general
              areas of the arts’ role in the economy, its impact on communities,
              and its place in people’s lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
