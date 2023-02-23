import { useState } from "react";
import { Welcome } from "./components/Welcome";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactUs } from "./components/ContactSection";
import { SkillsSection } from "./components/SkillsSection";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center overflow-x-hidden font-['Raleway']">
      <Welcome />
      <ProjectsSection />
      <SkillsSection />
      <ContactUs />
    </div>
  );
}

export default App;
