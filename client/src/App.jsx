import "./App.css";
import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";
import Educations from "./pages/Educations/Educations";
import Project from "./pages/projects/Project";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";

// ⬅ react-reveal हटाया, react-awesome-reveal add किया
import { AttentionSeeker } from "react-awesome-reveal";

import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Educations />
          <Techstack />
          <Project />
          <WorkExp />
          <Contact />
        </div>

        <div className="footer pb-3 ms-3">
          {/* react-reveal Tada → awesome reveal AttentionSeeker */}
          <AttentionSeeker effect="tada">
            <h4 className="text-center">
              Ankush Raj &copy; ankushraj15082005@gmail.com
            </h4>
          </AttentionSeeker>
        </div>
      </div>

      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
