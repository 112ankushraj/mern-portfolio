import React, { useState } from "react";
import "./Contact.css";

// react-awesome-reveal
import { Rotate, Slide } from "react-awesome-reveal";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

// Toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import image correctly (IMPORTANT)
import contactImg from "../../assets/images/contact.avif";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = async () => {
    try {
      const res = await fetch(
        "https://mern-personal-portfolio-icg4.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.msg,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("Message Sent Successfully! 🎉");
        setFormData({ name: "", email: "", msg: "" });
      } else {
        toast.error("Failed: " + data.error);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">

            {/* Left Image Section */}
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line image-wrapper">
                  <Slide direction="left" triggerOnce>
                    <img
                      src={contactImg}   // FIXED IMAGE PATH
                      alt="contact"
                      className="image"
                    />
                  </Slide>
                </div>
              </div>
            </div>

            {/* Right Form Section */}
            <div className="col-lg-6 col-md-6">
              <Rotate triggerOnce>
                <div className="card2 d-flex card border-0 px-4 py-5">

                  {/* Social Header */}
                  <div className="social-header">
                    <h6>Contact With</h6>
                    <div className="social-icons">
                      <a
                        href="https://www.linkedin.com/in/ankush-raj-56b7902a5/"
                        target="_blank"
                      >
                        <BsLinkedin size={28} color="blue" />
                      </a>
                      <a href="https://github.com/112ankushraj" target="_blank">
                        <BsGithub size={28} color="black" />
                      </a>
                      <a
                        href="mailto:ankushraj15082005@gmail.com"
                        target="_blank"
                      >
                        <MdEmail size={28} color="#D14836" />
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="or-wrapper">
                    <span className="line"></span>
                    <span className="or">OR</span>
                    <span className="line"></span>
                  </div>

                  {/* Inputs */}
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="row px-3">
                    <textarea
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                      value={formData.msg}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="row px-3">
                    <button className="button" onClick={sendMessage}>
                      SEND MESSAGE
                    </button>
                  </div>

                </div>
              </Rotate>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
