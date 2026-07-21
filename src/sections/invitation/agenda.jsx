import React from "react";
import bgImage from "./../../assets/background.svg";
import { useLanguage } from "../../context/language";

const Agenda = () => {
  const { t } = useLanguage();
  return (
    <section
      className="agenda-section"
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="section-header reveal">
        <h2 style={{ color: "var(--white)" }}>Agenda</h2>
        {/* <p>A carefully curated day designed to deepen our connections.</p> */}
      </div>
      <div className="agenda-grid">
        <div className="agenda-item reveal">
          <div className="agenda-time">17:30</div>
          <div style={{ display: "flex" }}>
            <div className="agenda-line">
              {/* <div
                className="agenda-dot"
                style={{ background: "var(--yellow)" }}
              ></div> */}
              <div className="agenda-connector"></div>
            </div>
            <div className="agenda-content">
              <div className="agenda-title">{t.agenda.item1}</div>
            </div>
          </div>
        </div>
        <div className="agenda-item reveal" style={{ transitionDelay: "0.1s" }}>
          <div className="agenda-time">18:15</div>
          <div style={{ display: "flex" }}>
            <div className="agenda-line">
              {/* <div
                className="agenda-dot"
                style={{ background: "var(--volcano)" }}
              ></div> */}
              <div className="agenda-connector"></div>
            </div>
            <div className="agenda-content">
              <div className="agenda-title">{t.agenda.item2}</div>
            </div>
          </div>
        </div>
        <div className="agenda-item reveal" style={{ transitionDelay: "0.2s" }}>
          <div className="agenda-time">18:30</div>
          <div style={{ display: "flex" }}>
            <div className="agenda-line">
              {/* <div
                className="agenda-dot"
                style={{ background: "var(--teal)" }}
              ></div> */}
              <div className="agenda-connector"></div>
            </div>
            <div className="agenda-content">
              <div className="agenda-title">{t.agenda.item3}</div>
            </div>
          </div>
        </div>
        <div className="agenda-item reveal" style={{ transitionDelay: "0.3s" }}>
          <div className="agenda-time">19:00</div>
          <div style={{ display: "flex" }}>
            <div className="agenda-line">
              {/* <div
                className="agenda-dot"
                style={{ background: "var(--yellow)" }}
              ></div> */}
              <div className="agenda-connector"></div>
            </div>
            <div className="agenda-content">
              <div className="agenda-title">{t.agenda.item4}</div>
            </div>
          </div>
        </div>
        <div className="agenda-item reveal" style={{ transitionDelay: "0.4s" }}>
          <div className="agenda-time">19:15</div>
          <div style={{ display: "flex" }}>
            <div className="agenda-line">
              {/* <div
                className="agenda-dot"
                style={{ background: "var(--purple)" }}
              ></div> */}
              <div className="agenda-connector"></div>
            </div>
            <div className="agenda-content">
              <div className="agenda-title">{t.agenda.item5}</div>
            </div>
          </div>
        </div>
        <div className="agenda-item reveal" style={{ transitionDelay: "0.5s" }}>
          <div className="agenda-time">21:00</div>
          <div style={{ display: "flex" }}>
            <div className="agenda-line">
              {/* <div
                className="agenda-dot"
                style={{ background: "var(--volcano)" }}
              ></div> */}
              <div className="agenda-connector"></div>
            </div>
            <div className="agenda-content">
              <div className="agenda-title">{t.agenda.item6}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
