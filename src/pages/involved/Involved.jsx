import React, {useEffect} from "react";
import Banner from "../../components/banner/Banner";
import bg from "./assets/bg.jpg";
import RegisterButton from "./RegisterButton";
import sideImage from "./assets/sideimage_involved.jpg"
import {Link} from "react-router-dom";
import Partners from "../../components/partner/Partners";

const Involved = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div>
      <Banner
        bg={bg}
        title="Get Involved"
        color="green"
        description="Want to be a more involved part of the Art-Life community? Learn how you can contribute to the growth of the art industry in Kenya."
      />

      <div className="w-4/5 mx-auto grid md:grid-cols-2 md:grid-cols-[1fr,0.5fr] ">
        <div className="mr-4 mb-8">
          <div className="grid gap-8 ">
            <p>
              <b>
                <i>Arts Create Hope</i>
              </b>
            </p>
            <p>
              In the best of times, the arts create connection, community,
              belonging, and joy. In the worst of times, the arts create all of
              that and more—and most of all, the arts create hope. Spread the
              word and find ways you can support the arts right now!
            </p>

            <div className="bg-green-100 px-4 py-8 rounded">
              <h2 className="font-bold text-xl mb-2">Donate</h2>
              <p>
                Art-Life Group is a strategic initiative, developed as a direct
                response to issues confronting the under-privileged suburban
                Nairobi artists and their rural counterparts. We are driven by a
                strong desire to connect the budding artists to the valuable
                resources that would help them attain their ultimate vision
                through professional development and networking opportunities.
              </p>
              <p className="mt-2">
                The Art-Life programs and initiatives depend on the benevolent
                donations and support of partners, well-wishers and
                grant-makers. If you’d like to support our programs, research
                and advocacy in order to enhance the growth of individual or
                communal excellence in the arts, think about contributing to or
                making a donation today to help us continue offering these
                workshops and programs for free to more champions like yourself.
                Whether it’s arts education, social justice, arts and equity,
                arts access, a specific discipline or anything else that you
                feel passionate about, there’s someone out there doing amazing
                work that can use your support. In addition to our programs and
                initiatives, we offer many awards that can use your support!
              </p>
            </div>

            {/* partner section */}

            <div>
              <h2 className="font-bold text-xl mb-2">Partner With Us</h2>
              <p>
                Art-Life Group believes in the intrinsic value of collaboration.
                We are eager to work with artists, arts organizations and
                community organizations to increase the value of arts to
                underserved communities, generate reciprocal knowledge sharing
                and critical dialogues.
              </p>
              <p className="mt-2">
                Together, we explore areas such as establishing best practices
                and creating open dialogue around challenges and opportunities
                in community-arts practice. The aims of our partnership are to
                encourage participation and collaboration across all sectors:
                the arts, environmental, culture, security, health and social
                services. We believe that working and learning together helps to
                build stronger, more resilient and more vibrant communities.
              </p>
              <div className="ml-4 md:ml-8 mt-4 border border-green-200 shadow shadow-green-100 p-4 rounded">
                <h2 className="font-bold text-lg mb-2"> Join a program </h2>
                <p>
                  Are you looking for a platform to express your creativity?
                  Join one of our dynamic programs designed to free your
                  artistic potential and deepen your connection to the
                  community. ADVOCATE by developing key messaging about why the
                  arts are important, and back it up by using stats and figures
                  from our Art-Life Statics 360 and Art-Life Facts.
                </p>
                <p className="mt-2">
                  Making a strong case for the arts is half the battle. Take
                  time to draft up your position on why the arts matters to you
                  and your community. Start with an anecdote or use some of our
                  Statistics & Facts; the numbers in those resources are truly
                  remarkable and we made them specifically for Kenyans to use
                  when advocating for the arts. Visit our Events Calendar to see
                  what's happening next. Whether you're interested in checking
                  out an exhibit, watching a live performance, or developing a
                  skill to grow as a professional,{" "}
                  <b>
                    <i>WE GOT YOU COVERED!</i>
                  </b>
                </p>
              </div>
            </div>

            <Partners />

            {/* Volunteer Section */}
            <div className="bg-green-100 px-4 py-8">
              <h2 className="font-bold text-xl mb-2">Volunteer </h2>
              <p>
                Do you have some time and/or skills to share? We are always
                looking for active volunteers from our community to help in a
                variety of ways, from on-site at events or event planning,
                support specific campaigns or their operations, to
                administrative tasks or project management, PR/marketing. You
                may not have the resources to financially contribute to a
                variety of our arts programs or initiatives but you can
                volunteer your time.
              </p>
              <div>
                <p className="pb-2">
                  We warmly welcome you to join the Art-Life Volunteer Network
                  to deepen your involvement with us. By signing up, you will
                  receive bi-monthly emails listing available volunteer
                  opportunities that you can partake in.
                </p>
                <p>
                  For those interested in partnering with us, we invite you to
                  call us at{" "}
                  <b>
                    <u>
                      {" "}
                      <a href="tel:+254770059995">+254 77 005 9995 </a>{" "}
                    </u>
                  </b>
                  or send an email to{" "}
                  <b>
                    <i>
                      <a href="mailto:info@artlifegroup.or.ke">
                        info@artlifegroup.or.ke
                      </a>
                    </i>
                  </b>
                  . We would be delighted to provide you with more information
                  on how you can contribute through donations or partnership
                  opportunities.
                </p>
                <p>
                  <Link to="/registration">Register</Link>
                </p>
              </div>
              <RegisterButton />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <img src={sideImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Involved;
