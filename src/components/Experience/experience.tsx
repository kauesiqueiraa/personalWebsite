import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience">
      <div className="container">
        <h2 className="delaySmallReveal">Experiências <span>.</span></h2>
        <div id="experience">
          <div
            className="option-experience intervalCardReveal"
            id="experience-company"
          >
            <div className="company digitalhouse activeExperience">
              <h3>Digital House</h3>
            </div>
            <div className="company zuplae">
              <h3>Zuplae</h3>
            </div>
            <div className="company codigoFonteTV">
              <h3>Código Fonte TV</h3>
            </div>
          </div>

          <div className="text-experience intervalCardReveal">
            <div>
              <h4 className="titleExperience">
                Professor conteudista em Frontend
              </h4>
              <p className="dateExperience">Nov 2021 - Nov 2022 (1 ano)</p>
            </div>
            <h5 className="companyExperience">Digital House</h5>
            <p className="changeExperience">
              Trabalhei como instrutor conteudista em frontend na Digital
              House, o trabalho consistia em criar conteúdos para as aulas de
              especialização frontend. Alguns temas dos conteúdos realizados
              foram: React, Redux, TypeScript, Testes, GraphQL, Next.js, MUI,
              React Hook Form e styled-components.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}