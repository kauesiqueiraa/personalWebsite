
import About from "../../components/About/about";
import Experience from "../../components/Experience/experience";
import Projects2 from "../../components/Projects copy/projects";
import Projects from "../../components/Projects/projects";
import Services from "../../components/Services/services";
import Skills from "../../components/Skills/skills";
import StartHome from "../../components/StartHome/startHome";

export default function Home() {
  return (
    <>
      <StartHome />
      <About />
      <Experience />
      <Projects2 />
      <Projects />
      <Services />
      <Skills />

    </>
  )
}