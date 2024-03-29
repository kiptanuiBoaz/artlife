import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "./assests/logo.svg";
import "./navbar.scss"

const Navbar = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleEvent = () => {
      setDeviceWidth(window.innerWidth);
      setScrollPos(window.pageYOffset);
      setShowMenu(deviceWidth < 768 ? false : true);
    }
    window.addEventListener('resize', handleEvent);
    //clean up fns
    return () => {
      window.removeEventListener('resize', handleEvent);
      window.addEventListener('scroll', handleEvent);
    };
  }, [deviceWidth, scrollPos]);

  const navItems = [
    { text: "Home", to: "/" },
    { text: "About", "to": "/about" },
    { text: "Programs", "to": "/programs" },
    { text: "Festivals and Events", "to": "/events" },
    { text: "Research & Advocacy", to: "/research" },
    
  ]

  return (
    <section className={` fixed w-screen z-10`}>
      <nav
        className={`${
          scrollPos < 25 ? "bg-primary_green" : "bg-primary_green"
        }  nav-container sticky top-0`}
      >
        <div className="flex w-11/12 md:w-screen md:px-2 mx-auto justify-between items-center ">
          <div className="logo">
            <img src={Logo} alt="Logo" className="logo-image" />
          </div>

          <div className="nav-links-container ">
            <div onClick={() => setShowMenu(!showMenu)} className="menu-icons">
              {deviceWidth < 920 &&
                (showMenu ? (
                  <HiX className="cursor-pointer text-neutral_white hover:text-primary_green w-10 h-10" />
                ) : (
                  <HiMenuAlt3 className="cursor-pointer text-neutral_white  hover:text-primary_green w-10 h-10" />
                ))}
            </div>
            <div
              style={{ display: !showMenu && "none" }}
              className="nav-links flex flex-wrap gap-4 justify-end pr-4 items-center"
            >
              {navItems.map(({ text, to }) => (
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                  activeClassName="font-bold"
                >
                  {text}
                </NavLink>
              ))}

              <div className="grid max-w-prose md:flex gap-2">
                <Link
                  to="/involved"
                  className="border-2 border-secondary_yellow  font-bold py-2 px-4 rounded hover:scale-105"
                >
                  Get Involved
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-secondary_yellow md:ml-4  bg-secondary_yellow  font-bold py-2 px-8 hover:scale-105 rounded"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;