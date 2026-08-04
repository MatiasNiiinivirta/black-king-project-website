import "./App.css";

type Props = {
  setActiveTab: (tab: string) => void;
  language: "fi" | "en";
};

function LueKirjaaSivu({ setActiveTab, language }: Props) {
  return (
    <>
      <section id="next-steps">
        <div id="docs">
          <div className="text-wrapper">
            <h2>
              {language === "fi"
                ? "Tervetuloa lukemaan kirjaa!"
                : "Welcome to reading the book!"}
            </h2>
            <p>
              {language === "fi"
                ? "Tällä sivulla voit lukea ilmaiseksi kirjan kaksi ensimmäistä lukua ja tutustua Mustan Kuninkaan maailmaan."
                : "On this page, you can read the first two chapters of the book for free and explore the world of Musta Kuningas."}
            </p>
          </div>
        </div>
      </section>

      <section id="spacer">
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-links">
              <a href="#">{language === "fi" ? "FAQ" : "FAQ"}</a>
              <a href="#">
                {language === "fi" ? "Tietosuojaseloste" : "Privacy Policy"}
              </a>
              <a href="#">{language === "fi" ? "Evästeet" : "Cookies"}</a>
            </div>
          </div>

          <div className="footer-bottom-row">
            <div className="footer-bottom">
              {language === "fi"
                ? "© 2026 Musta Kuningas. Kaikki oikeudet pidätetään."
                : "© 2026 Musta Kuningas. All rights reserved."}
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

export default LueKirjaaSivu;
