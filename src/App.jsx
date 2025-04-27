import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);

  const ScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behaviour: "smooth" });
  };
  const ScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behaviour: "smooth" });
  };
  const ScrollToSkill = () => {
    skillRef.current?.scrollIntoView({ behaviour: "smooth" });
  };
  const ScrollToProject = () => {
    projectRef.current?.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <>
      <Navbar
        ScrollToContact={ScrollToContact}
        ScrollToAbout={ScrollToAbout}
        ScrollToSkill={ScrollToSkill}
        ScrollToProject={ScrollToProject}
      />
      <Hero ScrollToProject={ScrollToProject} />
      <About aboutRef={aboutRef} ScrollToProject={ScrollToProject} />
      <Skill skillRef={skillRef} />
      <Projects projectRef={projectRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
};

export default App;
