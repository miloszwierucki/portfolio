import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import translationEN from "./en/translation.json";
import projectsEN from "./en/projects.json";
import translationPL from "./pl/translation.json";
import projectsPL from "./pl/projects.json";

const resources = {
  en: {
    translation: { ...translationEN, ...projectsEN },
  },
  pl: {
    translation: { ...translationPL, ...projectsPL },
  },
};

i18n.use(initReactI18next).init({
  defaultNS: "translation",
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
