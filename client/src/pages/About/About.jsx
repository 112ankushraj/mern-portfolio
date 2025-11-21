import React from "react";
import "./About.css";

// react-reveal का Jump हटाया, react-awesome-reveal का Bounce लगाया
import { Bounce } from "react-awesome-reveal";

const About = () => {
  return (
    <>
      <Bounce>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src="/images/ankush.jpg" alt="profile_pic" />
            </div>

            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am a B.Tech CSE student passionate about full-stack web
                development. I specialize in the MERN stack (MongoDB,
                Express.js, React.js, Node.js) and have strong skills in HTML,
                CSS, and JavaScript. I create dynamic frontends with React.js,
                build robust backends with Node.js and Express.js, and design
                responsive interfaces using Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </Bounce>
    </>
  );
};

export default About;
