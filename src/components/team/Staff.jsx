import React from "react";

const Staff = () => {
  const staff = [
    {
      index: 1,
      title: "Member",
      staffName: "Dr. John Orindi ",
      role: "Director – Corporate Affairs University of Nairobi",
    },
    {
      index: 2,
      title: "Member",
      staffName: "Dr. Fred Atoh",
      role: "Lecturer & Head of Music Program, University of Nairobi",
    },
    {
      index: 3,
      title: "Member",
      staffName: "Dr. Cynthia Amai ",
      role: "PhD. Climate Change Expert",
    },
    {
      index: 4,
      title: "Member",
      staffName: "John Katana",
      role: "John Katana",
    },
    {
      index: 5,
      title: "Project Assistant",
      staffName: "Nelson Njogu",
      role: "Poet & Music Writer",
    },
    {
      index: 6,
      title: "IT & Multimedia Co-ordinator",
      staffName: "Brian Ekisa",
      role: "Artist & I.T Specialist",
    },
    {
      index: 7,
      title: "Partneship & Fundraising Programs",
      staffName: "Barbra Nyende",
      role: "Digital Communication Specialist",
    },
    {
      index: 8,
      title: "Head of Events & Festival Programs",
      staffName: "Chris Njogu ",
      role: "vents & Media Production Expert",
    },
    {
      index: 9,
      title: "Artistic Projects & Community Outreach Programs ",
      staffName: "Christine Nekesa",
      role: "Programme Co-ordinator",
    },
    {
      index: 10,
      title: "Legal Advisor",
      staffName: "Anjello Etyang",
      role: "Advocate",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border p-4 my-8">
      {staff.map((member) => (
        <div
          key={member.index}
          className="bg-white rounded shadow-md p-4 text-center border border-green-200"
        >
          <h3 className="text-lg font-medium">{member.staffName}</h3>
          <h4 className=" font-light">{member.title}</h4>

          <p className="text-sm text-gray-800 italic">{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Staff;
