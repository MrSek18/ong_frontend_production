
// import mainPresentation from "../assets/main_presentacion.jpg";
import mainPresentation from "../assets/imgMainBanner.png";

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
import imgSection5 from "../assets/img_5.png";
import checkSection5 from "../assets/check.png"
import img1Section6 from "../assets/img_6.png";
import img2Section6 from "../assets/img_7.png";
import img3Section6 from "../assets/img_8.png";
import imgSection7 from "../assets/ic11.png";
import imgSection8 from "../assets/img_historia.png";
import imgSection9 from "../assets/img_contacto.png";
import logoAlientaBlanco from "../assets/logoAlientaBlanco.png";
import n01White from "../assets/num_01.png";
import n02White from "../assets/num_02.png";
import Header from "../components/Header.jsx";

import fcLogoContacto from "../assets/facebookLogoContacto.png";
import igLogoContacto from "../assets/instagramLogoContacto.png";
import ytLogoContacto from "../assets/youtubeLogoContacto.png";
import ttLogoContacto from "../assets/tiktokLogoContacto.png";


import { useState, useEffect } from "react";

export default function HeroAlienta() {
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
        className="w-full h-screen bg-cover bg-center bg-no-repeat  bg-blend-multiply flex flex-col"
        style={{ backgroundImage: `url(${mainPresentation})` }}
      >
        <Header />

        <div className="flex flex-col md:flex-row flex-grow ">

          <div className="flex justify-start items-end flex-grow md:ml-5 md:mb-10">
            <div
              id="tarjetaDonacionDinamica"
              className={`relative z-10 w-full max-w-md rounded-3xl bg-blue-950/80 backdrop-blur-sm pr-10 pl-10 pt-5 pb-5 text-white shadow-xl text-left transition-all duration-[2000ms] ease-in-out transform ${
                hiding ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
              }`}
            >
              <h1 className="ml-10  text-2xl sm:text-3xl mb-2 leading-tight">ALIENTA PERUANO</h1>
              <p className="ml-10  text-xl sm:text-2xl leading-relaxed mb-4">
                no solo entrena,<br />
                forma integralmente para el alto rendimiento<br />
                y la vida.
              </p>
              {/* Ícono absoluto */}
              <img
                src={hideButton}
                alt="hideButton"
                onClick={handleHide}
                className="absolute top-20 left-4 w-10 h-10 cursor-pointer hover:scale-110 transition"
              />
              {/* Footer de la tarjeta */}
                {/* Botón absoluto */}
              <button className="absolute bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition cursor-pointer">
                Dona ahora
              </button>

              
            </div>
          </div>

          <div className="flex justify-end items-end flex-grow">
            <h1 className="text-white text-3xl text-right ">
              "Transformando vidas con talento <br /> a través del fútbol"
            </h1>
          </div>
          
        </div>
        
        

        
        
      </div>

      {/* Section-1 corregido */}
      <div id="Section-1"
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-10 gap-6 ">
        <h1 className="text-5xl p-5">¿Por qué ALIENTA PERUANO?</h1>
        
        <ul className="text-left lg:mr-20 list-disc list-inside text-2xl text-[#231f20] p-5">
          <li className="mb-3">Porque el fútbol puede salvar una vida.</li>
          <li className="mb-3">Muchos niños llegan sin dinero, sin comida y sin nadie que los apoye.</li>
          <li >Los recibimos con lo poco que tenemos, porque creemos en ellos más que nadie.</li>
        </ul>

        <div id="Justificacion-sec-1"
        className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center mt-10 ">
            {/* contendio sec 1 */}
            <div className="w-full lg:w-[65%] h-full lg:absolute lg:left-0 lg:top-0 bg-blue-950 clip-inverted-flag ">
              <h1 className="text-white text-center lg:text-left text-2xl mt-3 pl-10">Les brindamos:</h1>
              <div className="flex flex-col w-full h-full items-center justify-center gap-4 p-10  ">
                {/* Fila superior */}
                <div className="flex flex-col sm:flex-row w-full md:w-full h-auto gap-4 md:gap-0 ">
                  <div className="flex flex-col sm:flex-row w-full lg:w-1/2 items-center justify-left gap-4 md-gap-0">
                    <img src={icono1} alt="" className="w-20 h-auto " />
                    <p className="text-white text-left text-xl ">
                      Entrenamiento de futbol personalizado
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row w-full lg:w-1/2 items-center justify-left gap-4 md-gap-0">
                    <img src={icono3} alt="" className="w-30 h-auto" />
                       <p className="text-white text-left text-xl md:mr-12">
                        Suplementacion  Alimenticia
                      </p>
                  </div>
                </div>
                {/* Fila inferior */}
                <div className="flex flex-col sm:flex-row w-full md:w-full h-auto gap-4 md:gap-0">
                  <div className="flex flex-col sm:flex-row w-full lg:w-1/2 items-center justify-left  gap-4 md-gap-0 ">
                    <img src={icono2} alt="" className="w-30 h-auto"/>
                    <p className="text-white text-left text-xl ">Asitencia medica y psicológica</p>
                  </div>
                  <div className="flex flex-col sm:flex-row w-full lg:w-1/2 items-center justify-left gap-4 md-gap-0">
                    <img src={icono4} alt="" className="w-30 h-auto"/>
                    <p className="text-white text-left text-xl md:mr-12">Apoyo educativo y emocional</p>
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
          className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center mt-10 "
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
          <div className="flex flex-col w-full lg:w-1/2 h-auto  gap-y-4 text-3xl order-1 lg:order-2 text-[#231f20] p-10">
            <div className="flex w-full h-auto border-b-2 border-blue-950 gap-4 ">
              <img src={n01} alt="" className="w-15 h-15" />
              <h1 className="text-left mb-4">No contamos con financiamiento constante.</h1>
            </div>
            <div className="flex w-full h-auto border-b-2 border-blue-950 gap-4">
              <img src={n02} alt="" className="w-15 h-15" />
              <h1 className="text-left mb-4">Muchos niños no pueden pagar ni el transporte.</h1>
            </div>
            <div className="flex w-full h-auto border-b-2 border-blue-950 gap-4">
              <img src={n03} alt="" className="w-15 h-15" />
              <h1 className="text-left mb-4">
                No tenemos infraestructura adecuada (canchas, gimnasio, nutrición estable).
              </h1>
            </div>
            <div className="flex w-full h-auto gap-4">
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
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-5xl">Lo que necesitamos</h1>
          <p className="text-[#231f20] text-2xl">Aliados con corazón y visión</p>
        </div>
        
        <div
          id="Justificacion-sec-4"
          className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center mt-10 "
        >
          {/* right contenedor */}
          
          <div className="flex flex-col w-full lg:w-1/2 h-auto  gap-y-4 text-3xl text-[#231f20] p-10">
            <h1 className=" text-left text-4xl text-blue-950 mb-4">Buscamos:</h1>
            <div className="flex w-full h-auto border-b-2 border-blue-950 gap-4">
              <img src={n01} alt="" className="w-15 h-15" />
              <h1 className="text-left mb-4">
                Empresas y personas que apoyen con financiamiento o productos.
              </h1>
            </div>
            <div className="flex w-full h-auto border-b-2 border-blue-950 gap-4">
              <img src={n02} alt="" className="w-15 h-15" />
              <h1 className="text-left mb-4">
                Voluntarios, entrenadores, médicos, psicólogos, docentes.
              </h1>
            </div>
            <div className="flex w-full h-auto border-b-2 border-blue-950 gap-4">
              <img src={n03} alt="" className="w-15 h-15" />
              <h1 className="text-left mb-4">
                Apadrinamiento de niños o donaciones mensuales
              </h1>
            </div>
            <div className="flex w-full h-auto  gap-4">
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
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-10">
        
        {/* img */}
        <div className="flex w-full h-100 border-b-10 border-blue-950 bg-green-500 items-center justify-center" 
        style={{
              backgroundImage: `url(${imgSection5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
        </div>

        {/* right content */}
        <div className="w-full h-auto flex flex-col lg:flex-row mt-10">
          <div className="flex h-50 w-full lg:w-1/2  items-center justify-center">
            <h1 className="text-7xl">Impacto real</h1>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 h-auto gap-y-4 text-lg text-[#231f20] bg-blue-950 text-white p-5">
            <div className="flex w-full h-auto gap-4 ">
              <img src={checkSection5} alt="" className="w-10 h-10" />
              <h1 className="text-left ">
                Empresas y personas que apoyen con financiamiento o productos.
              </h1>
            </div>
            <div className="flex w-full h-auto gap-4">
              <img src={checkSection5} alt="" className="w-10 h-10" />
              <h1 className="text-left">
                Voluntarios, entrenadores, médicos, psicólogos, docentes.
              </h1>
            </div>
            <div className="flex w-full h-auto gap-4">
              <img src={checkSection5} alt="" className="w-10 h-10" />
              <h1 className="text-left">
                Apadrinamiento de niños o donaciones mensuales
              </h1>
            </div>
            <div className="flex w-full h-auto gap-4">
              <img src={checkSection5} alt="" className="w-10 h-10" />
              <h1 className="text-left">Difusión de nuestra causa</h1>
            </div>
          </div>
        </div>

      </div>
      <div id="Section-6 "
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-10 ">

          <div className="w-full h-auto">
            <h1 className="text-5xl">Público objetivo</h1>
          </div> 
            
          <div className="w-full grid grid-cols-1 md:grid-cols-3 h-auto gap-4 p-10  ">

            <div className="flex h-auto w-full ">
              
               <div className="relative flex h-auto w-full flex-col items-center">
                  <div className="relative w-auto">
                    <img src={img1Section6} alt="" className="w-full h-auto max-h-96" />

                    {/* Badge en el borde inferior del wrapper */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex h-10 w-2/4 items-center justify-center bg-blue-950 text-white shadow-lg h-auto">
                      <h1 className="text-2xl text-center">Primario</h1>
                    </div>
                  </div>
                  <p className="text-[#231f20] text-xl mt-10">Niños de entre 8 y 17 años con talento futbolístico, en contextos de vulnerabilidad</p>
               </div>

            </div>
            
            <div className="flex h-auto w-full">
              <div className="relative flex h-auto w-full flex-col items-center ">
                {/* Wrapper de imagen + badge */}
                <div className="relative w-auto">
                  <img src={img2Section6} alt="" className="w-full h-auto max-h-96" />

                  {/* Badge en el borde inferior del wrapper */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex h-10 w-2/4 items-center justify-center bg-blue-950 text-white shadow-lg h-auto">
                    <h1 className="text-2xl text-center">Secundario</h1>
                  </div>
                </div>

                {/* Texto debajo */}
                <p className="mt-10 text-xl text-[#231f20]">
                  Padres o tutores de los niños
                </p>
              </div>
            </div>

            <div className="flex h-auto w-full">
              <div className="relative flex h-auto w-full justify-center flex-col items-center ">
                {/* Wrapper de imagen + badge */}
                <div className="relative w-auto">
                  <img src={img3Section6} alt="" className="w-full h-auto max-h-96" />

                  {/* Badge en el borde inferior del wrapper */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex h-10 w-3/4 items-center justify-center bg-blue-950 text-white shadow-lg h-auto">
                    <h1 className="text-2xl text-center">Terciario (aliados)</h1>
                  </div>
                </div>

                {/* Texto debajo */}
                <p className="mt-10 text-xl text-[#231f20]">
                  Empresas privadas, instituciones educativas, medios de comunicación,
                  entrenadores profesionales, figuras públicas del fútbol.
                </p>
              </div>
            </div>

          </div>


      </div>
      <div id="Section-7 "
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-10 ">

          <div className="w-full h-auto">
            <h1 className="text-5xl">Análisis de competencia</h1>
          </div> 
            
        <div
          id="Justificacion-sec-4"
          className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center mt-10 items-stretch"
        >
          {/* right contenedor */}
          <div className="flex flex-col w-full h-1/2 lg:w-1/2 h-auto  bg-blue-950 gap-y-4 text-xl text-white justify-center items-center">
            <div className="flex w-[60%] md:w-[60%] h-auto border-b-2 border-white gap-4 mb-4 pb-3 mt-10">
              <img src={n01White} alt="" className="w-13 h-13 " />
              <div className="flex flex-col gap-y-4">
                <h1 className="text-left w-full">
                Escuelas de fútbol tradicionales:
                </h1>
                <p className="text-left">Se enfocan solo en la técnica. No abordan nutrición, psicología ni educación formal</p>
              </div>
              
            </div>
            <div className="flex w-[60%] md:w-[60%] h-auto border-b-2 border-white gap-4 mb-4 pb-3">
              <img src={n02White} alt="" className="w-13 h-13" />
              <div className="flex flex-col gap-y-4">
                <h1 className="text-left w-full">
                Academias profesionales privadas:
                </h1>
                <p className="text-left">Costosas, inaccesibles para niños de bajos recursos</p>
              </div>
             
            </div>
            <div className="flex w-[60%] md:w-[60%] h-auto gap-4 pb-3  mb-10">
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
            className="flex w-full lg:w-1/2 h-110  justify-center items-center"
            style={{
              backgroundImage: `url(${imgSection7})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          > 
            <div className="flex flex-col w-[70%] sm:w-[60%] text-white">
              <h1 className="text-center text-3xl mb-3">Diferenciador clave</h1>
              <p className="text-left text-2xl">ALIENTA PERUANO no solo entrena, forma integralmente para el alto rendimiento y la vida</p>
            </div>
          </div>
        </div>


      </div>
      <div id="historia"
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-10">
       
        
        <div
          id="Justificacion-sec-8"
          className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center"
        >
          {/* img */}
          <div
            className="w-full lg:w-[75%] h-180 bg-blue-950  order-2 lg:order-1"
            style={{
              backgroundImage: `url(${imgSection8})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
         <div className="hidden lg:flex lg:w-[25%] h-auto bg-red-500 flex items-center justify-center order-1 lg:order-2">

         </div>

          {/* right contenedor */}
          <div className="lg:absolute top-0 right-0 w-full lg:w-1/2 h-full bg-white/80 z-50 flex-col text-[#231f20] p-10">
            <h1 className="text-blue-950 text-5xl">Nuestra Historia</h1>
            <h2 className="text-blue-950 text-2xl">¿Cómo empezó todo?</h2>
            <p className="text-left mt-5 text-lg">ALIENTA PERUANO nació en diciembre de 2015, en San Juan de 
            Lurigancho, gracias al esfuerzo de un grupo de amigos unidos por 
            el amor al fútbol y el deseo de ayudar.
            </p>
            <p className="text-left mt-5 text-lg">Comenzamos con pocos niños en una cancha humilde, pero con 
            un sueño grande: usar el fútbol como herramienta para alejar a 
            los niños de la delincuencia, las drogas, el abandono y la pobreza.
            </p>
            <p className="text-left mt-5 text-lg">Muchos de nuestros niños no cuentan con el apoyo de sus 
            familias, ni los medios para pagar una formación deportiva. Aun 
            así, entrenan con pasión, aunque no tengan recursos 
            económicos, o sin que nadie crea en ellos. Porque para ellos, el 
            fútbol no es solo un deporte, es una oportunidad de vida.
            </p>
            <p className="text-left mt-5 text-lg">Hoy somos una asociación comprometida a transformar futuros, 
            brindando entrenamiento, salud, nutrición, educación y apoyo 
            emocional. Sin embargo, nuestros recursos son limitados y la 
            necesidad es enorme.
            </p>  

          </div>
        </div>


      </div>
      <div id="contacto"
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-10 ">
       
        
        <div className="flex flex-col w-full h-160 md:flex-row"
        style={{
              backgroundImage: `url(${imgSection9})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
          }}>
            <div className="flex flex-col w-full h-[75%] p-5 gap-y-4 md:gap-y-30 text-center md:text-left justify-end md:w-1/2 md:h-full md: md:pl-20 lg:pl-30">
              <div className="flex flex-col w-full h-auto  "> 
                <h1 className="text-white text-5xl  mb-4 " >¡Contactanos!</h1>
                <p className="text-white text-xl ">Únete a nuestro equipo Alienta un sueño</p>
              </div>
              <div className="flex flex-col w-full h-auto gap-y-4 ">
                <h3 className="text-white text-2xl ">Transforma una vida</h3>
                <p className="text-white text-xl  ">Contacto: 999 999 999</p>
                <div className="flex flex-row w-auto gap-4  justify-center md:justify-start">
                  <img src={fcLogoContacto} className="w-7.5 h-9 " />
                  <h1 className="text-xl text-white ">xxxxxxx@alientaperuano</h1>
                </div>
                <div className="flex flex-row w-full gap-4 justify-center md:justify-start">
                  <img src={igLogoContacto} className="w-7.5 h-9 " />
                  <h1 className="text-xl text-white">xxxxxxx@alientaperuano</h1>
                </div>
                <div className="flex flex-row w-full gap-4 justify-center md:justify-start">
                  <img src={ytLogoContacto} className="w-7.5 h-9 " />
                  <h1 className="text-xl text-white">xxxxxxx@alientaperuano</h1>
                </div>
                <div className="flex flex-row w-full gap-4 justify-center md:justify-start">
                  <img src={ttLogoContacto} className="w-7.5 h-9 " />
                  <h1 className="text-xl text-white">xxxxxxx@alientaperuano</h1>
                </div>
              </div>
            </div>

            <div className="flex w-full h-[25%]  justify-center items-end md:w-1/2 md:h-full p-5">
              <img src={logoAlientaBlanco} className="w-80 h-40 " />
            </div>
        </div>


      </div>
    </div>

        


  );
}
