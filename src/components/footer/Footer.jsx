import React from 'react';
import logo from './assets/logo.svg';
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import {  Fade} from "react-awesome-reveal";

 const currentYear = new Date().getFullYear();


const Footer = () => {
  return (
    <div className=" bg-primary_green ">
      <div className="text-white flex flex-col gap-8 w-4/5 mx-auto py-8 md:flex-row md:justify-center">
        <div className="">
          <Fade cascade up>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>

            <p className="text-sm  pt-4 ">
              Art-Life is a progressive, not-for-profit organization wholly
              incorporated under Registration Number HUD.GP0/STA/8/2019/(0150)
              of the Republic of Kenya; with a focus on engaging communities
              through creative arts; Art-Life is a key advocator, organizer &
              incubator for local arts, with a range of programs led by
              professional artists in visual, music, dance, poetry, comedy,
              digital, culinary, media, theatre, sculpting, fashion, acrobatics,
              etc.
            </p>
          </Fade>
        </div>

        <div className="flex-grow w-4/6 grid ">
          <h4 className="font-semibold text-xl  mb-2">Life at Art-Life</h4>
          <p className="hover:underline">
            <Link to="/about">About Art-Life</Link>
          </p>
          <p className="hover:underline">
            <Link to="/contact">Contact Us</Link>
          </p>

          <p>
            <a href="tel:+254770059995"></a>
            <span className="text-white hover:text-secondary_yellow flex items-center">
              <FaPhoneAlt className="w-4 h-4 mr-2" /> +254 77 005 9995
            </span>{" "}
          </p>
          <p>
            <a href="mailto:info@artlifegroup.or.ke">
              {" "}
              <span className="text-white hover:text-secondary_yellow flex items-center">
                <MdOutlineMailOutline className="w-4 h-4 mr-2" />{" "}
                info@artlifegroup.or.ke
              </span>{" "}
            </a>
          </p>
          <div className="flex gap-4 pt-2">
            <Fade cascade>
              <a
                href="https://twitter.com/ArtlifeG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white hover:text-secondary_yellow">
                  <FaTwitter className="w-6 h-6" />
                </span>
              </a>
              <a
                href="https://www.facebook.com/artlifegroup2020"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white hover:text-secondary_yellow">
                  <FaFacebookF className="w-6 h-6" />
                </span>
              </a>
              <a
                href="https://www.instagram.com/artlifegroup2020/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white hover:text-secondary_yellow">
                  <BsInstagram className="w-6 h-6" />
                </span>
              </a>
              <a
                href="http://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white hover:text-secondary_yellow">
                  <FaLinkedinIn className="w-6 h-6" />
                </span>
              </a>
            </Fade>
          </div>
        </div>
        <div className="flex-grow w-4/6 grid">
          <Fade cascade>
            <h4 className="font-semibold w-4/5 text-xl mb-2">Get Involved</h4>
            <p className="hover:underline">
              <Link to="/registration">Volunteer</Link>
            </p>
            <p className="hover:underline">
              <Link to="/contact">Partner</Link>
            </p>
            <p className="hover:underline">
              <Link to="/contact">Donate</Link>
            </p>
            <p className="hover:underline">
              <Link to="/contact">Join a Program</Link>
            </p>
          </Fade>
        </div>
        <div className="flex-grow w-5/6 grid">
          <Fade cascade>
            <h4 className="font-semibold text-xl mb-2">Learn More</h4>
            <p className="hover:underline">
              <Link to="/research">Research & Advocacy</Link>
            </p>
            <p className="hover:underline">
              <Link to="/programs">Programs/ initiatives</Link>
            </p>
            <p className="hover:underline">
              <Link to="/events">Festivals & events</Link>
            </p>
          </Fade>
        </div>
      </div>
      <div className="text-white text-center pb-4 ">
        <p> Copyright &copy; {currentYear} Artlife Group</p>
        <p className="mb-4">
          Designed and Developed by{" "}
          <a
            href="http://www.ondishub.co.ke"
            target="_blank"
            rel='noreferrer'
            className="font-semibold text-[#e8303a]"
          >
            OndisHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer