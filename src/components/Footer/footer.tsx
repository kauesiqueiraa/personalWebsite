import "./Footer.css";

import logo from "../../assets/icons/iuricode-logo-footer.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          Copyright  © 2023
          <a href="#" rel="noopener" target="_blank">
            iuricode.com.
          </a>
          Todos os direitos reservados.
        </p>

        <div>
          <p>Powered by</p>
          <img
            src={logo}
            alt="Logo iuricode"
          />
        </div>
      </div>
    </footer>
  )
}