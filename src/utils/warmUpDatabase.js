import axios from "axios";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const warmUpDatabase = async ({ retries = 5, delay = 3000 } = {}) => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const isDev = import.meta.env.DEV;

  // Backend
  try {
    await axios.get(`${baseUrl}/health`);
  } catch {
    // backend puede no estar listo aún
  }


  //  DB
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await axios.get(`${baseUrl}/db-wakeup`, {
        timeout: 5000,
        headers: {
          "X-WAKEUP-TOKEN": import.meta.env.VITE_DB_WAKEUP_TOKEN,
        },
      });

      if (isDev) {
        console.log(`DB despertada (intento ${attempt})`);
      }
      return true;
    } catch (err) {
      if (isDev) {
        console.warn(`Intento ${attempt} falló:`, err.message);
      }

      if (attempt < retries) {
        await sleep(delay * attempt);
      }
    }
  }

  if (isDev) {
    console.warn("No se pudo despertar la DB, continuando igual...");
  }
  return false;
};
