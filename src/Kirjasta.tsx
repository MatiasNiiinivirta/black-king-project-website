import Kansikuva from "./Images/IMG_0147.jpeg";
import "./App.css";

type Props = {
  setActiveTab: (tab: string) => void;
};

function Kirjasta({ setActiveTab }: Props) {
  return (
    <>
      <section id="next-steps">
        <div id="docs">
          <div className="text-wrapper">
            <h2>Tervetuloa!</h2>

            <p>
              Musta Kuningas on suomalainen fantasiakirjaprojekti, joka vie
              lukijan synkkään ja yksityiskohtaiseen maailmaan, jossa
              valtakunnat horjuvat, muinaiset uskomukset elävät ja jokaisella
              valinnalla on seurauksensa. Tarina seuraa nuorta prinssi Androsta,
              jonka elämä muuttuu peruuttamattomasti tapahtumien syöstäessä
              Lastian keisarikunnan kohti kaaosta. Projekti on ollut
              kehityksessä vuodesta 2019 lähtien ja on suunniteltu usean kirjan
              mittaiseksi fantasiakirjasarjaksi.
            </p>
          </div>

          <div className="text-wrapper">
            <h2>Lue kirjaa tästä!</h2>

            <button
              className="book-button"
              onClick={() => setActiveTab("Luekirjaa")}
            >
              Lue kirjaa
            </button>
          </div>
        </div>

        <div id="social">
          <div className="image-wrapper">
            <img className="kansikuva" src={Kansikuva} alt="" />

            <div className="image-banner">
              <h2>"Ja minä?"</h2>
              <p>Kuiskasi poika</p>
            </div>

            <div className="image-banner2">
              <h2>"He ovat lampaita, jotka seuraavat sokeasti paimentaan"</h2>
              <p>Hykerteli metallinen ääni pojan päässä</p>
            </div>

            <div className="image-banner3">
              <h2>"Heidän suurin pelkonsa. Ihmiskunnan vihollinen."</h2>
              <p>Vastasi Baalzahad, jumalista mustin</p>
            </div>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

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

export default Kirjasta;
