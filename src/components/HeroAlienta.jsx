
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
import icono5 from "../assets/ic5.png";
import icono6 from "../assets/ic6.png";
import icono7 from "../assets/ic7.png";
import icono8 from "../assets/ic8.png";
import n01 from "../assets/azul01.png";
import n02 from "../assets/azul02.png";
import n03 from "../assets/azul03.png";
import n04 from "../assets/azul04.png";
import imgSection3 from "../assets/img_3.png";
import imgSection4 from "../assets/img_4.png";
import checkSection5 from "../assets/check.png"
import img1Section6 from "../assets/img_6.png";
import img2Section6 from "../assets/img_7.png";
import img3Section6 from "../assets/img_8.png";
import imgSection7 from "../assets/ic11.png";
import n01White from "../assets/num_01.png";
import n02White from "../assets/num_02.png";


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
      <h1 className="bg-red-500 text-white text-4xl text-center p-4">Pagina en desarrollo</h1>
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
          className={`w-auto h-auto absolute bottom-10 left-10 rounded-3xl bg-blue-950/80 backdrop-blur-sm p-10 text-white shadow-xl text-left transition-all duration-[2000ms] ease-in-out transform ${
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
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-10 gap-6 ">
        <h1 className="text-5xl">¿Por qué ALIENTA PERUANO?</h1>
        
        <ul className="text-left lg:mr-20 list-disc list-inside text-2xl text-[#231f20]">
          <li>Porque el fútbol puede salvar una vida.</li>
          <li>Muchos niños llegan sin dinero, sin comida y sin nadie que los apoye.</li>
          <li>Los recibimos con lo poco que tenemos, porque creemos en ellos más que nadie.</li>
        </ul>

        <div id="Justificacion-sec-1"
        className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center mt-10 ">
            {/* contendio sec 1 */}
            <div className="w-full lg:w-[65%] h-full lg:absolute lg:left-0 lg:top-0 bg-blue-950 clip-inverted-flag ">
              <h1 className="text-white text-center lg:text-left text-2xl mt-3 ">Les brindamos:</h1>
              <div className="flex flex-col w-full h-full items-center justify-center gap-4 p-10 ">
                {/* Fila superior */}
                <div className="flex flex-col sm:flex-row w-full md:w-full h-auto gap-4  ">
                  <div className="flex flex-col sm:flex-row w-full lg:w-1/2 items-center justify-left gap-4 md-gap-0">
                    <img src={icono1} alt="" className="w-20 h-auto" />
                    <p className="text-white ml-4 text-left text-xl">
                      Entrenamiento de futbol personalizado
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row w-full lg:w-1/2 items-center justify-left gap-4 md-gap-0">
                    <img src={icono3} alt="" className="w-30 h-auto" />
                    <div className="flex flex-col 2xl:flex-row">
                       <p className="text-white text-left text-xl">
                        Suplementacion   
                      </p>
                      <p className="text-white text-left text-xl">
                        alimenticia
                      </p>
                    </div>
                   
                  </div>
                </div>
                {/* Fila inferior */}
                <div className="flex flex-col sm:flex-row w-full md:w-full h-auto gap-4 ">
                  <div className="flex flex-col sm:flex-row w-full lg:w-1/2 items-center justify-left p-4 gap-4 md-gap-0">
                    <img src={icono2} alt="" className="w-30 h-auto"/>
                    <p className="text-white ml-4 text-left text-xl">Asitencia medica y psicológica</p>
                  </div>
                  <div className="flex flex-col sm:flex-row w-full lg:w-1/2 items-center justify-left p-4 gap-4 md-gap-0">
                    <img src={icono4} alt="" className="w-30 h-auto"/>
                    <p className="text-white ml-4 text-left text-xl">Apoyo educativo y emocional</p>
                  </div>
                </div>
                
              </div>
              
            </div>
            {/* Delimitador */}
            <div className="hidden lg:block w-1/2 h-auto "></div>
            {/* img*/} 
            <div className="w-full lg:flex-1 flex justify-center lg:justify-end h-auto lg:h-full  lg:mt-0">
              <img
                src={section1Img}
                alt="section1"
                className="w-full lg:h-96"
              />
            </div>
        </div>

      </div>
      <div id="Section-2"
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-10 ">
        <div className="w-2/4 ">
          <h1 className="text-5xl">Nuestra Realidad</h1>
          <h2 className="text-left text-3xl ml-3 mt-3 mb-2" >¿Qué enfrentamos?</h2>
          <p className="text-left text-2xl text-[#231f20]">Trabajamos con niños de zonas altamente vulnerables:</p>
        </div>
        
        <div id="Justificacion-sec-2"
        className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center mt-10">
            {/* contendio sec 2 */}
            <div className="w-full h-auto bg-white p-10 ">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-full gap-4 ">
                {/* Fila*/}
                
                <div className="flex flex-col h-full items-center justify-center p-10 bg-blue-950">
                  <img src={icono5} alt="" className="w-30 h-auto h-auto mb-2"/>
                  <p className="text-white ml-4 text-center text-xl ">Violencia, drogas y pandillaje</p>
                </div>
                <div className="flex flex-col h-full items-center justify-center p-10 bg-blue-950">
                  <img src={icono6} alt="" className="w-30 h-auto h-auto mb-2"/>
                  <p className="text-white ml-4 text-center text-xl ">Falta de acceso a educacion y salud</p>
                </div>
                <div className="flex flex-col h-full items-center justify-center p-10 bg-blue-950">
                  <img src={icono7} alt="" className="w-30 h-auto h-auto mb-2"/>
                  <p className="text-white ml-4 text-center text-xl ">Pobreza extremay desnutricion</p>
                </div>

                <div className="flex flex-col h-full items-center justify-center p-10 bg-blue-950">
                  <img src={icono8} alt="" className="w-30 h-auto h-auto mb-2"/>
                  <p className="text-white ml-4 text-center text-xl ">Ausencia de apoyo familiar y oportunidades</p>
                </div>
              </div>
            </div>
          
            
        </div>

      </div>
      <div id="Section-3 "
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-10">
        <div className="w-2/4">
          <h1 className="text-5xl">Lo que nos limita</h1>
        </div>
        
        <div
          id="Justificacion-sec-3"
          className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center mt-10 border-2 border-red-500"
        >
          {/* img */}
          <div
            className="w-full lg:w-1/2 h-110 bg-blue-950 sec3-shape-img-form order-2 lg:order-1"
            style={{
              backgroundImage: `url(${imgSection3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* right contenedor */}
          <div className="flex flex-col w-full lg:w-1/2 h-auto border-2 border-green-500 gap-y-4 text-3xl order-1 lg:order-2 text-[#231f20]">
            <div className="flex w-full h-auto border-b-2 border-red-500 gap-4 ">
              <img src={n01} alt="" className="w-15 h-15" />
              <h1 className="text-left">No contamos con financiamiento constante.</h1>
            </div>
            <div className="flex w-full h-auto border-b-2 border-red-500 gap-4">
              <img src={n02} alt="" className="w-15 h-15" />
              <h1 className="text-left">Muchos niños no pueden pagar ni el transporte.</h1>
            </div>
            <div className="flex w-full h-auto border-b-2 border-red-500 gap-4">
              <img src={n03} alt="" className="w-15 h-15" />
              <h1 className="text-left">
                No tenemos infraestructura adecuada (canchas, gimnasio, nutrición estable).
              </h1>
            </div>
            <div className="flex w-full h-auto border-b-2 border-red-500 gap-4">
              <img src={n04} alt="" className="w-15 h-15" />
              <h1 className="text-left">
                Necesitamos recursos para ofrecer una formación de calidad
              </h1>
            </div>
          </div>
        </div>


      </div>
      <div id="Section-4 "
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-10">
        <div className="w-2/4 flex flex-col gap-4">
          <h1 className="text-5xl">Lo que necesitamos</h1>
          <p className="text-[#231f20] text-2xl">Aliados con corazón y visión</p>
        </div>
        
        <div
          id="Justificacion-sec-4"
          className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center mt-10 border-2 border-red-500"
        >
          {/* right contenedor */}
          <div className="flex flex-col w-full lg:w-1/2 h-auto border-2 border-green-500 gap-y-4 text-3xl text-[#231f20]">
            <div className="flex w-full h-auto border-b-2 border-red-500 gap-4">
              <img src={n01} alt="" className="w-15 h-15" />
              <h1 className="text-left">
                Empresas y personas que apoyen con financiamiento o productos.
              </h1>
            </div>
            <div className="flex w-full h-auto border-b-2 border-red-500 gap-4">
              <img src={n02} alt="" className="w-15 h-15" />
              <h1 className="text-left">
                Voluntarios, entrenadores, médicos, psicólogos, docentes.
              </h1>
            </div>
            <div className="flex w-full h-auto border-b-2 border-red-500 gap-4">
              <img src={n03} alt="" className="w-15 h-15" />
              <h1 className="text-left">
                Apadrinamiento de niños o donaciones mensuales
              </h1>
            </div>
            <div className="flex w-full h-auto border-b-2 border-red-500 gap-4">
              <img src={n04} alt="" className="w-15 h-15" />
              <h1 className="text-left">Difusión de nuestra causa</h1>
            </div>
          </div>

          {/* img */}
          <div
            className="w-full lg:w-1/2 h-110 bg-blue-950 sec4-shape-img-form"
            style={{
              backgroundImage: `url(${imgSection4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>


      </div>
      <div id="Section-5 "
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-10 border-2 border-green-500">
        
        {/* img */}
        <div className="flex w-full h-100 border-b-10 border-blue-950 bg-green-500 items-center justify-center">
          <h1 className="text-7xl text-white">Imagen faltante</h1>
        </div>

        {/* right content */}
        <div className="w-full h-auto flex flex-col lg:flex-row ">
          <div className="flex h-50 w-full lg:w-1/2 border-2 border-red-600 items-center justify-center">
            <h1 className="text-7xl">Impacto real</h1>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 h-auto gap-y-4 text-lg text-[#231f20] bg-blue-950 text-white ">
            <div className="flex w-full h-auto gap-4 border-2 border-green-500">
              <img src={checkSection5} alt="" className="w-10 h-10" />
              <h1 className="text-left border-2 border-green-500">
                Empresas y personas que apoyen con financiamiento o productos.
              </h1>
            </div>
            <div className="flex w-full h-auto border-b-2 border-red-500 gap-4">
              <img src={checkSection5} alt="" className="w-10 h-10" />
              <h1 className="text-left">
                Voluntarios, entrenadores, médicos, psicólogos, docentes.
              </h1>
            </div>
            <div className="flex w-full h-auto border-b-2 border-red-500 gap-4">
              <img src={checkSection5} alt="" className="w-10 h-10" />
              <h1 className="text-left">
                Apadrinamiento de niños o donaciones mensuales
              </h1>
            </div>
            <div className="flex w-full h-auto border-b-2 border-red-500 gap-4">
              <img src={checkSection5} alt="" className="w-10 h-10" />
              <h1 className="text-left">Difusión de nuestra causa</h1>
            </div>
          </div>
        </div>

      </div>
      <div id="Section-6 "
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-10 border-2 border-green-500">

          <div className="w-full h-auto">
            <h1 className="text-5xl">Público objetivo</h1>
          </div> 
            
          <div className="w-full flex h-auto gap-4 p-10">
            <div className="h-auto w-full lg:w-1/3 border-2 border-red-600">
               <div className="flex h-auto w-full justify-center flex-col items-center">
                  <img src={img1Section6} alt="" className="h-70 w-2/3"/>
                  <div className="flex w-2/4 h-10 bg-blue-950 text-white items-center justify-center ">
                    <h1 className="text-2xl text-center">Primario</h1>
                  </div>
                  <p className="text-[#231f20] text-xl">Niños de entre 8 y 17 años con talento futbolístico, en contextos de vulnerabilidad</p>
               </div>
            </div>
            <div className="h-auto w-full lg:w-1/3 border-2 border-red-600">
               <div className="flex h-auto w-full justify-center flex-col items-center">
                  <img src={img2Section6} alt="" className="h-70 w-2/3"/>
                  <div className="flex w-2/4 h-10 bg-blue-950 text-white items-center justify-center ">
                    <h1 className="text-2xl text-center">Secundario</h1>
                  </div>
                  <p className="text-[#231f20] text-xl">Padres o tutores de los niños</p>
               </div>
            </div>
            <div className="h-auto w-full lg:w-1/3 border-2 border-red-600">
               <div className="flex h-auto w-full justify-center flex-col items-center">
                  <img src={img3Section6} alt="" className="h-70 w-2/3"/>
                  <div className="flex w-2/4 h-10 bg-blue-950 text-white items-center justify-center ">
                    <h1 className="text-2xl text-center">Terciario (aliados)</h1>
                  </div>
                  <p className="text-[#231f20] text-xl">
                      Empresas privadas, instituciones educativas, medios de comunicación,
                      entrenadores profesionales, figuras publicas del futbol.
                  </p>
               </div>
            </div>
          </div>


      </div>
      <div id="Section-7 "
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-10 border-2 border-green-500">

          <div className="w-full h-auto">
            <h1 className="text-5xl">Análisis de competencia</h1>
          </div> 
            
        <div
          id="Justificacion-sec-4"
          className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center mt-10 border-2 border-red-500 items-stretch"
        >
          {/* right contenedor */}
          <div className="flex flex-col w-full h-1/2 lg:w-1/2 h-auto border-2 border-green-500 bg-blue-950 gap-y-4 text-xl text-white pr-20 pl-20 justify-center items-center">
            <div className="flex w-full h-auto border-b-2 border-red-500 gap-4 mb-4 pb-3">
              <img src={n01White} alt="" className="w-13 h-13 " />
              <div className="flex flex-col gap-y-4">
                <h1 className="text-left w-full">
                Escuelas de fútbol tradicionales:
                </h1>
                <p className="text-left">Se enfocan solo en la técnica. No abordan nutrición, psicología ni educación formal</p>
              </div>
              
            </div>
            <div className="flex w-full h-auto border-b-2 border-red-500 gap-4 mb-4 pb-3">
              <img src={n02White} alt="" className="w-13 h-13" />
              <div className="flex flex-col gap-y-4">
                <h1 className="text-left w-full">
                Academias profesionales privadas:
                </h1>
                <p className="text-left">Costosas, inaccesibles para niños de bajos recursos</p>
              </div>
             
            </div>
            <div className="flex w-full h-auto border-b-2 border-red-500 gap-4 pb-3">
              <img src={n03} alt="" className="w-13 h-13" />
              <div className="flex flex-col gap-y-4">
                <h1 className="text-left w-full">
                  ONGs deportivas:
                </h1>
                <p className="text-left">Existen, pero pocas con enfoque profesionalizante</p>
              </div>
            </div>
            
          </div>

          {/* img */}
          <div
            className="flex w-full lg:w-1/2 h-110 border-2 border-red-500 justify-center items-center"
            style={{
              backgroundImage: `url(${imgSection7})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          > 
            <div className="flex flex-col w-[80%] lg:w-[60%] border-2 border-red-500 text-white">
              <h1 className="text-center text-4xl mb-3">Diferenciador clave</h1>
              <p className="text-left text-3xl">ALIENTA PERUANO no solo entrena, forma integralmente para el alto rendimiento y la vida</p>
            </div>
          </div>
        </div>


      </div>
    </div>

        


  );
}
