import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import "./MobileNav.css";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { to: "home", icon: <FcHome />, label: "Home", offset: -100 },
    { to: "about", icon: <FcAbout />, label: "About", offset: -100 },
    { to: "education", icon: <FcReadingEbook />, label: "Education", offset: -100 },
    { to: "techstack", icon: <FcBiotech />, label: "Tech Stack", offset: -100 },
    { to: "projects", icon: <FcVideoProjector />, label: "Projects", offset: -100 },
    { to: "work", icon: <FcPortraitMode />, label: "Work Experience", offset: -100 },
    { to: "contact", icon: <FcBusinessContact />, label: "Contact", offset: -50 }, // smaller offset for last section
  ];

  const handleOpen = () => setOpen(!open);
  const handleMenuClick = () => setOpen(false);

  return (
    <div className="mobile-nav">
      {/* Header with Hamburger / Close */}
      <div className="mobile-nav-header">
        {open ? (
          <AiOutlineMenuFold size={30} className="mobile-nav-icon" onClick={handleOpen} />
        ) : (
          <GiHamburgerMenu size={30} className="mobile-nav-icon" onClick={handleOpen} />
        )}
        <span className="mobile-nav-title ">My Portfolio App</span>
      </div>

      {/* Menu Items */}
      {open && (
        <div className="mobile-nav-menu">
          <div className="nav-items">
            <div className="nav-item">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  className="nav-link"
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={item.offset}
                  duration={500}
                  activeClass="active"       // <-- Add active class
                  onClick={handleMenuClick}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
