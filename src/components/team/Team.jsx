import React from "react";
import ProfileCard from "./ProfileCard";
import SectionTitle from "../sectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Staff from "./Staff";

const data = [
  {
    image: require("./asset/abraham.jpg"),
    title: "Chair of the Board",

    name: "ABRAHAM B. O EKAJULO ",
    bio: "Shares great passion for everything art. He has vast experience working with international & local organizations in different capacities that span across different industries & continents. He is a Cultural Ambassador &  founder of the Ateker kingdom Alliance (a diaspora Africa development organization with head office in the US). He is an Executive Director of Pernection Inc - USA, & the most recent Research & Development Officer at the Solablock Company, USA. Mr. Ekajulo also brings wealth of experience having worked in the healthcare industry for over 10 years in different organizations in the United States of America; also the coffee industry at the Coffee Board of Kenya; & a nonprofit organization  Revive Community Africa. He holds an MBA, majoring in International Business.",
  },
  {
    image: require("./asset/Isaac.jpg"),
    title: "Executive Director  ",
    name: "ISAAC C. O OPRONG ",
    bio: "An artful & passionate founder as well as vision bearer of the Art-Life Group initiatives; who believes in the healing & constructive power of arts; and the underlying benefits of a good creative culture to communities & livelihoods. With a vast experience of having worked in both Kenya & Botswana's youth mentoring programs - he is a logical & result driven thought leader with multi-tasking abilities to achieve goals & objectives. Always excited to be used of  God to serve courses that advance sustainable human relations, peace & progress, whenever an opportunity arises. Also the founder of Majirani Action Group (a nonprofit that organizes young community volunteers to provide targeted support to vulnerable persons & address upheavals that affect trans-boundary communities living along the Kenya-Uganda border of western Kenya. Ever delighted to support the creative & cultural benefactors with the best of his skills in project concepts, planning, fundraising, management & execution; often with great prospects.",
  },
  {
    image: require("./asset/Gladwell.jpg"),
    title: "Treasurer",
    name: "GLADWELL M. MALEMA",
    bio: "A strong & adaptable individual with excellent administrative skills; bringing a vast experience of having worked with highly sort professionals, scholars & managers in different spheres of corporate, nonprofit & multi-literal organizations like the United Nations, Heart to Heart Foundation, etc. She posseses highly adept skills in human resource & organizational management - with effective capabilities in strategic planning, communication, finance, records & workplace automation. A musical artist with gospel orientation, she has an avid passion for interior design concepts & arts; who derives much pleasure in helping others improve their abilities.",
  },
  {
    image: require("./asset/divine.jpg"),
    title: "Board Member",
    name: "DEVAINE WANDERA APONDIz",
    bio: "A founder, producer & director of The Royal Theatre. Bringing vast skills & experience as an alumni of the Copyright Law: Harvard Law School & a founder Secretary General of the Kenya Cultural Centre Association of Artistes. He is also a serving Hon. Secretary of the Wasanii Housing Cooperative Society Limited (an initiative organizing the artist benefactors to pool savings towards a home ownership scheme & investments). A versatile & self-driven script-writer, film-maker & an award winning thespian with a record of producing & directing great literary works of theatre for school-based set books across the Kenyan republic. He has participated as a support cast in several Hollywood & Bollywood movies filmed & produced in East Africa region.",
  },
  {
    image: require("./asset/fred.jpg"),
    title: "Board Member ",
    name: "FRED MUSAU",
    bio: "A writer, poet, art enthusiast and acclaimed cultural activist who has played a major part in shaping our country's socio-cultural sector. In the advent of Kenya's Comedy industry, Musau pioneered one of the first recognizable comedy troupe's called The Nairobi Players which staged successful weekly comedy shows in some of Nairobi's leading hotels and clubs. He helped to nurture some of the household names in Kenya's thriving comedy industry. As a founder member and Country Director of DCP - Kenya (Diaspora Community Projects Kenya) for many years - Musau is also a value-driven Social Entrepreneur with a rich extensive experience in running community-interest organizations that design and implement sustainable & effective programs that champion youth inclusion and participation in promoting the economy. He serves as a Patron and Trustee to various youth & women self-help groups, University art & environment advocacy clubs and many other community organizations.",
  },
  {
    image: require("./asset/daniel.jpg"),
    title: "Board Member ",
    name: "DANIEL L. MAINA ",
    bio: " Daniel Maina, brings a wealth of experience and expertise to the organization's leadership. With a background in IT, project management, and entrepreneurial experience. He has spent over a decade building a successful career in various sectors. He has a demonstrated ability in successfully managing projects and teams in diverse industries; showcasing adaptability and versatility. As an innovator and founder of DTT Technologies (a Kenyan based ICT company), Daniel understands the challenges and opportunities of entrepreneurship; and has valuable insights on how to build a successful enterprise. With his strong leadership skills, strategic thinking, and entrepreneurial mindset, he will make significant contributions towards the attainment of the organization's overall objective and mandate.",
  },
];

const Team = () => {
  return (
    <div className=" w-11/12 md:w-4/5 mx-auto pt-48 ">
      <div className=" w-11/12 md:w-4/5 mx-auto grid justify-center">
        <h2 className="text-4xl text-center font-bold">Executive Board</h2>
        <div className="h-2 w-16 bg-primary_green rounded mt-2"></div>
        {/* <p className="underline underline-offset-2">See all</p> */}
      </div>
      <div className="grid md:grid-cols-3  justify-center gap-4 px-8 my-8 h-full border p-4 rounded border-primary_green">
        {data.map((person, index) => (
          <ProfileCard
            key={index}
            image={person.image}
            name={person.name}
            title={person.title}
            role={person.role}
            bio={person.bio}
          />
        ))}
      </div>
      <div className=" w-11/12 md:w-4/5 mx-auto grid justify-center">
        <h2 className="text-4xl text-center font-bold">Team Artlife </h2>
        <div className="h-2 w-16 bg-primary_green rounded mt-2"></div>
        {/* <p className="underline underline-offset-2">See all</p> */}
      </div>
      <div>
        {" "}
        <Staff />
      </div>
    </div>
  );
};

export default Team;
