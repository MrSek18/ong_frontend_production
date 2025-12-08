import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        welcome: "Bienvenido a la página",
        donate: "Donar ahora",
        nav: {
          home: "Contenido",
          about: "Quienes Somos",
          history: "Nuestra Hitoria",
          contact: "Contáctanos",
          donate: "Dona ahora"
        }
      },
    },
    en: {
      translation: {
        welcome: "Welcome to the page",
        donate: "Donate now",
        nav: {
          home: "Home",
          about: "About Us",
          history: "our history",
          contact: "Contact Us",
          donate: "Donate now"
        }
      },
    },
  },
  lng: "es", // idioma por defecto
  fallbackLng: "en", // si no encuentra traducción en español, usa inglés
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
