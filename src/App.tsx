import { useState } from "react";
import Kirjasta from "./Kirjasta";
import KarttaSivu from "./Kartta";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Kirjasta");

  return (
    <>
      <section>
        <header className="top-header">
          <h1>Musta Kuningas</h1>
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
                Kirjasta
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
                Lue kirjaa
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
                Kartta
              </a>
            </li>

            <li>
              <a
                href="#"
                className={`nappi ${activeTab === "Otayhteytta" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("Otayhteytta");
                }}
              >
                Ota yhteyttä
              </a>
            </li>
          </ul>
        </nav>
      </section>

      <div className="ticks"></div>

      {activeTab === "Kirjasta" && <Kirjasta setActiveTab={setActiveTab} />}

      {activeTab === "Luekirjaa" && (
        <>
          <div>
            <h2>Lue kirjaa</h2>
            <p>Tervetuloa lukemaan kirjaa!</p>
          </div>
        </>
      )}

      {activeTab === "Kartta" && <KarttaSivu setActiveTab={setActiveTab} />}

      {activeTab === "Otayhteytta" && (
        <>
          <div>
            <h2>Ota yhteyttä</h2>
            <p>Tervetuloa ottamaan yhteyttä!</p>
          </div>
        </>
      )}
    </>
  );
}

export default App;
