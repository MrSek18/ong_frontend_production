import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useTranslation} from "react-i18next";
import facebookLogo from "../assets/facebook_logo_button.png";
import instagramLogo from "../assets/instagram_logo_button.png";
import youtubeLogo from "../assets/youtube_logo_button.png";
import tiktokLogo from "../assets/tiktok_logo_button.png";
import usaLogo from "../assets/usa_logo.png";
import peruLogo from "../assets/peru_logo.png";
import AlientaPeruano from "../assets/alientaPeruanoLogo.png";
import i18n from "i18next";




export default function Header( { className = "" } ) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <header className={`w-full flex flex-col ${className}`}>
      {/* Barra superior: redes + idiomas */}
      <div className="w-full flex flex-row h-auto bg-gradient-to-r  from-black/100 to-transparent">
        {/* first half */}
        <div className="flex flex-shrink-0 basis-1/3 justify-start items-center gap-2 py-2 pl-2">
          <img src={facebookLogo} alt="Facebook" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
          <img src={instagramLogo} alt="Instagram" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
          <img src={youtubeLogo} alt="YouTube" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
          <img src={tiktokLogo} alt="YouTube" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
        </div>

        {/* second half */}

        <div className="flex flex-grow basis-2/3 justify-end items-center gap-4 py-2 pr-2">
          {/* Español */}
          <div 
            onClick={() => i18n.changeLanguage("es")} 
            className="cursor-pointer flex items-center gap-2"
          >
            <img src={peruLogo} alt="Peru" className="w-8 h-8 transition" />
            <span className="text-white text-sm sm:text-base">Español</span>
          </div>

          {/* Inglés */}
          <div 
            onClick={() => i18n.changeLanguage("en")} 
            className="cursor-pointer flex items-center gap-2"
          >
            <img src={usaLogo} alt="USA" className="w-8 h-8 transition" />
            <span className="text-white text-sm sm:text-base">English</span>
          </div>
        </div>

      </div>

      {/* Navbar principal */}
      <div className="w-full flex justify-around items-center h-25 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent px-6 py-4 relative">
        {/* Logo a la izquierda */}
        <img
          src={AlientaPeruano}
          alt="alientaPeruLogo"
          className="w-40 h-20 sm:w-40 sm:h-20 transition"
        />

        {/* Links en desktop */}
        <nav className="hidden [@media(min-width:950px)]:flex items-center gap-6">
          <Link to="/" className="text-white cursor-pointer hover:scale-110 transition">
            {t("nav.home")}
          </Link>
          <Link to="/quienesSomos" className="text-white cursor-pointer hover:scale-110 transition">
            {t("nav.about")}
          </Link>

          {/* Mostrar solo en "/" */}
          {location.pathname === "/" && (
            <>
              <a href="#historia" className="text-white cursor-pointer hover:scale-110 transition">
                {t("nav.history")}
              </a>
              <a href="#contacto" className="text-white cursor-pointer hover:scale-110 transition">
                {t("nav.contact")}
              </a>
            </>
          )}

          <Link
            to="/donaciones"
            className="bg-red-600 text-white px-4 py-2 rounded-full cursor-pointer hover:scale-110 transform-gpu transition"
          >
            {t("nav.donate")}
          </Link>
        </nav>

        {/* Botón hamburguesa en móvil */}
        <div className="flex items-center [@media(min-width:950px)]:hidden">
          <button onClick={() => setOpen(!open)} className="text-white focus:outline-none">
            {open ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>

        {/* Menú desplegable en móvil */}
        {open && (
          <div className="absolute top-30 right-10 w-auto bg-blue-950 text-white flex flex-col items-start gap-4 p-6 [@media(min-width:950px)]:hidden shadow-lg z-50">
            <button onClick={() => setOpen(false)} className="self-end text-white mb-2 focus:outline-none">
              <XMarkIcon className="w-8 h-8" />
            </button>

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-white cursor-pointer hover:scale-110 transition"
            >
              Contenido
            </Link>

            <Link
              to="/quienesSomos"
              onClick={() => setOpen(false)}
              className="text-white cursor-pointer hover:scale-110 transition"
            >
              Quienes Somos
            </Link>

            {/* Mostrar solo en "/" */}
            {location.pathname === "/" && (
              <>
                <a href="#historia" className="cursor-pointer hover:scale-105 transition">
                  Nuestra Historia
                </a>
                <a href="#contacto" className="cursor-pointer hover:scale-105 transition">
                  Contáctanos
                </a>
              </>
            )}

            <Link
              to="/donaciones"
              className="bg-red-600 text-white px-4 py-2 rounded-full cursor-pointer hover:scale-110 transform-gpu transition"
            >
              Dona ahora
            </Link>
          </div>
        )}
      </div>
  
    </header>
  );
}
