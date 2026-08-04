import Kuva2 from "./Images/IMG_0137.jpeg";
import "./App.css";

type Props = {
  setActiveTab: (tab: string) => void;
  language: "fi" | "en";
};

function YhteystiedotSivu({ setActiveTab, language }: Props) {
  return (
    <>
      <section id="next-steps">
        <div id="docs">
          <div className="image-wrapper">
            <img className="kuva2" src={Kuva2} alt="" />
          </div>
        </div>

        <div id="socials">
          <div className="text-wrapper">
            <h2>
              {language === "fi" ? "Yhteystiedot" : "Contact Information"}
            </h2>

            <div className="contact-text">
              <p>
                {language === "fi"
                  ? "Jos sinulla on kysyttävää, palautetta tai haluat ottaa yhteyttä Mustan Kuninkaan tiimiin, voit käyttää alla olevia yhteystietoja."
                  : "If you have any questions, feedback, or would like to get in touch with the Musta Kuningas team, you can use the contact information below."}
              </p>
              <p>
                {language === "fi"
                  ? "Sähköposti: mustakunigas@example.com"
                  : "Email: mustakunigas@example.com"}
              </p>
            </div>
            <div className="socials">
              <ul>
                <li>
                  <a href="https://github.com/vitejs/vite" target="_blank">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#github-icon"></use>
                    </svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://chat.vite.dev/" target="_blank">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#discord-icon"></use>
                    </svg>
                    Discord
                  </a>
                </li>
                <li>
                  <a href="https://x.com/vite_js" target="_blank">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#x-icon"></use>
                    </svg>
                    X.com
                  </a>
                </li>
                <li>
                  <a href="https://bsky.app/profile/vite.dev" target="_blank">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#bluesky-icon"></use>
                    </svg>
                    Bluesky
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="spacer">
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-links">
              <a href="#">FAQ</a>
              <a href="#">Tietosuojaseloste</a>
              <a href="#">Evästeet</a>
            </div>
          </div>

          <div className="footer-bottom-row">
            <div className="footer-bottom">
              © 2026 Musta Kuningas. Kaikki oikeudet pidätetään.
            </div>

            <div id="socials">
              <ul>
                <li>
                  <a href="https://github.com/vitejs/vite" target="_blank">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#github-icon"></use>
                    </svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://chat.vite.dev/" target="_blank">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#discord-icon"></use>
                    </svg>
                    Discord
                  </a>
                </li>
                <li>
                  <a href="https://x.com/vite_js" target="_blank">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#x-icon"></use>
                    </svg>
                    X.com
                  </a>
                </li>
                <li>
                  <a href="https://bsky.app/profile/vite.dev" target="_blank">
                    <svg
                      className="button-icon"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <use href="/icons.svg#bluesky-icon"></use>
                    </svg>
                    Bluesky
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default YhteystiedotSivu;
