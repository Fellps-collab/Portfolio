import React from 'react';
import { Link } from 'react-router-dom';

function Projetos() {
  return (
    <div>
      <h1>Página de Projetos</h1>
      <p>Confira os projetos desenvolvidos.</p>
      <Link to="/">
        <button>Voltar para Home</button>
      </Link>
    </div>
  );
}

export default Projetos;