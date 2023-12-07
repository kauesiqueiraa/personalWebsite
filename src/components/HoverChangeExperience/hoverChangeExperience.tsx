import { useEffect } from "react";

export default function hoverChangeExperience(
  nameCard: string,
  changeDescription: string,
  titleExperience: string,
  companyExperience: string,
  dateExperience: string
) {
  useEffect(() => {
    const handleExperienceClick = () => {
      const varChangeDescription = document.querySelector(".changeExperience");
      const vartitleExperience = document.querySelector(".titleExperience");
      const varCompanyExperience = document.querySelector(".companyExperience");
      const varDateExperience = document.querySelector(".dateExperience");

      varChangeDescription.innerHTML = changeDescription;
      varCompanyExperience.innerHTML = companyExperience;
      vartitleExperience.innerHTML = titleExperience;
      varDateExperience.innerHTML = dateExperience;
    }

    const cardElement = document.querySelector(nameCard);
    if (cardElement) {
      cardElement.addEventListener("click", handleExperienceClick)
    }

    return () => {
      if (cardElement) {
        cardElement.removeEventListener("click", handleExperienceClick)
      }
    }
  }, [nameCard, changeDescription, titleExperience, companyExperience, dateExperience]);

  return null;
}

export function ExperienceHeader() {
  useEffect(() => {
    const header = document.getElementById("experience-company");
    const btns = header ? header.getElementsByClassName("company") : [];

    const handleHeaderButtonClick = function () {
      const current = document.getElementsByClassName("activeExperience");
      current[0]?.classList.remove("activeExperience");
      this.classList.add("activeExperience");
    };

    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", handleHeaderButtonClick);
    }

    return () => {
      // Remova os ouvintes de evento ao desmontar o componente
      for (let i = 0; i < btns.length; i++) {
        btns[i]?.removeEventListener("click", handleHeaderButtonClick);
      }
    };
  }, []);

  return null; // Este componente não renderiza nada diretamente
}