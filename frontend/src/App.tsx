import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section";
import { SECTIONS } from "./config/sections";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Project from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      {/* HOME (implicit) */}
      <Section id="home">
        <Home />
      </Section>

      {/* ABOUT */}
      <Section id="about">
        <About />
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience">
        <Experience />
      </Section>

      {/* Projects */}
      <Section id="projects">
        <Project />
      </Section>

      {/* SKILLS */}
      <Section id="skills">
        <Skills />
      </Section>

      {/* EDUCATION */}
      <Section id="education">
        <Education />
      </Section>

      {/* ACHIEVEMENTS */}
      <Section id="achievements">
        <Achievements />
      </Section> 

      {/* CONTACT */}
      <Section id="contact">
        <Contact />
      </Section>
      
      {/* Placeholder sections */}
      {SECTIONS.filter(s => s.id !== "about").map(section => (
        <Section key={section.id} id={section.id} />
      ))}

      <Footer />
    </>
  );
}

export default App;
