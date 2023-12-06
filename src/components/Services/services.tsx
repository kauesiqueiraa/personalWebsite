import "./Services.css";

import layer from "../../assets/icons/icon-design.svg";
import code from "../../assets/icons/icon-front.svg";
import design from "../../assets/icons/icon-app-design.svg";

export default function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="delaySmallReveal">Serviços <span>.</span></h2>

        <div id="services">
          <article className="intervalCardReveal">
            <div>
              <img
                src={layer}
                width="100px"
                height="100px"
                alt="icon layers" />
            </div>
            <h3>UI Design</h3>
            <p>
              Desenho interface de forma que ela seja clara, objetiva e
              principalmente intuitiva para o usuário.
            </p>
          </article>

          <article className="intervalCardReveal">
            <div>
              <img
                src={code}
                width="100px"
                height="100px"
                alt="icon code" />
            </div>
            <h3>Desenvolvimento</h3>
            <p>
              Desenvolvo sites profissionais, blogs, portfólios, landing pages
              e e-commerce.
            </p>
          </article>

          <article className="intervalCardReveal">
            <div>
              <img
                src={design}
                width="100px"
                height="100px"
                alt="icon design" />
            </div>
            <h3>Motion</h3>
            <p>
              Crio interações que transmitem sensação de modernidade, além de
              chamarem a atenção do usuário.
            </p>
          </article>

        </div>
      </div>
    </section>
  )
}