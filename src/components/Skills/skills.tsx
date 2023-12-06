import "./Skills.css";

import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import javascript from "../../assets/icons/javascript.svg";
import sass from "../../assets/icons/sass.svg";
import react from "../../assets/icons/react.svg";
import next from "../../assets/icons/next.svg";
import styled from "../../assets/icons/styled-components.svg";
import tailwind from "../../assets/icons/tailwindcss.svg";
import radix from "../../assets/icons/radix.svg";
import typescript from "../../assets/icons/typescript.svg";
import storybook from "../../assets/icons/storybook.svg";
import cypress from "../../assets/icons/cypress.svg";

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <div id="skills">
          <article id="skills-text">
            <h2 className="delaySmallReveal">Conhecimentos <span>.</span></h2>
            <p className="delayMediumReveal changeDescription">
              *passe o cursor do mouse no card para ler*
            </p>
          </article>

          <div id="skills-cards">
            <article className="intervalCardReveal">
              <img
                src={html}
                width="60px"
                height="60px"
                alt="icon from html" />
            </article>

            <article className="intervalCardReveal">
              <img
                src={css}
                width="60px"
                height="60px"
                alt="icon from css" />
            </article>

            <article className="intervalCardReveal">
              <img
                src={javascript}
                width="60px"
                height="60px"
                alt="icon from javascript" />
            </article>

            <article className="intervalCardReveal">
              <img
                src={sass}
                width="60px"
                height="60px"
                alt="icon from sass" />
            </article>

            <article className="intervalCardReveal">
              <img
                src={react}
                width="60px"
                height="60px"
                alt="icon from react" />
            </article>

            <article className="intervalCardReveal">
              <img
                src={next}
                width="60px"
                height="60px"
                alt="icon from next" />
            </article>

            <article className="intervalCardReveal">
              <img
                src={styled}
                width="60px"
                height="60px"
                alt="icon from styled" />
            </article>

            <article className="intervalCardReveal">
              <img
                src={tailwind}
                width="60px"
                height="60px"
                alt="icon from tailwind" />
            </article>

            <article className="intervalCardReveal">
              <img
                src={radix}
                width="60px"
                height="60px"
                alt="icon from radix" />
            </article>

            <article className="intervalCardReveal">
              <img
                src={typescript}
                width="60px"
                height="60px"
                alt="icon from typescript" />
            </article>

            <article className="intervalCardReveal">
              <img
                src={storybook}
                width="60px"
                height="60px"
                alt="icon from storybook" />
            </article>

            <article className="intervalCardReveal">
              <img
                src={cypress}
                width="60px"
                height="60px"
                alt="icon from cypress" />
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}