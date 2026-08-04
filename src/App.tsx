import { useState } from "react";
import Kirjasta from "./Kirjasta";
import KarttaSivu from "./Kartta";
import YhteystiedotSivu from "./Yhteystiedot";
import LuekirjaaSivu from "./LueKirjaa";
import GBFlag from "./assets/gb.svg";
import FIFlag from "./assets/fi.svg";
import logoFIN from "./Images/logo1_fin.png";
import logoENG from "./Images/logo1_eng.png";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Kirjasta");
  const [language, setLanguage] = useState<"fi" | "en">("fi");
  return (
    <>
      <section>
        <header className="top-header">
          <div className="logo-wrapper">
            <img
              className="logo"
              src={language === "fi" ? logoFIN : logoENG}
              alt="Logo"
            />
          </div>
        </header>
      </section>

      <div className="ticks"></div>

      <section className="nav-section">
        <nav>
          <ul className="parent">
            <li>
              <a
                href="#"
                className={`nappi ${activeTab === "Kirjasta" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("Kirjasta");
                }}
              >
                {language === "fi" ? "Kirjasta" : "About the Book"}
              </a>
            </li>

            <li>
              <a
                href="#"
                className={`nappi ${activeTab === "Luekirjaa" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("Luekirjaa");
                }}
              >
                {language === "fi" ? "Lue kirjaa" : "Read the Book"}
              </a>
            </li>

            <li>
              <a
                href="#"
                className={`nappi ${activeTab === "Kartta" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("Kartta");
                }}
              >
                {language === "fi" ? "Kartta" : "Map"}
              </a>
            </li>

            <li>
              <a
                href="#"
                className={`nappi ${activeTab === "Yhteystiedot" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("Yhteystiedot");
                }}
              >
                {language === "fi" ? "Ota yhteyttä" : "Contact"}
              </a>
            </li>
          </ul>

          <div className="language-switcher">
            <button
              className={`language-button ${language === "fi" ? "active" : ""}`}
              onClick={() => setLanguage("fi")}
            >
              <img src={FIFlag} alt="Finnish Flag" className="flag-icon" />
            </button>
            <button
              className={`language-button ${language === "en" ? "active" : ""}`}
              onClick={() => setLanguage("en")}
            >
              <img src={GBFlag} alt="English Flag" className="flag-icon" />
            </button>
          </div>
        </nav>
      </section>

      <div className="ticks"></div>

      {activeTab === "Kirjasta" && (
        <Kirjasta setActiveTab={setActiveTab} language={language} />
      )}

      {activeTab === "Luekirjaa" && (
        <LuekirjaaSivu setActiveTab={setActiveTab} language={language} />
      )}

      {activeTab === "Kartta" && (
        <KarttaSivu setActiveTab={setActiveTab} language={language} />
      )}

      {activeTab === "Yhteystiedot" && (
        <YhteystiedotSivu setActiveTab={setActiveTab} language={language} />
      )}
    </>
  );
}

export default App;
