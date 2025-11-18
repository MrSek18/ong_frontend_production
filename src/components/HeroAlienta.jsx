
import facebookLogo from "../assets/facebook_logo_button.png";
import instagramLogo from "../assets/instagram_logo_button.png";
import youtubeLogo from "../assets/youtube_logo_button.png";
import usaLogo from "../assets/usa_logo.png";
import peruLogo from "../assets/peru_logo.png";
import mainPresentation from "../assets/main_presentacion.jpg";
import AlientaPeruLogo from "../assets/alientaPeruanoLogo.png";
import hideButton from "../assets/hideButton.png";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function HeroAlienta() {
  const [open, setOpen] = useState(false);
  const [hiding, setHiding] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setHiding(false), 100); // delay para activar animación
    return () => clearTimeout(timer);
  }, []);

  const handleHide = () => {
    setHiding(true);
    
  };
  return (
    
    <div
      id="alienta-banner"
      className="w-screen h-screen bg-cover bg-center bg-no-repeat bg-black/70 bg-blend-multiply"
      style={{ backgroundImage: `url(${mainPresentation})` }}
    >
      <div className="w-full flex flex-wrap h-auto bg-gradient-to-r from-black/100 via-black/80 to-transparent">
        {/* first half */}
        <div className="flex-1 flex justify-start items-center gap-3 py-2 pl-3 min-w-[150px]">
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
          <img
            src={youtubeLogo}
            alt="YouTube"
            className="w-8 h-8 cursor-pointer hover:scale-110 transition"
          />
        </div>

        {/* second half */}
        <div className="flex-1 flex justify-end items-center gap-3 py-2 pr-3 min-w-[150px]">
          <img src={peruLogo} alt="Peru" className="w-8 h-8 transition" />
          <a href="#" className="text-white">Español</a>
          <img src={usaLogo} alt="USA" className="w-8 h-8 transition" />
          <a href="#" className="text-white">English</a>
        </div>
      </div>

      <div className="w-full flex justify-around items-center h-40 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent px-6 py-4">
        {/* Logo a la izquierda */}
        <img
          src={AlientaPeruLogo}
          alt="alientaPeruLogo"
          className="w-80 h-60 ml-3 transition mt-2 "
        />


        {/* Links en desktop */}
        <div className="hidden [@media(min-width:1090px)]:flex items-center gap-6">
          <a href="#quienes" className="text-white cursor-pointer hover:scale-110 transition">Quienes Somos</a>
          <a href="#contenido" className="text-white cursor-pointer hover:scale-110 transition">Contenido</a>
          <a href="#historia" className="text-white cursor-pointer hover:scale-110 transition">Nuestra Historia</a>
          <a href="#noticias" className="text-white cursor-pointer hover:scale-110 transition">Noticias</a>
          <a href="#contacto" className="text-white cursor-pointer hover:scale-110 transition">Contáctanos</a>
          <a href="#tienda" className="text-white cursor-pointer hover:scale-110 transition">Tienda</a>
          <button className="bg-red-600 text-white px-4 py-2 rounded-full cursor-pointer hover:scale-110 transform-gpu transition">
            Dona ahora
          </button>
        </div>

        {/* Botón hamburguesa en móvil */}
        <div className="flex items-center [@media(min-width:1090px)]:hidden">
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
            <button className="bg-red-600 text-white px-4 py-2 rounded-full cursor-pointer hover:scale-105 transform-gpu transition">
              Dona ahora
            </button>
          </div>
        )}


      </div>
      <h1 className="absolute bottom-30 right-30 text-white text-3xl text-right" >
        "Transformando vidas con talento <br />
        a través del fútbol"
      </h1>
      
        <div
          className={`w-[420px] h-auto absolute bottom-10 left-10 rounded-3xl bg-blue-950/80 backdrop-blur-sm p-10 text-white shadow-xl text-left transition-all duration-[2000ms] ease-in-out transform ${
            hiding ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <h1 className="ml-12 text-3xl mb-2 leading-tight">ALIENTA PERUANO</h1>
          <p className="ml-12 text-2xl leading-relaxed mb-4">
            no solo entrena,<br />
            forma integralmente para el alto rendimiento<br />
            y la vida.
          </p>
          <button className="absolute bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition cursor-pointer mb-4">
            Dona ahora
          </button>
          <img
            src={hideButton}
            alt="hideButton"
            onClick={handleHide}
            className="absolute top-20 left-6 w-10 h-10 cursor-pointer hover:scale-110 transition"
          />
        </div>
    
      
    </div>


  );
}
