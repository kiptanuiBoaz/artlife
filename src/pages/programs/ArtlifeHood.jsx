import React, { useEffect } from 'react'
import Banner from '../../components/banner/Banner'
 import bg from "./assets/artlifehood_bg.jpg";
 
const ArtlifeHood = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner
        bg={bg}
        title="Art-Life Hood"
        description="A place where arts and community engagement meet to increase arts access in neighbourhoods"
      />

      <div className="w-11/12 md:w-10/12 mx-auto mb-12 grid gap-8">
        <p>
          Art-Life-Hood program is a strategic initiative of Art-Life. We are
          aware of increased challenges experienced by both the emerging and
          established artists attempting to engage their local communities. As a
          major part of supporting public art and promoting art education in
          communities; we offer access to innovative arts programming, exciting
          partnership opportunities and awards to artists, arts organizations,
          arts educators, public institutions, churches, business entities and
          other community agencies across the greater Nairobi Metropolitan and
          beyond, to proactively support the growth and increased access of arts
          in communities; and as a direct response to issues confronting the
          development of arts in our neighbourhoods.
        </p>
        <p>
          Art-Life-Hood initiative seeks to incorporate the arts into the fabric
          of neighbourhood life with programs that stimulate, entertain and
          educate the general public and encourage artistic excellence in the
          backyard of community outlays. In order to attain the goals of this
          program, Art-Life intends to continuously engage philanthropic and
          corporate leaders; as well as build partnerships with many
          organizations, including museums, neighbourhood associations, artist
          groups, civic and business entities.
        </p>
        <div className="md:grid grid-cols-2">
          <p className="border border-green-200 shadow-md shadow-green-100 mx-4 p-4 rounded">
            <p className="font-semibold text-xl "> Project Vision:</p> <br />{" "}
            The program envisions a greater Nairobi in which artists in every
            neighbourhood are well resourced, well trained and well supported to
            make transformative art, and strengthen the arts ecology by building
            volunteer support to develop champions of the arts in the service of
            community building.
          </p>
          <p className="border border-green-200 shadow-md shadow-green-100 mx-4 p-4 rounded">
            <p className="font-semibold text-xl ">Project Mandate</p> <br />
            To foster excellence in community-­engaged art-making by offering
            opportunities for artists and arts organizations to share resources,
            exchange ideas and expertise between artists who work in, with and
            for the greater Nairobi’s diverse communities. From the individual
            artist responding to social issues that affect their community; to
            the arts organization that co­-creates with local residents; and
            arts educators who mentor youth, to institutional/business entities
            that support and provide public spaces for showcasing community
            arts, etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArtlifeHood