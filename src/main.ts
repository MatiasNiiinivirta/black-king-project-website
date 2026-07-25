import "./style.css";
import typescriptLogo from "./assets/typescript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<!--
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${typescriptLogo}" class="framework" alt="TypeScript logo"/>
    <img src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started HOMO</h1>
    <p>Edit <code>src/main.ts</code> and save to test <code>HMR</code></p>
  </div>
  <button id="counter" type="button" class="counter"></button>
</section>
-->

<section>
<header class="top-header">
  <h1>Kirjan nimi</h1>
</header>
</section>

<div class="ticks"></div>

<section class="nav-section">
<nav>
      <ul class="parent">
        <li>
          <a href="#" class="nappi active" onclick="openTab(event, 'Kirjasta')">
            <span>Kirjasta</span>
          </a>
        </li>
        <li>
          <a href="#" class="nappi" onclick="openTab(event, 'Luekirjaa')">
            <span>Lue kirjaa</span>
          </a>
        </li>
        <li>
          <a href="#" class="nappi" onclick="openTab(event, 'Kartta')">
            <span>Kartta</span>
          </a>
        </li>
        <li>
          <a href="#" class="nappi" onclick="openTab(event, 'Otayhteytta')">
            <span>Ota yhteyttä</span>
          </a>
        </li>
      </ul>
</nav>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
    <div class="laatikko">
          <h1 class="otsikko">Mikä?</h1>
          <p>
            Musta kuningas on suomalainen fantasiakirjaprojekti. Tarinamme alkaa
            nuoresta Androksesta, joka on elänyt koko elämänsä oman huoneensa
            vankina. Androksen arki kokee kuitenkin pian rankan muutoksen, joka
            järisyttää hänen isänsä valtakuntaa pysyvästi. Yhdessä sisarensa,
            luotettavan hovimestarinsa ja juopoksi kääntyneen arkkivelhon kanssa
            täytyy prinssin löytää keino paeta murenevasta Lastian
            keisarikunnasta.
            <br />
            <br />
          </p>
          <h1 class="otsikko">Missä?</h1>
          <p>
            Masgos on maailma, joka on viimevuosisatojen aikana päässyt
            jaloilleen Mustan kuninkaan hirmuvallasta ja sen seurauksista.
            Keisari Malrin III:n hallitsema Lastian imperiumi pitää itseään
            menneiden aikojen ibrialaisten perijänä. Vanhaa länttä hallinneista
            ibrialaisista jäljellä ovat suuriksi osin vain rauniot ja legendat
            heidän uroteoistaan. Ibrian perintö elää kirkon kautta, joka
            perääntymättä julistaa jumalten ylivertaisuutta. Jumalten valittuina
            tunnetut voimakkaat maagit ja soturit paavin alaisuudessa pitävät
            kontrollissa kokonaisia valtioita. Kirkon katse on pitkään ollut
            Lastian keisarissa, joka on tuntunut unohtaneen jumalten
            merkityksen. Jos Mogurinen panteon - suuri ja absoluuttinen kirkko -
            saisi vihiä hänen poikansa noituudesta, voisi se sytyttää pyhän
            sodan. Sodan, jota Lastian vanhat viholliset ovat jo pitkään
            odottaneet.
            <br />
            <br />
          </p>
          <h1 class="otsikko">Miten?</h1>
          <p>
            Teos on ensimmäinen monen kirjan sarjassa. Suunnittelu alkoi vuonna
            2018 ja sisällön tuotanto varsinaisesti 2019. Inspiraation lähteitä
            on lukemattomia, mutta merkittävimmät niistä ovat synkkä
            keskiaikainen fantasia, jumaltarut, mystiikka ja noituus sekä
            modernien elementtien sekoittaminen edellä mainittuihin. Lastian
            keisarikunta on saanut suurimmat vaikutteensa Komnenosten Bysantista
            1200-luvulla, jossa hajoilevaa imperiumia yritetään pitää kasassa
            keinolla millä hyvänsä ja jossa vihollisia on niin sisällä kuin
            ulkopuolellakin.
            <br />
            <br />
          </p>
        </div>
    <p>Your questions, answered</p>
    <ul>
      <li>
        <a href="https://vite.dev/" target="_blank">
          <img class="logo" src="${viteLogo}" alt="" />
          Explore Vite
        </a>
      </li>
      <li>
        <a href="https://www.typescriptlang.org" target="_blank">
          <img class="button-icon" src="${typescriptLogo}" alt="">
          Learn more
        </a>
      </li>
    </ul>
  </div>
  <div id="social">

  
  </div>
</section>

<div class="ticks"></div>
<section id="spacer">
  <div id="social">
    <h2>Connect with us!</h2>
    <ul>
      <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
      <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
      <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
      <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
    </ul>
  </div></section>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
