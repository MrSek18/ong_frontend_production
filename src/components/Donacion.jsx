
import Header from "../components/Header.jsx";
import DonacionImg from "../assets/imgsec2QuienesSomos.png";
import { useState } from "react";

export default function QuienesSomos() {

  const [showReactive, setShowReactive] = useState(false);
  const [plan, setPlan] = useState(null);       
  const [monto, setMonto] = useState(null);     
  const [otroMonto, setOtroMonto] = useState("");
  const [errors, setErrors] = useState({ plan: "", monto: "" });

  const handleNext = () => {
    let newErrors = { plan: "", monto: "" };

    if (!plan) {
      newErrors.plan = "Debes seleccionar un plan (Mensual o Única).";
    }
    if (!monto) {
      newErrors.monto = "Debes seleccionar un monto.";
    } else if (monto === "otro" && !otroMonto) {
      newErrors.monto = "Debes ingresar un monto en 'OTRO'.";
    }

    setErrors(newErrors);

    // Si no hay errores, continuar
    if (!newErrors.plan && !newErrors.monto) {
      const aporteFinal = monto === "otro" ? otroMonto : monto;
      alert(`Plan: ${plan}, Monto: ${aporteFinal}`);
    }
  };
  return (
    <div className="w-full h-auto overflow-x-hidden ">
      <div className="w-full h-auto  flex flex-col ">
        <div className="absolute top-0 left-0 w-full bg-blue-500/70 z-50">
            <Header />
        </div>
        
        <div id="donacion" className="w-full h-min-screen text-center flex flex-col items-center text-blue-950  gap-6 ">
            <div
                id="Justificacion-sec-2"
                className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center "
            >
                {/* img */}
                <div
                className="w-full lg:w-[60%] h-screen bg-blue-950  order-2 lg:order-1 "
                style={{
                    backgroundImage: `url(${DonacionImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                ></div>
    
                <div className="flex flex-col w-full lg:w-[40%] h-auto sm:h-screen text-xl order-1 lg:order-2 text-[#231f20] justify-center items-center  gap-y-6 bg-blue-950 text-white relative pt-50 pb-10 sm:pt-0 sm:pb-0">
    
                {/* first contenedor */}
                {!showReactive && (
                    <div className="flex flex-col w-[85%] gap-6 items-center justify-center ">
                    <h1 className="text-5xl ">¡Con tu ayuda</h1>
                    <h2 className="text-4xl ">podemos ayudarlos!</h2>

                    <p className="text-2xl w-[80%]">
                        Tu apoyo puede convertir a niños con talento y pocos recursos en futbolistas profesionales y líderes positivos
                    </p>
                    <button
                        onClick={() => setShowReactive(true)}
                        className="bg-red-600 text-white px-6 py-4 rounded-full cursor-pointer hover:scale-110 transform-gpu transition text-2xl"
                    >
                        Dona ahora
                    </button>
                    </div>
                )}

                {/* reactive contenedor */}
                {showReactive && (
                <div className="flex flex-col w-[95%] lg:w-[70%] gap-6 items-center justify-center bg-[#a7a9ac] text-[#231f20] xl-p-10 p-6 relative">
                    
                    {/* botón de cierre */}
                    <button
                    onClick={() => setShowReactive(false)}
                    className="absolute top-2 right-4 text-black text-xl font-bold"
                    >
                    ✕
                    </button>

                    <h1 className="text-2xl xl:text-3xl">DONA AHORA</h1>
                    <h2 className="text-base xl:text-lg">
                    Con tu apoyo ayudas al desarrollo personal y profesional a niños vulnerables con talento. <br />
                    Elije el monto.
                    </h2>

                    {/* Planes */}
                    <div className="flex flex-row w-full text-base xl:text-lg">
                    <button
                        onClick={() => setPlan("mensual")}
                        className={`p-3 w-1/2 ${plan === "mensual" ? "bg-[#fff200]" : "bg-white"}`}
                    >
                        MENSUAL
                    </button>
                    <button
                        onClick={() => setPlan("unica")}
                        className={`p-3 w-1/2 ${plan === "unica" ? "bg-[#fff200]" : "bg-white"}`}
                    >
                        ÚNICA
                    </button>
                    </div>
                    {errors.plan && <p className="text-red-600 text-sm">{errors.plan}</p>}

                    {/* Montos */}
                    <div className="flex flex-row w-full text-xs sm:text-lg lg:text-xs xl:text-lg">
                    {["30", "60", "90", "otro"].map((valor, i) => (
                        <button
                        key={valor}
                        onClick={() => setMonto(valor)}
                        className={`p-3 w-1/4 border-r border-black ${
                            monto === valor ? "bg-[#fff200]" : "bg-white"
                        } ${i === 3 ? "border-r-0" : ""}`}
                        >
                        {valor === "otro" ? "OTRO" : `S/. ${valor}`}
                        </button>
                    ))}
                    </div>

                    {/* Input para "OTRO" solo si está seleccionado */}
                    {monto === "otro" && (
                    <div className="w-full flex flex-col gap-2">
                        <label className="text-sm font-semibold">Ingresa tu monto:</label>
                        <input
                        type="number"
                        value={otroMonto}
                        onChange={(e) => setOtroMonto(e.target.value)}
                        className="border border-black p-2 rounded"
                        placeholder="Ejemplo: 120"
                        />
                    </div>
                    )}
                    {errors.monto && <p className="text-red-600 text-sm">{errors.monto}</p>}

                    {/* Botón siguiente */}
                    <div className="w-full text-xl text-center">
                    <button
                        onClick={handleNext}
                        className="text-center p-2 bg-[#ed1c24] text-white w-full 
                                transform transition duration-300 
                                hover:scale-105 active:scale-95"
                    >
                        SIGUIENTE
                    </button>
                    </div>

                    <p className="text-sm w-full">
                    Tu donación es deducible de impuestos.
                    </p>
                </div>
                )}
                </div>
            </div>
        </div>
        
      </div>
      
    </div>
  );
}