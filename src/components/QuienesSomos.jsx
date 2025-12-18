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
import { useTranslation } from "react-i18next";


export default function QuienesSomos() {

  const {t} = useTranslation("quienesSomos");


  return (
    <div className="w-full h-auto overflow-x-hidden ">

        <Header className="fixed top-0 left-0 w-full z-50"/>

        <div id="Seccion1" className="flex flex-col lg:flex-row flex-grow ">
            <div className="flex justify-center items-center flex-grow  lg:w-[50%] w-full pt-30 lg:pt-20 ">
                <div className="flex flex-col mb-10 mt-10 oswald  pl-10 pr-10  ">
                    <h1 className="text-3xl lg:text-5xl text-blue-950 w-full text-center mb-5 anton ">{t("section1.title")}</h1>
                    <p className="text-lg lg:text-2xl text-[#231f20] mb-5 ">{t("section1.paragraphs.p1")}</p>
                    <p className="text-lg lg:text-2xl text-[#231f20] mb-5 ">{t("section1.paragraphs.p2")}</p>
                    <p className="text-lg lg:text-2xl text-[#231f20] mb-5 ">{t("section1.paragraphs.p3")}</p>
                    <p className="text-lg lg:text-2xl text-[#231f20]">{t("section1.paragraphs.p4")}</p>
                </div>
                

            </div>
            
            <div
            className="w-full lg:w-1/2 min-h-160 bg-blue-950 "
            style={{
                backgroundImage: `url(${imgsec1QuienesSomos})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            ></div>
        </div>
            
        {/* Sección con columnas */}
        <div id="Section-2" className="w-full text-center flex flex-col items-center text-blue-950 mt-20  ">
        <div
            id="Justificacion-sec-2"
            className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center "
        >
            {/* img */}
            <div
            className="relative w-full lg:w-1/2 min-h-160 bg-blue-950 order-2 lg:order-1 "
            style={{
                backgroundImage: `url(${imgsec2QuienesSomos})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            >
            {/* Overlay difuminado solo en el 20% derecho */}
            <div className="hidden lg:block absolute right-0 top-0 h-full w-[20%] bg-gradient-to-r from-transparent to-white"></div>
            </div>


            {/* right contenedor */}
            <div className="flex flex-col w-full lg:w-1/2 h-auto gap-y-10 text-xl order-1 lg:order-2 text-[#231f20] p-10 items-end oswald ">
                <div className="flex w-full h-auto border-2 border-blue-950 gap-4 p-10 rounded-4xl relative">
                    <h1 className="text-left text-lg lg:text-2xl ">{t("section2.paragraph1")}</h1>
                    <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-[25%] flex px-6 items-center justify-center bg-white p-5">
                        <h1 className="text-3xl lg:text-4xl text-center text-blue-950 anton">{t("section2.title1")}</h1>
                    </div>
                </div>
                <div className="flex w-[80%] h-auto border-2 border-blue-950 gap-4 p-10 rounded-4xl relative">
                    <h1 className="text-left text-lg lg:text-2xl ">{t("section2.paragraph2")}</h1>
                    <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-[25%] flex px-6 items-center justify-center bg-white p-5">
                        <h1 className="text-3xl lg:text-4xl text-center text-blue-950 anton">{t("section2.title2")}</h1>
                    </div>
                </div>

            </div>
        </div>
        </div>
        <div id="Section-3 "
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 mt-20  ">
        
        {/* img */}
        <div className="flex w-full h-100 border-b-10 border-blue-950 bg-green-500 items-center justify-center order-2 lg-order-1" 
        style={{
            backgroundImage: `url(${imgsec3QuienesSomos})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}>
        </div>

        {/* bottom content */}
        <div className="w-full h-auto flex flex-col lg:flex-row  lg:pr-10 lg:pl-10 lg:mt-5 justify-center items-center   gap-y-4 order-1 lg:order-2 mb-5 lg:mb-0">
            <div className="flex w-auto lg:w-[45%]  items-center justify-center ">
                <h1 className="text-3xl lg:text-5xl ">{t("section3.title")}</h1>
            </div>
            <div className="flex sm:flex-row gap-x-4 lg:gap-x-0 w-full lg:w-[55%] h-auto gap-y-4 text-2xl lg:text-3xl text-[#231f20] bg-blue-950 text-white justify-evenly items-center lg:pl-10 lg:pr-10 pt-5 pb-5 lg:text-3xl oswald">
                <div className="flex flex-col w-auto  custom-flex-xs gap-x-10">
                    <div className=" w-auto sm:w-auto gap-y-4 ">
                        <div className="flex w-full h-auto gap-4 ">
                            <img src={checkSection3} alt="" className="w-10 h-10" />
                            <h1 className="text-left ">
                            {t("section3.items.1")}
                            </h1>
                        </div>
                        <div className="flex w-full h-auto gap-4 ">
                            <img src={checkSection3} alt="" className="w-10 h-10" />
                            <h1 className="text-left">
                            {t("section3.items.2")}
                            </h1>
                        </div>
                        <div className="flex w-full h-auto gap-4">
                            <img src={checkSection3} alt="" className="w-10 h-10" />
                            <h1 className="text-left">
                            {t("section3.items.3")}
                            </h1>
                        </div>
                    </div>
                    <div className=" w-auto sm:w-auto gap-y-4  ">
                        <div className="flex w-full h-auto gap-4 ">
                            <img src={checkSection3} alt="" className="w-10 h-10" />
                            <h1 className="text-center ">
                            {t("section3.items.4")}
                            </h1>
                        </div>
                        <div className="flex w-full h-auto gap-4 ">
                            <img src={checkSection3} alt="" className="w-10 h-10" />
                            <h1 className="text-left">
                            {t("section3.items.5")}
                            </h1>
                        </div>
                        <div className="flex w-full h-auto gap-4">
                            <img src={checkSection3} alt="" className="w-10 h-10" />
                            <h1 className="text-left">
                            {t("section3.items.6")}
                            </h1>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        </div>
        <div id="Section-4 "
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950   mt-20 ">
        <div
        id="Justificacion-sec-4"
        className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center  items-stretch gap-x-15 "
        >
        
            {/* right contenedor */}
            <div className="flex flex-col w-full lg:w-2/3 h-auto ">
                <h1 className="text-3xl lg:text-5xl mb-5">{t("section4.title")}</h1>
                <div className="flex flex-col w-full h-1/2  h-auto  bg-blue-950 gap-y-4 text-xl text-white justify-center items-center oswald ">
                    <div className="flex w-[70%] md:w-[55%] h-auto  gap-4 mb-4 mt-10 ">
                        <img src={n01White} alt="" className="w-10 h-10 " />
                        <div className="flex flex-col gap-y-4 border-b-2 border-white pb-3 w-full">
                            <p className="text-left">{t("section4.items.1")}</p>
                        </div>
                    
                    </div>
                    <div className="flex w-[70%] md:w-[55%] h-auto  gap-4 mb-4">
                        <img src={n02White} alt="" className="w-10 h-10" />
                        <div className="flex flex-col gap-y-4 border-b-2 border-white pb-3 w-full">
                            <p className="text-left">{t("section4.items.2")}</p>
                        </div>
                    
                    </div>
                    <div className="flex w-[70%] md:w-[55%] h-auto e gap-4 mb-4  ">
                        <img src={n01White} alt="" className="w-10 h-10" />
                        <div className="flex flex-col gap-y-4 border-b-2 border-white pb-3 w-full">
                            <p className="text-left">{t("section4.items.3")}</p>
                        </div>
                    </div>

                    <div className="flex w-[70%] md:w-[55%] h-auto gap-4  mb-10">
                        <img src={n01White} alt="" className="w-10 h-10" />
                        <div className="flex flex-col gap-y-4 w-full">
                            <p className="text-left">{t("section4.items.4")}</p>
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
        className="w-full h-min-screen text-center flex flex-col items-center text-blue-950  mt-20">
        
        <div
        id="Justificacion-sec-5"
        className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center  "
        >
        {/* right contenedor */}
        
        <div className="flex flex-col w-full lg:w-1/2 h-auto  gap-y-4  text-[#231f20] pl-5 pr-5 sm:p-10 ">
            <div className="flex flex-col w-full h-auto gap-4">
                <div className="w-full h-auto bg-blue-950 ">
                    <h1 className="text-white p-3 text-3xl lg:text-5xl">{t("section5.title1")}</h1>
                </div>
                <h1 className="text-center text-xl p-5 oswald ">{t("section5.paragraph1")}</h1>
            </div>
            <div className="flex flex-col w-full h-auto gap-4 mb-4">
                <div className="w-full h-auto bg-blue-950 ">
                    <h1 className="text-white p-3 text-3xl lg:text-5xl">{t("section5.title2")}</h1>
                </div>
                <h1 className="text-center text-xl oswald ">{t("section5.paragraph2")}</h1>
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
