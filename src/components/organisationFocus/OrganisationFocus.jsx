import React from 'react';
import bg from "./assets/bg.jpg"

const OrganisationFocus = () => {
  return (
    <div
      className="bg-cover bg-center grid "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" text-neutral_white self-center w-4/5 mx-auto py-24">
        <h2 className=" text-2xl font-bold ">Organisational Focus</h2>
        <p className=" my-8 ">ART-LIFE GROUP has twelve clear goals, to:</p>
        <ul className="list-disc leading-6 tracking-wider  grid gap-2">
          <li>
            Grow creativity & strengthen the work of creative and cultural
            actors - Talent scout children and at-risk youth to help develop
            high-value creativity, thinking and behavioural skills through
            training and mentorship.
          </li>
          <li>
            Foster co-creation and collaborations in art-making – helping
            art-makers strengthened their cultural landscape and market
            positions; to drive up their audience numbers, performance bookings
            and improve livelihoods.{" "}
          </li>
          <li>
            Curate initiatives to improve well being – unleashing the potential
            of arts and culture to guarantee increased participation of creative
            women and at-risk youth in building resilience, livelihoods and
            wealth creation.{" "}
          </li>
          <li>
            Enhance digital skilfulness & competencies – increasing the
            competitiveness of local arts in accessing the frontlines of the
            global cultural markets; in order to enhance their brand value and
            visibility Innovate new business models – leveraging research for
            training and mentoring an ever-expanding community of art-makers
            with opportunities for incubation focused on improving production,
            distribution, financial literacy and market access.
          </li>
          <li>
            Conduct continuous research & impact surveys – growing a culture of
            sustainable research and data collection with clear cut projections
            and cutting edge analysis on issues affecting the growth of the
            industry.
          </li>
          <li>
            Publication of Art-Life digital magazine – featuring special and
            inspiring stories of artistic struggles and triumphs, in addition to
            news and information exchange designed to foster a strong spirit of
            networking.
          </li>
          <li>
            Create public spaces for community arts - offering free professional
            coaching, testing and talent development aid to children, women and
            at-risk youth aspiring to scale-up their art-making skills.
          </li>
          <li>
            Run school visitation programs - helping students visualize
            themselves in art-making career.
          </li>
          <li>
            Deploy arts as a tool of advocacy – promoting women rights, fight
            retrogressive cultures like FGM, effects of climate-change, and
            spearhead opportunities for peace-building among the conflict
            riddled communities.
          </li>
          <li>
            Engage policy, collective action and impact – Continuously engage
            policy functionaries; establish a new civic alliance across cultural
            sectors for the development of policy and action that is sensitive
            to the needs of creative children, women and at-risk youth.{" "}
          </li>
          <li>
            Spearhead the Art-Life Awards - recognizing artistic milestones and
            achievement in the community.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OrganisationFocus