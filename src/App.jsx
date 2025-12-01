

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HeroAlienta from './components/HeroAlienta';
import QuienesSomos from './components/QuienesSomos.jsx';
function App() {

  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<HeroAlienta />} />

        {/* Ruta para Quienes Somos */}
        <Route path="/quienesSomos" element={<QuienesSomos />} />
      </Routes>
    </Router>
  )
}

export default App
