

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HeroAlienta from './components/HeroAlienta';
import QuienesSomos from './components/QuienesSomos.jsx';
import Donacion from './components/Donacion.jsx';

import '../i18n.js';
import { I18nextProvider} from "react-i18next";
import i18n from "i18next";


function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<HeroAlienta />} />

          {/* Ruta para Quienes Somos */}
          <Route path="/quienesSomos" element={<QuienesSomos />} />

          {/* Ruta para Donaciones*/}
          <Route path="/donaciones" element={<Donacion />} />

        </Routes>
      </Router>
    </I18nextProvider>
    
  )
}

export default App
