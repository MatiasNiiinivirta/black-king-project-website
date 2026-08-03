import Kartta from "./Images/Kartta_Musta_Kuningas_Lasdor.png";
import "./App.css";

type Props = {
  setActiveTab: (tab: string) => void;
};

function KarttaSivu({ setActiveTab }: Props) {
  return (
    <>
      <div className="social">
        <div className="image-wrapper">
          <img className="kartta" src={Kartta} alt="" />
        </div>
      </div>

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

export default KarttaSivu;
