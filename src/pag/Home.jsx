import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Importa os estilos

function Home() {
  // Estado para o tema
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'l-theme');

  // Alternar tema
  const toggleTheme = () => {
    const newTheme = theme === 'l-theme' ? 'd-theme' : 'l-theme';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
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
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Alternar Tema
        </button>
        <h1>Bem-vindo!!</h1>
        <p>Um pouco sobre Felipe!</p>
      </header>

      <div className="container">
        <section className="image-section">
          <img src="/lip.jpg" alt="Imagem 1" />
          <img src="/lip2.jpg" alt="Imagem 2" />
        </section>

        <section className="sobre">
          <h3>
          Opa opa, aqui quem fala é Felipe, e nesse site eu conto um pouco sobre minha vida, minha carreira e os sonhos que eu possuo
tudo de uma forma mais descontraída, pois além de tudo quero que você se sinta como se estivesse conversando com alguém,
e não so lendo um texto, con tudo isso explicado eu vou contar um pouco sobre mim.
Eu sou uma pessoa simples com objetivos abundantes como todo mundo, quando criança eu morava com minha mãe no Amapá
e eu não queria saber muito das coisas em si por lá pois além de pequeno eu era alguém muito preguiçoso e procrastinador
(ainda sou um pouco preguiçoso haha), e só quando eu fui morar com meus avós aos meus 7 anos de idade eu descobri meu amor
 por tecnologia em geral, tudo que tinha um certo nível de tecnologia eu era fascinado em saber como ocorria, 
 desde como um ar-condicionado funcionava, até qual o trabalho de cada componente de um computador, e eu sempre quis aprender mais
 sobre software e hardware, durante esse meio tempo eu estudei em 3 escolas particulares e meu ensino médio foi em uma pública
 o meu ensino médio foi um tanto quanto conturbado, pois era uma escola com ensino técnico, e tinha informática lá, porém 
 quando eu soube a sala já estava cheia, e eu tive que ir para administração, e foi ai que chegou a pandemia da Covid-19
 e atrapalhou não so a minha rotina, como a de todo mundo (literalmente o mundo todo) e esse tempo "sozinho" me fez crescer
 mentalmente e fez eu buscar minha verdadeira vocação, minha avó me fez até entrar em um curso de Guia de Turismo, que é
 legal mas não é o que eu realmente quero, eu passei no curso e tenho até o diploma, porém so foi no final do ensino médio 
 que eu soube que queria trabalhar somente com computadores, descobrir como eles funcionavam, e foi ai que eu entrei na UFRN
 em Bacharelado de CET (Ciências e Tecnologias), sem nem saber o que seria esse curso e eu acabei quebrando minha cara quando
 percebi que não era o que eu queria, acabei tendo que procurar outro canto para poder estudar realmente os assuntos que
 eu queria, então eu entrei em ADS (Análise e Desenvolvimento de Sistemas) na Uninassau, e é onde eu me encontro atualmente
 apesar da faculdade ter seus altos e baixos, eu gosto da forma que estou aprendendo e sempre atualizando meu conhecimento
 meu próximo passo depois de terminar essa faculdade é ir para TI (Tecnologia da Informação) na UFRN, para depois eu realmente
 sentir que estou pronto para o mercado de trabalho, por fim, acredito que apesar de todas as minhas falhas ainda consigo chegar
 aonde eu quero, e com muita luta, vou conseguir as coisas que eu sempre sonhei.
          </h3>
          <div>
            <h3>
              Clicando no botão abaixo te levará aos alguns projetos que eu fiz.
              Eu ainda posso fazer mais projetos, então talvez isso aqui ainda
              será mais atualizado depois!!
            </h3>
          </div>
          <div>
            <Link to="/projetos">
              <button
                style={{
                  padding: '10px 20px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Ver Projetos
              </button>
            </Link>
          </div>
          <p>Me siga também nas minhas redes sociais!!</p>
          <div>
            <a
              href="https://www.instagram.com/voidh_lol.bat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/instagram.png"
                alt="instagram"
                style={{ maxWidth: '10%', borderRadius: '8px', cursor: 'pointer' }}
              />
            </a>
            <a
              href="https://www.youtube.com/@VoidhJoga"
              target="_blank"
              rel="noopener noreferrer"
              style={{ paddingLeft: '10px' }}
            >
              <img
                src="/Youtube.png"
                alt="youtube"
                style={{ maxWidth: '15%', borderRadius: '8px', cursor: 'pointer' }}
              />
            </a>
            <a
              href="https://github.com/Fellps-collab"
              target="_blank"
              rel="noopener noreferrer"
              style={{ paddingLeft: '10px' }}
            >
              <img
                src="/github.png"
                alt="github"
                style={{ maxWidth: '10%', borderRadius: '8px', cursor: 'pointer' }}
              />
            </a>
          </div>
        </section>

        <section className="email">
          <h3>Quer falar comigo para um contato mais profissional?</h3>
          <form
            action="mailto:jjonasffelipefogo@gmail.com"
            method="post"
            encType="text/plain"
          >
            <input type="text" name="name" placeholder="Seu Nome" required />
            <input type="email" name="email" placeholder="Seu E-mail" required />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              rows="5"
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Home;