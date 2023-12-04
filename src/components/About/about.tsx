import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import laptop from "../../assets/icons/laptop.svg";
import discord from "../../assets/icons/discord.svg";
import github from "../../assets/icons/github.svg";

import "./About.css";

export default function About() {

  return (
    <section className="about">
      <div className="container">
        <div>
          <div id="creator-photo" className="delayMediumReveal">
            <h3 className="delayExtraBigReveal">Criador do eFront</h3>
          </div>
          <div>
            <h4 className="delayMediumReveal">Quem sou</h4>
            <h2 className="delaySmallReveal">Iuri Silva</h2>
            <h3 className="delayMediumReveal">Frontend Developer & UI Designer</h3>

            <p className="delayLargeReveal">
              Meu nome é Iuri Silva, ou “iuricode” (é como me chamam agora)
              sou o criador do eFront, um material de ensino de frontend pela
              internet. Atualmente sou freelancer como Frontend Developer e UI
              Designer. Desenvolvo interfaces modernas e de alta qualidade,
              concentrado em performance, animações, responsividade e SEO.
            </p>

            <nav className="delayLargeReveal">
              <ul>
                <a
                  href="#"
                  rel="noonpener"
                  target="_blank"
                >
                  <li>
                    <img src={instagram} alt="instagram" />
                  </li>
                </a>

                <a
                  href="#"
                  rel="noopener"
                  target="_blank"
                >
                  <li>
                    <img
                      src={linkedin}
                      rel="noopener"
                      alt="Ícone do LinkedIn"
                    /></li
                  >
                </a>

                <a
                  href="https://iuricode-blog.vercel.app/"
                  rel="noopener"
                  target="_blank"
                ><li>
                    <img
                      src={laptop}
                      alt="Ícone de um laptop"
                    /></li
                  ></a>

                <a
                  href="https://discord.com/invite/QevDJqCzaY"
                  rel="noopener"
                  target="_blank"
                ><li>
                    <img
                      src={discord}
                      alt="Ícone do Discord"
                    /></li
                  ></a>

                <a
                  href="https://github.com/iuricode"
                  rel="noopener"
                  target="_blank"
                ><li>
                    <img
                      src={github}
                      alt="Ícone do GitHub"
                    /></li
                  ></a>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}