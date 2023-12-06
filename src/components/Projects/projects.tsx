import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="delaySmallReveal">Projetos <span>.</span></h2>
        <div id="projects">
          <article className="intervalCardReveal teslabank">
            <h3>TeslaBank</h3>
            <p>
              Site institucional de banco digital, feito em HTML, Sass e
              JavaScript.
            </p>

            <a
              href="#"
              rel="noopener"
              target="_blank"
              id="teslabank"
            >
              Visualizar Projeto
            </a>
          </article>

          <article className="intervalCardReveal naped">
            <h3>Naped</h3>
            <p>
              Site de notícias nerd, feito em Next.js, TypeScript e
              styled-components.
            </p>

            <a
              href="#"
              rel="noopener"
              target="_blank"
              id="naped"
            >
              Visualizar Projeto
            </a>
          </article>

          <article className="intervalCardReveal efront">
            <h3>eFront</h3>
            <p>
              Página de vendas do eFront, feito em HTML, Sass e JavaScript.
            </p>

            <a
              href="#"
              rel="noopener"
              target="_blank"
              id="efront"
            >
              Visualizar Projeto
            </a>
          </article>

          <article className="intervalCardReveal steam">
            <h3>Steam</h3>
            <p>
              Redesign da Steam, feito em HTML, Sass e JavaScript.
            </p>

            <a
              href="#"
              rel="noopener"
              target="_blank"
              id="steam"
            >
              Visualizar Projeto
            </a>
          </article>

          <article className="intervalCardReveal none">
            <h3>Em contrução...</h3>
            <p>
              Pegue o café e espere um pouco, estou desenvolvendo o projeto.
            </p>
          </article>
        </div>
        <a
          href="https://github.com/kauesiqueiraa?tab=repositories"
          rel="noopener"
          target="_blank"
          className="delayExtraBigReveal"
        >
          Repositórios no GitHub
        </a>
      </div>
    </section>
  )
}