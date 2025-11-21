import React from "react";
import "./menu.css";
import { Zoom, Fade } from "react-awesome-reveal";
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

const Menu = ({ toggle }) => {
  const menuItems = [
    { to: "home", icon: <FcHome />, label: "Home" },
    { to: "about", icon: <FcAbout />, label: "About" },
    { to: "education", icon: <FcReadingEbook />, label: "Education" },
    { to: "tech", icon: <FcBiotech />, label: "Tech Stack" },
    { to: "project", icon: <FcVideoProjector />, label: "Projects" },
    { to: "work", icon: <FcPortraitMode />, label: "Work Experience" },
    { to: "contact", icon: <FcBusinessContact />, label: "Contact" },
  ];

  return (
    <>
      {toggle ? (
        <>
          {/* Profile Image */}
          <Zoom>
            <div className="navbar-profile-pic">
              <img src="/images/ankush.jpg" alt="profile-pic" />
            </div>
          </Zoom>

          {/* Menu Items */}
          <Fade direction="left" triggerOnce>
            <div className="nav-items">
              <div className="nav-item">
                {menuItems.map((item) => (
                  <Link
                    key={item.to}
                    className="nav-link"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    activeClass="active"   // <-- Important for active styling
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                className="nav-link"
                to={item.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                activeClass="active"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
