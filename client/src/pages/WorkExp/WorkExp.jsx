import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <>
      <div className=" work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />

          <VerticalTimeline lineColor="#1e1e2c" className="box">
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2023 - 2024 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">INTERNSHIP</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Company Name : Codsoft
              </h4>
              <p>Internship in Web Development from 01/07/2024 to 31/07/2024</p>
              <p>
    Completed a one-month internship at Codsoft as a Web Developer Intern, where I developed responsive
websites using HTML, CSS, and JavaScript, enhanced UI/UX design, and gained hands-on experience in
real-time project development and professional collaboration.

    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2023 - 2024 - present"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">INTERNSHIP</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Company Name :   C – DAC ATC , PATNA
              </h4>
              <p>Internship in Web Design from 25/06/2025 to 26/07/2025</p>
              <p>
   Completed a 4-week industrial internship focused on web design fundamentals. Applied HTML, CSS3, Bootstrap, JavaScript, and AJAX to build interactive web pages.

    </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
