import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import './Home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/resume.pdf'
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const [theme, setTheme] = useTheme();

  //handle theme
  const handleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return (
    <div className="home-container" id="home">
      {/* Theme Toggle */}
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? <BsFillMoonStarsFill size={30} /> : <BsFillSunFill size={30} />}
      </div>

      {/* Home Content */}
      <div className="container home-content">
        <Fade direction="right" triggerOnce>
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["Full Stack Developer!", "MERN Stack Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=7542928264"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a
              className='btn btn-cv'
              href={Resume}
              download='Ankush_Raj.pdf'
            >
              My Resume
            </a>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Home;
