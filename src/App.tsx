import { useState } from "react";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactUs } from "./components/ContactSection";

function App() {
  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden">
      <ProjectsSection />
      <ContactUs />
    </div>
  );
}

export default App;
