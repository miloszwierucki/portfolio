import { useState } from "react";
import { ProjectsSection } from "./components/ProjectsSection";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center items-center overflow-x-hidden">
      <h1 className="text-5xl font-bold mb-16">Projects</h1>
      <ProjectsSection />
    </div>
  );
}

export default App;
