import React from 'react';

const data = [
  {
    index: 1,

    title: "Our Vision",
    details:
      "To be the premier and lead promoter of art-cultural programmes and events in Kenya and beyond",
  },
  {
    index: 2,

    title: "Our Mission",
    details:
      "To identify needs, develop talents, create opportunities, promote high impact art-focused programmes and festival events for Kenyans and the visiting global audience.",
  },
  {
    index: 3,

    title: "Mandate",
    details:
      "Art-Life is a progressive not-for-profit local arts organization linking the needs of those who create/make art, those who engage the artist as an essential element of their own development, and those who support Art-Life because it adds value (sense of identity, lifestyle and prosperity) to the neighbourhood.",
  },
  {
    index: 4,

    title: "Manifesto",
    details:
      "Art-Life is committed to accessibility, equity & accountability. Through our innovative arts programs, inclusive spaces & diverse staff, we are working to create an environment where all of our community feels welcome, safe & celebrated.",
  },
];

const MissionCard = () => {
  return (
    <div className="w-4/5 mx-auto py-12  grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {data.map((datas) => (
        <div className="border border-green-300 shadow-md shadow-green-100 rounded p-4 mt-4">
          <h3 className="font-semibold text-xl text-green-500 ">{datas.title}</h3>
          <p className=" mt-2">{datas.details}</p>
        </div>
      ))}
    </div>
  );
}

export default MissionCard