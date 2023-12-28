// import { useState } from "react";
import "./Experience.css";

export default function Experience2() {

  return (
    <section className="experience">
      <div className="container">
        <h2 className="delaySmallReveal">Experiências <span>.</span></h2>
        <div id="experience">
          <div
            className="option-experience intervalCardReveal"
            id="experience-company"
          // onClick={handleExperienceClick()}
          >
            <div className="company sistemaInspecao activeExperience">
              <h3>Sistema de Inspeção</h3>
            </div>
            <div className="company iniciativaDev">
              <h3>Iniciativa Dev</h3>
            </div>
            <div className="company frellancer">
              <h3>Freelancer</h3>
            </div>
            <div className="company larFabiano">
              <h3>Lar Fabiano</h3>
            </div>
          </div>

          <div className="text-experience intervalCardReveal">
            <div>
              <h4 className="titleExperience">
                Desenvolvedor Frontend
              </h4>
              <p className="dateExperience">Feb 2023 - Atualmente</p>
            </div>
            <h5 className="companyExperience">Sistema de Inspeção de Caldeiras</h5>
            <p className="changeExperience">
              Trabalho criando o frontend do sistema, integração com as APIs e com buscas no banco, além de criar e gerar relatório de dados, tratar a responsividade para o cliente, e ajudando no backend quando necessário.
            </p>
            <p className="changeExperience">React - Typescript - TailwindCSS - Stitches - Next - Github - Docker - Prisma - Node - Express</p>
          </div>
        </div>

      </div>
    </section >
  )
}