import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import heroAlienta from "./src/locales/heroAlienta.json";
import quienesSomos from "./src/locales/quienesSomos.json"; 
import donacion from "./src/locales/donacion.json";


i18n.use(initReactI18next).init({
  resources: {
    es: {
      heroAlienta: heroAlienta.es,
      quienesSomos: quienesSomos.es,
      donacion: donacion.es,
    },
    en: {
      heroAlienta: heroAlienta.en,
      quienesSomos: quienesSomos.en,
      donacion: donacion.en
    },
  },
  lng: "es",
  fallbackLng: "en",
  ns: ["heroAlienta", "quienesSomos", "donacion"], // namespaces disponibles
  defaultNS: "heroAlienta", // namespace por defecto
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
