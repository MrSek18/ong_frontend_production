
import facebookLogo from "../assets/facebook_logo_button.png";
import instagramLogo from "../assets/instagram_logo_button.png";
import youtubeLogo from "../assets/youtube_logo_button.png";
import usaLogo from "../assets/usa_logo.png";
import peruLogo from "../assets/peru_logo.png";
import mainPresentation from "../assets/main_presentacion.jpg";
import AlientaPeruLogo from "../assets/alientaPeruanoLogo.png";
import hideButton from "../assets/hideButton.png";
import section1Img from "../assets/img_2.png";
import icono1 from "../assets/ic1.png";
import icono2 from "../assets/ic2.png";
import icono3 from "../assets/ic3.png";
import icono4 from "../assets/ic4.png";

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
    <div className="w-full h-auto overflow-x-hidden">
      <div
        id="alienta-banner"
        className="w-full h-screen bg-cover bg-center bg-no-repeat bg-black/70 bg-blend-multiply"
        style={{ backgroundImage: `url(${mainPresentation})` }}
      >
        <div className="w-full flex flex-wrap h-auto bg-gradient-to-r from-black/100 via-black/80 to-transparent">
          {/* first half */}
          <div className="flex-1 flex justify-start items-center gap-3 py-2 pl-3 min-w-[150px]">
            <img src={facebookLogo} alt="Facebook" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
            <img src={instagramLogo} alt="Instagram" className="w-6 h-6 cursor-pointer hover:scale-110 transition" />
            <img src={youtubeLogo} alt="YouTube" className="w-8 h-8 cursor-pointer hover:scale-110 transition" />
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
          <img src={AlientaPeruLogo} alt="alientaPeruLogo" className="w-80 h-60 ml-3 transition mt-2" />

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
              {open ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
            </button>
          </div>

          {/* Menú desplegable en móvil */}
          {open && (
            <div className="absolute top-20 right-0 w-2/3 bg-blue-950 text-white flex flex-col items-start gap-4 p-6 md:hidden shadow-lg">
              <button onClick={() => setOpen(false)} className="self-end text-white mb-4 focus:outline-none">
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

        <h1 className="absolute bottom-8 right-8 text-white text-3xl text-right">
          "Transformando vidas con talento <br /> a través del fútbol"
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
          <img src={hideButton} alt="hideButton" onClick={handleHide} className="absolute top-20 left-6 w-10 h-10 cursor-pointer hover:scale-110 transition" />
        </div>
      </div>

      {/* Section-1 corregido */}
      <div id="Section-1"
        className="w-full h-screen text-center flex flex-col items-center text-blue-950 mt-10 gap-6 ">
        <h1 className="text-5xl">¿Por qué ALIENTA PERUANO?</h1>
        
        <ul className="text-left mr-40 list-disc list-inside text-2xl">
          <li>Porque el fútbol puede salvar una vida.</li>
          <li>Muchos niños llegan sin dinero, sin comida y sin nadie que los apoye.</li>
          <li>Los recibimos con lo poco que tenemos, porque creemos en ellos más que nadie.</li>
        </ul>

        <div id="Justificacion-sec-1"
        className="relative w-full h-auto flex justify-between items-center border-t-2 border-b-2 border-blue-950 mt-10">
            <div className="w-[60%] h-full bg-blue-950 clip-inverted-flag absolute pl-10 pr-21  pb-10 pt-10 border-2 border-white ">
              <h1 className="text-white text-left text-2xl">Les brindamos:</h1>
              <div className="flex flex-col w-full h-full">
                {/* Fila superior */}
                <div className="flex w-full h-1/2">
                  <div className="w-1/2 h-full border-2 border-white">
                    <img src={icono1} alt="" className="w-5 h-5"/>
                  </div>
                  <div className="w-1/2 h-full border-2 border-white">
                    <img src={icono2} alt="" className="w-30 h-30"/>
                  </div>
                </div>

                {/* Fila inferior */}
                <div className="flex w-full h-1/2">
                  <div className="w-1/2 h-full border-2 border-white">
                    <img src={icono3} alt="" className="w-5 h-5"/>
                  </div>
                  <div className="w-1/2 h-full border-2 border-white">
                    <img src={icono4} alt="" className="w-5 h-5"/>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="w-1/2 h-full "></div>
            <div className="flex-1 flex justify-end h-full">
              <img
                src={section1Img}
                alt="section1"
                className="w-full h-full object-contain "
              />
            </div>
        </div>

      </div>
      <div id="Section-2"
        className="w-full h-screen text-center flex flex-col items-center text-blue-950 mt-10 ">
        <div className="w-2/4 border">
          <h1 className="text-5xl">Nuestra Realidad</h1>
          <h2 className="text-left text-3xl ml-3 mt-3 mb-2" >¿Qué enfrentamos?</h2>
          <p className="text-left text-2xl">Trabajamos con niños de zonas altamente vulnerables</p>
        </div>
        
        <div id="Justificacion-sec-1"
        className="w-full h-96 flex justify-between items-center border-t-2  border-blue-950 mt-10">
            <div>

            </div>
            <div className="flex-1 flex justify-end">
              <img
                src={section1Img}
                alt="section1"
                className="w-150 h-auto object-contain "
              />
            </div>
        </div>

      </div>
    </div>

        


  );
}
