import { useState } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { WelcomeSection } from "./Section/WelcomeSection/WelcomeSection";
import { ProjectSection } from "./Section/ProjectSection/ProjectSection";
import { SkillSection } from "./Section/SkillSection/SkillSection";
import { ContactSection } from "./Section/ContactSection/ContactSection";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <main className="background w-full font-raleway overflow-hidden">
      <NavBar />
      <WelcomeSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
