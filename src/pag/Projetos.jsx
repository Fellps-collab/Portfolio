import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Importa os estilos

function Projetos() {
  // Estado para o tema
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "l-theme");

  // Alternar tema
  const toggleTheme = () => {
    const newTheme = theme === "l-theme" ? "d-theme" : "l-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Atualiza a classe do body ao carregar o componente
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <header>
        <button
          id="toggle-theme"
          onClick={toggleTheme}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Alternar Tema
        </button>
        <h1>Meus Projetos</h1>
        <p>Confira alguns dos projetos que desenvolvi e ainda posso estar desenvolvendo!</p>
        <Link to="/">
          <button
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Voltar à Página Inicial
          </button>
        </Link>
      </header>

      <div className="project-container">
        <section>
          <h2>Jogo da Velha</h2>
          <div>
            <a
              href="https://github.com/Fellps-collab/Jogo-da-Velha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../../public/github.png"
                alt="Meu Projeto no GitHub"
                style={{ maxWidth: "10%", borderRadius: "8px", cursor: "pointer" }}
              />
            </a>
            <p>
              Esse foi meu primeiro projeto "bem sucedido" mesmo sendo uma coisa
              simples, ainda fiquei muito feliz quando finalizei. Assim como
              esse, todos os projetos estão no meu GitHub.
            </p>
          </div>
        </section>

        <section>
          <h2>Pesquisa de Atletas</h2>
          <div>
            <a
              href="https://github.com/Fellps-collab/Atleta-pesquisa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../../public/github.png"
                alt="Meu Projeto no GitHub"
                style={{ maxWidth: "10%", borderRadius: "8px", cursor: "pointer" }}
              />
            </a>
            <p>
              Apesar desse ser meu primeiro projeto, acabou que ficou legal, mas
              não senti o mesmo senso de "sucesso" que senti com o Jogo da
              Velha.
            </p>
          </div>
        </section>

        <section>
          <h2>To Do List</h2>
          <div>
            <a
              href="https://github.com/Fellps-collab/to-do-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../../public/github.png"
                alt="Meu Projeto no GitHub"
                style={{ maxWidth: "10%", borderRadius: "8px", cursor: "pointer" }}
              />
            </a>
            <p>
              Esse projeto foi uma To Do List. Apesar de ter sido bom ter feito,
              o projeto final ficou um pouco diferente do que eu esperava.
            </p>
          </div>
        </section>

        <br />
        <p>
          Lembrando que todos os links são para o mesmo GitHub, somente repositórios
          diferentes. Sinta-se à vontade para ver o que te interessa no meu
          GitHub.
        </p>
      </div>
    </div>
  );
}

export default Projetos;