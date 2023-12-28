import "./Projects.css";

import ProjectsData from "../../data/projects.json";

interface Project {
  title: string;
  description: string;
  skills: string;
  linkUrl: string;
}

export default function Projects2() {

  return (
    <section className="projects">
      <div className="container">
        <h2 className="delaySmallReveal">Projetos <span>.</span></h2>
        <div id="projects">
          {ProjectsData.map((project: Project, index) => {
            const articleClass = project.title.toLowerCase().replace(/\s/g, '');
            const linkClass = `${articleClass}-link`;

            return (
              <article
                key={index}
                className={`intervalCardReveal ${articleClass}`}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>{project.skills}</p>

                <a
                  href={project.linkUrl}
                  rel="noopener"
                  target="_blank"
                  id={`${articleClass}-link`}
                  className={`project-link ${linkClass}`}
                >
                  {project.linkUrl}
                </a>
              </article>
            );
          }
          )}

          {/* <article className="intervalCardReveal naped">
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
          </article> */}
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