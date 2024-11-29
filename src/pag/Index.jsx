import React from 'react';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <p>Bem-vindo à Página Inicial!</p>
      <Link to="/projetos">
        <button>Ir para Projetos</button>
      </Link>
    </div>
  );
}

export default Index;
