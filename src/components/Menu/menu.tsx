import "./Menu.css";
import logo from "../../assets/logo-iuricode.svg"
import { useEffect, useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleMenuClick = () => {
      setIsMenuOpen(!isMenuOpen)
      console.log("abriu");
    };

    const mobileMenu = document.querySelector(".mobile_menu") as HTMLElement;
    const navLinks2 = document.querySelectorAll(".nav_list li a") as NodeListOf<HTMLElement>

    mobileMenu.addEventListener("click", handleMenuClick);

    navLinks2.forEach((item) => {
      item.addEventListener('click', handleMenuClick);
      console.log("abriu1");
    })

    return () => {
      mobileMenu.removeEventListener("click", handleMenuClick);
      console.log("abriu2")
      navLinks2.forEach((item) => {
        item.removeEventListener("click", handleMenuClick)
      });
    };

    console.log("abriu3");
  }, [isMenuOpen]);

  return (
    <header className="">
      <div className="grid_layout">
        <nav>
          <img src={logo} alt="Logo" width="150px" height="25px" />

          <div className={`mobile_menu ${isMenuOpen ? "active" : ""}`} >
            <div>line1</div>
            <div>line2</div>
            <div>line3</div>
          </div>

          <ul className={`nav_list ${isMenuOpen ? "active" : ""}`}>
            <li><a href="">Ínicio</a></li>
            <li><a href="">Quem Sou</a></li>
            <li><a href="">Experiências</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Serviços</a></li>
            <li><a href="">Conhecimentos</a></li>
          </ul>

        </nav>
      </div>
    </header >
  )
}