import React from "react";
import "./Project.css";

// react-awesome-reveal का Rotate effect
import { Rotate } from "react-awesome-reveal";

const projects = [
  {
    title: "Hospital-Web-Page",
    type: "Frontend",
    image: "/src/assets/images/hospital-web.png",
    techStack: ["HTML", "CSS","JAVASCRIPT"],
    link: "https://112ankushraj.github.io/Responsive-Hospital-Website/",
  },
  {
    title: "Myntra-Clone",
    type: "Frontend",
    image: "/src/assets/images/myntraclone.png",
    techStack: ["HTML", "CSS","JAVASCRIPT"],
    link: "https://112ankushraj.github.io/Myntra-clone/",
  },
   {
    title: "Password-Generator",
    type: "Frontend",
    image: "/src/assets/images/contact.avif",
    techStack: ["React", "Tailwind CSS",],
    link: "https://password-generator-murex-theta.vercel.app/",
  },
  {
    title: "Burger-Website",
    type: "Frontend",
    image: "/src/assets/images/burger.png",
    techStack: ["React", "Tailwind CSS",],
    link: "https://appburger.netlify.app/",
  },
  {
    title: "Chatgpt-clone",
    type: "Frontend",
    image: "/src/assets/images/chatgpt-clone.png",
    techStack: ["React", "Tailwind CSS"],
    link: "https://chatgptankush.netlify.app/",
  },
  {
    title: "Code-Review",
    type: "Frontend + Nodejs",
    image: "/src/assets/images/code-review.png",
    techStack: ["React", "Tailwind CSS", "Node",],
    link: "https://github.com/112ankushraj/code-reviewer",
  },

  {
    title: "Blood Bank App",
    type: "Full Stack",
    image: "https://www.shutterstock.com/image-vector/vector-flat-illustration-template-blood-260nw-1612100458.jpg",
    techStack: ["Node", "Express", "React JS","CSS","Bootstrap", "MongoDB"],
    link: "https://github.com/112ankushraj/Blood-Bank",
  },
  {
    title: "Real Time Chat Application",
    type: "Full Stack",
    image: "/src/assets/images/real time chat app.png",
    techStack: ["React", "Redux","Tailwind CSS", "Express","Node","MongoDB"],
    link: "https://realtimmechatapp.onrender.com/login",
  },
  
];

const Project = () => {
  return (
    <div className="container project" id="project">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        TOP RECENT PROJECTS
      </h2>

      <hr />

      <p className="pb-3 text-center">
        Welcome to my project showcase...
      </p>

      <div className="row g-3" id="ads">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Rotate triggerOnce>
              <div className="card rounded">
                <div className="card image position-relative">
                  <span className="card-notify-badge">{project.type}</span>
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="card-image-overlay m-auto mt-3">
                  {project.techStack.map((tech, i) => (
                    <span className="card-detail-badge" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">{project.title}</h5>
                  </div>
                  <a className="ad-btn" href={project.link}>
                    View
                  </a>
                </div>
              </div>
            </Rotate>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
