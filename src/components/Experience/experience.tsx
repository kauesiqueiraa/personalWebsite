// import { useState } from "react";
import "./Experience.css";

import WorksData from "../../data/experiences.json";
import { useState } from "react";

interface Work {
  company: string;
  job: string;
  data: string;
  subtitle: string;
  description: string;
  skills: string;
}


export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(WorksData[0]);

  const handleExperienceClick = (work: Work) => {
    setSelectedExperience(work)
  }


  return (
    <section className="experience">
      <div className="container">
        <h2 className="delaySmallReveal">Experiências <span>.</span></h2>
        <div id="experience">
          <div className="option-experience intervalCardReveal">

            {WorksData.map((work, index) => (
              <div
                key={index}
                className={`${work === selectedExperience ? 'activeExperience' : ''}`}
                onClick={() => handleExperienceClick(work)}
                id="experience-company"
              >
                <h3>{work.company}</h3>
              </div>
            ))}
          </div>

          <div className="text-experience intervalCardReveal">
            <div>
              <h4 className="titleExperience">
                {selectedExperience.job}
              </h4>
              <p className="dateExperience">{selectedExperience.data}</p>
            </div>
            <h5 className="companyExperience">{selectedExperience.subtitle}</h5>
            <p className="changeExperience">
              {selectedExperience.description}
            </p>
            <p className="changeExperience two">
              {selectedExperience.skills}</p>
          </div>

        </div>
      </div>
    </section >
  )
}