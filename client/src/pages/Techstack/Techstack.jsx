import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";

// react-reveal हटाया, awesome reveal use किया
import { Fade, AttentionSeeker } from "react-awesome-reveal";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="tech">

        {/* RubberBand → AttentionSeeker rubberBand */}
        <AttentionSeeker effect="rubberBand">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 Including Programming Languages, frameworks, database, front-end
            and back-end tools, and APIs
          </p>
        </AttentionSeeker>

        <Fade direction="left" triggerOnce>
          <div className="row cen">
            {TechstackList.map((tech) => (
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Techstack;
