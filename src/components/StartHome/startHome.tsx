import "./StartHome.css";
import logo from "../../assets/logo.svg"
import typeWrite from "../TyperWrite/typeWrite";
import { useEffect, useRef } from "react";
import initScrollReveal from "../ScrollReveal/scrollReveal";

export default function StartHome() {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      typeWrite({ element: elementRef.current });
      initScrollReveal();
    }
  })

  return (
    <section className="start-Home">
      <div className="container">
        <div className="home">
          <div className="home-container-text">
            <h1 className="delayMediumReveal">
              Ajudando empresas a contruírem <span>produtos digitais</span> de forma moderna e de alta qualidade.
            </h1>
            <p ref={elementRef}>
              Uma mistura de Design, Desenvolvimento Frontend e habilidade profissional que vão destacar seu produto no mercado.
            </p>

            <a href="#"
              rel="noopener"
              target="_blank"
              className="delayExtraBigReveal"
            >
              Instagram
            </a>
          </div>

          <img
            src={logo}
            alt="icone"
            // onLoad="SVGInject(this)" 
            id="logo"
            width="500px"
            height="500px" />

        </div>
      </div>
    </section>
  )
}