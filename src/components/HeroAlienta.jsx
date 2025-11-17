
import facebookLogo from "../assets/facebook_logo_button.png";
import instagramLogo from "../assets/instagram_logo_button.png";
import youtubeLogo from "../assets/youtube_logo_button.png";
import usaLogo from "../assets/usa_logo.png";
import peruLogo from "../assets/peru_logo.png";
import mainPresentation from "../assets/main_presentacion.jpg";
import AlientaPeruLogo from "../assets/alientaPeruanoLogo.png";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function HeroAlienta() {
  const [open, setOpen] = useState(false);
  return (
    <div
      id="alienta-banner"
      className="w-full h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${mainPresentation})` }}
    >
      <div className="w-full flex h-10 bg-gradient-to-r from-black/100 via-black/80 to-transparent">
          {/* first half */}
        <div id="alienta-banner" className="w-[50%] flex justify-start items-center gap-6 py-4  pl-3">
          <img
            src={facebookLogo}
            alt="Facebook"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />
          <img
            src={instagramLogo}
            alt="Instagram"
            className="w-6 h-6 cursor-pointer hover:scale-110 transition"
          />
          <img src={youtubeLogo} alt="YouTube" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
        </div>
        {/* second half */}
        <div id="alienta-banner" className="w-[50%] flex justify-end items-center gap-6 py-4  pr-3">
          <img
            src={peruLogo}
            alt="Facebook"
            className="w-10 h-10   transition"
          />
          <a href="#">Español</a>
          <img
            src={usaLogo}
            alt="Instagram"
            className="w-10 h-10   transition"
          />
          <a href="#">English</a>
        </div>
      </div>
        <div className="w-full flex justify-between items-center h-40 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent px-6 py-4">
      {/* Logo a la izquierda */}
      <img
        src={AlientaPeruLogo}
        alt="alientaPeruLogo"
        className="w-80 h-60 ml-3 transition mt-2"
      />

      {/* Links en desktop */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#quienes" className="text-white cursor-pointer hover:scale-110 transition">Quienes Somos</a>
        <a href="#contenido" className="text-white cursor-pointer hover:scale-110 transition">Contenido</a>
        <a href="#historia" className="text-white cursor-pointer hover:scale-110 transition">Nuestra Historia</a>
        <a href="#noticias" className="text-white cursor-pointer hover:scale-110 transition">Noticias</a>
        <a href="#contacto" className="text-white cursor-pointer hover:scale-110 transition">Contáctanos</a>
        <a href="#tienda" className="text-white cursor-pointer hover:scale-110 transition">Tienda</a>
        <button className="bg-red-600 text-white font-bold px-4 py-2 rounded-full cursor-pointer hover:scale-110 transform-gpu transition">
          Dona ahora
        </button>
      </div>

      {/* Botón hamburguesa en móvil */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setOpen(!open)} className="text-white focus:outline-none">
          {open ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Menú desplegable en móvil */}
      {open && (
        <div className="absolute top-20 right-0 w-2/3 bg-blue-950 text-white flex flex-col items-start gap-4 p-6 md:hidden shadow-lg">
          {/* Botón para cerrar */}
          <button
            onClick={() => setOpen(false)}
            className="self-end text-white mb-4 focus:outline-none"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>
          <a href="#quienes" className="cursor-pointer hover:scale-105 transition">Quienes Somos</a>
          <a href="#contenido" className="cursor-pointer hover:scale-105 transition">Contenido</a>
          <a href="#historia" className="cursor-pointer hover:scale-105 transition">Nuestra Historia</a>
          <a href="#noticias" className="cursor-pointer hover:scale-105 transition">Noticias</a>
          <a href="#contacto" className="cursor-pointer hover:scale-105 transition">Contáctanos</a>
          <a href="#tienda" className="cursor-pointer hover:scale-105 transition">Tienda</a>
          <button className="bg-red-600 text-white font-bold px-4 py-2 rounded-full cursor-pointer hover:scale-105 transform-gpu transition">
            Dona ahora
          </button>
        </div>
      )}
    </div>





    </div>


  );
}
