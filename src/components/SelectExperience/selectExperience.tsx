import { useState } from "react";

interface ExperienceProps {
  nameCard: string;
  changeDescription: string;
  titleExperience: string;
  companyExperience: string;
  dateExperience: string;
}

const SelectExperience: React.FC<ExperienceProps> = ({
  nameCard,
  changeDescription,
  titleExperience,
  companyExperience,
  dateExperience,
}) => {
  const [activeExperience, setActiveExperience] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveExperience(index);
    const varChangeDescription = document.querySelector(".changeExperience");
    const varTitleExperience = document.querySelector(".titleExperience");
    const varCompanyExperience = document.querySelector(".companyExperience");
    const varDateExperience = document.querySelector(".dateExperience");

    varChangeDescription.innerHTML = changeDescription;
    varCompanyExperience.innerHTML = companyExperience;
    varTitleExperience.innerHTML = titleExperience;
    varDateExperience.innerHTML = dateExperience;
  };

  return (
    <div>
      {experienceData.map((experience, index) => (
        <div
          key={index}
          className={`company ${index === activeExperience ? 'activeExperience' : ""}`}
          onClick={() => handleClick(index)}
        >
          {experience.name}
        </div>
      ))}
    </div>
  )
}

export default SelectExperience