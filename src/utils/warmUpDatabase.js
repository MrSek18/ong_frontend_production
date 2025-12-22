import axios from "axios";

export const warmUpDatabase = async () => {
  try {
    await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/health`);
    console.log("Warm-up exitosos: conexión establecida con el backend");
  } catch (err) {
    console.warn("Warm-up falló, esperando igual...:", err.message);
  }
  await new Promise((resolve) => setTimeout(resolve, 6000));
};
