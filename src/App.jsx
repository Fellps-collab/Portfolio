import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Index from './pag/Index';
import Projetos from './pag/Projetos';

// Componente de alternância de tema
function GlobalThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'l-theme';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'l-theme' : 'd-theme';
    localStorage.setItem('theme', darkMode ? 'l-theme' : 'd-theme');
  }, [darkMode]);

  return (
    <div className="alternar">
      <h1>Alternância de Tema Global</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        {/* Definindo as Rotas */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;