import { WelcomeSection } from "./Section/WelcomeSection/WelcomeSection";
import { ProjectSection } from "./Section/ProjectSection/ProjectSection";
import { SkillSection } from "./Section/SkillSection/SkillSection";
import { ContactSection } from "./Section/ContactSection/ContactSection";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { useEffect } from "react";
import i18n from "./locales/i18n";

function App() {
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

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
