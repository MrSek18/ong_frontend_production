import Header from "../components/Header.jsx";
import DonacionImg from "../assets/imgsec2QuienesSomos.png";
import formAmericanExpress from "../assets/formAmericanExpress.png";
import formDinersClub from "../assets/formDinersClubLogo.png";
import formMastercard from "../assets/formMastercardLogo.png";
import formPsi from "../assets/formPsiLogo.png";
import formUnionPay from "../assets/formUnionPay.png";
import formVisa from "../assets/formVisaLogo.png";
import logoAlientaOriginal from "../assets/alientaPeruanoLogoOriginal.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Donacion() {
  const [showReactive, setShowReactive] = useState(false);
  const [plan, setPlan] = useState(null);
  const [monto, setMonto] = useState(null);
  const [otroMonto, setOtroMonto] = useState("");
  const [errors, setErrors] = useState({ plan: "", monto: "" });
  const [showForm, setShowForm] = useState(false);
  const [mensajePago, setMensajePago] = useState(null);



  useEffect(() => {
    if (showForm) {
      const mp = new window.MercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY, { locale: "es-PE" });
      const bricksBuilder = mp.bricks();

      bricksBuilder.create("cardPayment", "paymentBrick_container", {
        initialization: {
          amount: monto === "otro" ? otroMonto : monto,
        },
        callbacks: {
          onReady: () => {
            console.log("Brick ready");
          },
          onError: (error) => {
            console.error("Error en Brick :", error);
            setMensajePago("Error al inicializar el formulario de pago.");
          },
          onSubmit: async (cardData) => {
            try {
              console.log("cardData recibido:", JSON.stringify(cardData, null, 2));

              const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/pago`, {
                token: cardData.token,
                payment_method_id: cardData.payment_method_id,
                installments: cardData.installments,
                email: cardData.payer.email,
                identification_type: cardData.payer.identification.type,
                identification_number: cardData.payer.identification.number,
                monto: monto === "otro" ? otroMonto : monto,
                plan,
              });

              console.log("Pago OK:", response.data);

              // 👇 Manejo dinámico de mensajes
              if (response.data.status === "approved") {
                setMensajePago("¡Gracias! Tu donación fue procesada con éxito.");
              } else if (response.data.status === "rejected") {
                setMensajePago("Lo sentimos, tu pago fue rechazado. Intenta con otra tarjeta o método.");
              } else if (response.data.status === "pending") {
                setMensajePago("Tu pago está pendiente de confirmación. Te avisaremos cuando se apruebe.");
              } else {
                setMensajePago("Hubo un problema al procesar tu pago. Intenta nuevamente.");
              }
            } catch (error) {
              console.error("Error backend:", error.response?.data || error.message);
              setMensajePago("Error de conexión con el servidor. Intenta más tarde.");
            }
          },
        },
      });
    }
  }, [showForm, monto, otroMonto, plan]);



  const handleNext = () => {
    let newErrors = { plan: "", monto: "" };

    if (!plan) {
      newErrors.plan = "Debes seleccionar un plan (Mensual o Única).";
    }
    if (!monto) {
      newErrors.monto = "Debes seleccionar un monto.";
    } else if (monto === "otro" && !otroMonto) {
      newErrors.monto = "Debes ingresar un monto en 'OTRO'.";
    } else if (monto === "otro" && isNaN(otroMonto)) {
      newErrors.monto = "El monto ingresado debe ser un número válido.";
    } else if (monto === "otro" && Number(otroMonto) <= 0) {
      newErrors.monto = "El monto ingresado debe ser mayor a cero.";
    } else if (monto === "otro" && Number(otroMonto) > 0 && Number(otroMonto) < 5) {
      newErrors.monto = "El monto mínimo para donar es S/ 5.00.";
    }

    setErrors(newErrors);

    if (!newErrors.plan && !newErrors.monto) {
      setShowForm(true);
    }
  };

  return (
    <div className="w-full h-auto overflow-x-hidden ">
      <div className="w-full h-auto flex flex-col ">
        <div className="absolute top-0 left-0 w-full bg-blue-500/70 z-50">
          <Header />
        </div>

        <div id="donacion" className="w-full h-min-screen text-center flex flex-col items-center text-blue-950 gap-6 ">
          <div id="Justificacion-sec-2" className="relative w-full h-auto flex flex-col lg:flex-row justify-between items-center ">
            
            {/* img */}
            <div
              className="w-full lg:w-[60%] h-screen bg-blue-950 order-2 lg:order-1"
              style={{
                backgroundImage: `url(${DonacionImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="flex flex-col w-full lg:w-[40%] h-auto lg:h-screen text-xl order-1 lg:order-2 text-[#231f20] justify-center items-center gap-y-6 bg-blue-950 text-white relative pt-50 pb-10 lg:pt-30 lg:pb-0">

              {/* first contenedor */}
              {!showReactive && !showForm && (
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
              {showReactive && !showForm && (
                <div className="flex flex-col w-[95%] lg:w-[70%] gap-6 items-center justify-start bg-[#a7a9ac] text-[#231f20] xl-p-10 p-6 relative overflow-y-auto lg:max-h-110 ">
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

              {/* Vista del formulario de tarjeta */}
              {showForm && (
                <div className="flex flex-col w-[95%] lg:w-[90%] gap-6 items-center justify-start bg-white text-[#231f20] p-2 lg:p-6 relative rounded overflow-y-auto max-h-100">
                  {/* Botón de cierre */}
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="absolute top-2 right-4 text-black text-xl font-bold"
                  >
                    ✕
                  </button>

                  <img src={logoAlientaOriginal} className="bg-[#a7a9ac] px-10 py-3 mt-10 lg:mt-5"/>
                  <p className="text-sm mb-2 text-center text-gray-600 font-sans font-medium">
                    Recuerda activar las compras por internet con tu banco
                  </p>

                  {/* Aquí se monta el Brick de Mercado Pago */}
                  <div id="paymentBrick_container" className="w-full"></div>
                  {mensajePago && (
                    <div className="p-3 rounded text-center text-sm bg-gray-100 text-gray-800 ">
                      {mensajePago}
                    </div>
                  )}

                  <p className="text-sm mt-4 text-center text-gray-500">
                    Infórmate sobre el tratamiento de tus datos personales aquí
                  </p>

                  {/* Logos de seguridad */}
                  <div className="grid grid-cols-3 mt-4 justify-items-center sm:flex sm:justify-center gap-4">
                    <img src={formPsi} alt="PCI Security Standards Council" className="h-8 " />
                    <img src={formVisa} alt="Visa" className="h-8 " />
                    <img src={formMastercard} alt="Mastercard" className="h-8 " />
                    <img src={formDinersClub} alt="Diners Club" className="h-8 " />
                    <img src={formAmericanExpress} alt="American Express" className="h-8 " />
                    <img src={formUnionPay} alt="UnionPay" className="h-8 " />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
