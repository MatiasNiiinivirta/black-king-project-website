import Kansikuva from "./Images/IMG_0147.jpeg";
import Kuva1 from "./Images/IMG_0141.jpeg";
import "./App.css";

type Props = {
  setActiveTab: (tab: string) => void;
  language: "fi" | "en";
};

function Kirjasta({ setActiveTab, language }: Props) {
  return (
    <>
      <section id="next-steps">
        <div id="docs">
          <div className="text-wrapper">
            <h2> {language === "fi" ? "Tervetuloa!" : "Welcome!"}</h2>
            <p>
              {language === "fi"
                ? "Musta Kuningas on suomalainen fantasiakirjaprojekti, joka vie lukijan synkkään ja yksityiskohtaiseen maailmaan, jossa valtakunnat horjuvat, muinaiset uskomukset elävät ja jokaisella valinnalla on seurauksensa. Tarina seuraa nuorta prinssi Androsta, jonka elämä muuttuu peruuttamattomasti tapahtumien syöstäessä Lastian keisarikunnan kohti kaaosta. Projekti on ollut kehityksessä vuodesta 2019 lähtien ja on suunniteltu usean kirjan mittaiseksi fantasiakirjasarjaksi."
                : "Musta Kuningas is a Finnish fantasy novel project that takes readers to a dark and detailed world where empires waver, ancient beliefs live on, and every choice has consequences. The story follows the young prince Androsta, whose life changes irrevocably as events push the Lastian empire toward chaos. The project has been in development since 2019 and is planned as a multi-book fantasy series."}
            </p>
          </div>

          <div className="text-wrapper">
            <h2>
              {language === "fi" ? "Lue kirjaa tästä!" : "Read the Book!"}
            </h2>

            <div className="image-wrapper">
              <img className="kuva1" src={Kuva1} alt="" />
            </div>

            <button
              className="book-button"
              onClick={() => setActiveTab("Luekirjaa")}
            >
              {language === "fi" ? "Lue kirjaa" : "Read the Book"}
            </button>
          </div>
        </div>

        <div id="social">
          <div className="image-wrapper">
            <img className="kansikuva" src={Kansikuva} alt="" />

            <div className="image-banner">
              <h2>{language === "fi" ? "Ja minä?" : "And me?"}</h2>
              <p>
                {language === "fi" ? "Kuiskasi poika" : "Whispered the boy"}
              </p>
            </div>

            <div className="image-banner2">
              <h2>
                {language === "fi"
                  ? "He ovat lampaita, jotka seuraavat sokeasti paimentaan"
                  : "They are sheep that follow their shepherd blindly"}
              </h2>
              <p>
                {language === "fi"
                  ? "Hykerteli metallinen ääni pojan päässä"
                  : "The metallic voice echoed in the boy's head"}
              </p>
            </div>

            <div className="image-banner3">
              <h2>
                {language === "fi"
                  ? "Heidän suurin pelkonsa. Ihmiskunnan vihollinen."
                  : "Their greatest fear. The enemy of mankind."}
              </h2>
              <p>
                {language === "fi"
                  ? "Vastasi Baalzahad, jumalista mustin"
                  : "Responded Baalzahad, the god of darkness"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

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

export default Kirjasta;
