// src/pages/QuienesSomos.jsx
import Header from "../components/Header.jsx";
import imgsec1QuienesSomos from "../assets/imgsec1QuienesSomos.webp";
import imgsec2QuienesSomos from "../assets/imgsec2QuienesSomos.webp";
import imgsec3QuienesSomos from "../assets/imgsec3QuienesSomos.webp";
import imgsec4QuienesSomos from "../assets/imgsec4QuienesSomos.webp";
import imgsec5QuienesSomos from "../assets/imgsec5QuienesSomos.webp";
import checkSection3 from "../assets/check.png"
import n01White from "../assets/num_01.png";
import n02White from "../assets/num_02.png";


export default function QuienesSomos() {
  return (
    <div className="w-full h-auto overflow-x-hidden ">
      <div className="w-full h-auto  flex flex-col ">
        <div className="bg-blue-500">
            <Header />
        </div>
        
        <div id="Seccion1" className="flex flex-col lg:flex-row flex-grow">
            <div className="flex justify-center items-center flex-grow  lg:w-[50%] w-full pl-10 pr-10">
                <div className="flex flex-col mb-10 mt-10">
                    <h1 className="text-5xl text-blue-950 w-full text-center mb-10">Quienes Somos</h1>
                    <p className="text-2xl text-[#231f20] mb-5">Somos una asociación sin fines de lucro que nació del 
                    corazón de un grupo de amigos con una pasión en común: el 
                    fútbol y el deseo de ayudar a niños en situación de 
                    vulnerabilidad.</p>
                    <p className="text-2xl text-[#231f20] mb-5">
                    Trabajamos en San Juan de Lurigancho formando no solo 
                    futbolistas, sino seres humanos con valores, disciplina y 
                    esperanza.   
                    </p>
                    <p className="text-2xl text-[#231f20] mb-5">
                    Creemos que el fútbol puede ser una herramienta poderosa 
                    para transformar vidas y abrir caminos donde no los hay.   
                    </p>
                    <p className="text-2xl text-[#231f20]">
                    Por eso buscamos aliados que crean, como nosotros, que 
                    un balón puede cambiar un destino.   
                    </p>
                </div>
                

            </div>
            
            <div
            className="w-full lg:w-1/2 h-160 bg-blue-950 "
            style={{
                backgroundImage: `url(${imgsec1QuienesSomos})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            ></div>
        </div>
        
      </div>
      {/* Sección con columnas */}
      <div id="Section-2" className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-10 gap-6 ">
        <div
            id="Justificacion-sec-2"
            className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center mt-10 "
        >
            {/* img */}
            <div
            className="w-full lg:w-1/2 h-160 bg-blue-950  order-2 lg:order-1"
            style={{
                backgroundImage: `url(${imgsec2QuienesSomos})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            ></div>

            {/* right contenedor */}
            <div className="flex flex-col w-full lg:w-1/2 h-auto  gap-y-10 text-xl order-1 lg:order-2 text-[#231f20] p-10 items-end m-10">
                <div className="flex w-full h-auto border-2 border-blue-950 gap-4 p-10 rounded-4xl relative">
                    <h1 className="text-left">Formar integralmente a niños con talento futbolístico en 
                    contextos vulnerables, brindándoles entrenamiento de 
                    alto nivel, educación y soporte emocional para 
                    convertirlos en profesionales y ciudadanos ejemplares.
                    </h1>
                    <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-[25%] flex px-6 items-center justify-center bg-white p-5">
                        <h1 className="text-4xl text-center text-blue-950">Misión</h1>
                    </div>
                </div>
                <div className="flex w-[80%] h-auto border-2 border-blue-950 gap-4 p-10 rounded-4xl relative">
                    <h1 className="text-left ">Ser un referente en Latinoamérica en transformación 
                    social a través del fútbol, desarrollando talentos con 
                    impacto global.
                    </h1>
                    <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-[25%] flex px-6 items-center justify-center bg-white p-5">
                        <h1 className="text-4xl text-center text-blue-950">Visión</h1>
                    </div>
                </div>

            </div>
        </div>
      </div>
      <div id="Section-3 "
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-10  ">
        
        {/* img */}
        <div className="flex w-full h-100 border-b-10 border-blue-950 bg-green-500 items-center justify-center" 
        style={{
            backgroundImage: `url(${imgsec3QuienesSomos})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}>
        </div>

        {/* right content */}
        <div className="w-full h-auto flex flex-col lg:flex-row mt-10 p-10 justify-center items-center">
        <div className="flex h-50 w-full lg:w-1/2  items-center justify-center">
            <h1 className="text-7xl">Valores</h1>
        </div>
        <div className="flex flex-col sm:flex-row w-auto lg:w-auto h-auto gap-y-4 gap-x-4 text-3xl text-[#231f20] bg-blue-950 text-white justify-around items-center p-5 ">
            <div className="flex flex-col w-auto gap-y-4   ">
                <div className="flex w-full h-auto gap-4 ">
                    <img src={checkSection3} alt="" className="w-10 h-10" />
                    <h1 className="text-left ">
                    Superacion
                    </h1>
                </div>
                <div className="flex w-full h-auto gap-4 ">
                    <img src={checkSection3} alt="" className="w-10 h-10" />
                    <h1 className="text-left">
                    Disciplina
                    </h1>
                </div>
                <div className="flex w-full h-auto gap-4">
                    <img src={checkSection3} alt="" className="w-10 h-10" />
                    <h1 className="text-left">
                    Empatía
                    </h1>
                </div>
            </div>
            
            <div className="flex flex-col w-auto  gap-y-4  ">
                <div className="flex w-full h-auto gap-4 ">
                    <img src={checkSection3} alt="" className="w-10 h-10" />
                    <h1 className="text-center ">
                    Compromiso
                    </h1>
                </div>
                <div className="flex w-full h-auto gap-4 ">
                    <img src={checkSection3} alt="" className="w-10 h-10" />
                    <h1 className="text-left">
                    Esperanza
                    </h1>
                </div>
                <div className="flex w-full h-auto gap-4">
                    <img src={checkSection3} alt="" className="w-10 h-10" />
                    <h1 className="text-left">
                    Excelencia
                    </h1>
                </div>
            </div>
        </div>
        </div>

      </div>
      <div id="Section-4 "
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950  ">

        
            
        <div
        id="Justificacion-sec-4"
        className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center  items-stretch gap-x-15 "
        >
        
            {/* right contenedor */}
            <div className="flex flex-col w-full lg:w-2/3 h-auto ">
                <h1 className="text-7xl mt-10 mb-10">Objetivos</h1>
                <div className="flex flex-col w-full h-1/2  h-auto  bg-blue-950 gap-y-4 text-xl text-white justify-center items-center">
                
                <div className="flex w-[70%] md:w-[80%] h-auto border-b-2 border-white gap-4 mb-4 pb-3 mt-10">
                <img src={n01White} alt="" className="w-13 h-13 " />
                <div className="flex flex-col gap-y-4">
                    <h1 className="text-left w-full">
                    Escuelas de fútbol tradicionales:
                    </h1>
                    <p className="text-left">Se enfocan solo en la técnica. No abordan nutrición, psicología ni educación formal</p>
                </div>
                
                </div>
                <div className="flex w-[70%] md:w-[80%] h-auto border-b-2 border-white gap-4 mb-4 pb-3">
                <img src={n02White} alt="" className="w-13 h-13" />
                <div className="flex flex-col gap-y-4">
                    <h1 className="text-left w-full">
                    Academias profesionales privadas:
                    </h1>
                    <p className="text-left">Costosas, inaccesibles para niños de bajos recursos</p>
                </div>
                
                </div>
                <div className="flex w-[70%] md:w-[80%] h-auto gap-4 pb-3  mb-10">
                <img src={n01White} alt="" className="w-13 h-13" />
                <div className="flex flex-col gap-y-4">
                    <h1 className="text-left w-full">
                    ONGs deportivas:
                    </h1>
                    <p className="text-left">Existen, pero pocas con enfoque profesionalizante</p>
                </div>
                </div>
                
            </div>
            </div>
            

            {/* img */}
            <div
                className="flex w-full lg:w-1/3 h-110 lg:h-auto  justify-center items-center"
                style={{
                backgroundImage: `url(${imgsec4QuienesSomos})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
            > 
            </div>
        </div>


      </div>
      <div id="Section-5 "
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950">
        
        <div
        id="Justificacion-sec-5"
        className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center  "
        >
        {/* right contenedor */}
        
        <div className="flex flex-col w-full lg:w-1/2 h-auto  gap-y-4 text-3xl text-[#231f20] p-5 sm:p-10 ">
            <div className="flex flex-col w-full h-auto gap-4">
                <div className="w-full h-auto bg-blue-950">
                    <h1 className="text-white p-3 text-4xl">Posicionamiento</h1>
                </div>
                <h1 className="text-center  text-xl  p-5 ">
                    “ALIENTA PERUANO es una plataforma de 
                    transformación que convierte a niños con 
                    talento y pocos recursos en futbolistas 
                    profesionales y líderes positivos, 
                    integrando deporte, salud y educación.”
                </h1>
            </div>
            <div className="flex flex-col w-full h-auto  gap-4">
                <div className="w-full h-auto bg-blue-950">
                    <h1 className="text-white p-3 text-4xl">Propuesta de valor</h1>
                </div>
                <h1 className="text-center text-xl">
                    Brindamos una oportunidad real de desarrollo 
                    personal y profesional a niños vulnerables con 
                    talento, a través de un modelo integral que une 
                    fútbol, salud, educación y valores.
                </h1>
            </div>
            
        </div>

        {/* img */}
        <div
            className="w-full lg:w-[60%] h-120 bg-blue-950 sec4-shape-img-form "
            style={{
            backgroundImage: `url(${imgsec5QuienesSomos})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
        ></div>
        </div>


      </div>
    </div>
  );
}
