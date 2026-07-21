import "../sections/style.css";
import { useEffect } from "react";
import Hero from "../sections/invitation/hero";
import About from "../sections/invitation/about";
import Agenda from "../sections/invitation/agenda";
import RSVP from "../sections/invitation/rsvp";
import Navigation from "../components/navigation";
import { useLanguage } from "../context/language";

const Invitation = () => {
  const { language } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = language;
    // ── SCROLL REVEAL ─────────────────────────────
    const obs = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((r) => obs.observe(r));
  }, [language]);

  return (
    <>
      <Navigation />

      {/* <!-- ── HERO ── --> */}
      <Hero />

      {/* <!-- ── ABOUT ── --> */}
      <About />

      {/* <!-- ── AGENDA ── --> */}
      <Agenda />

      {/* <!-- ── RSVP ── --> */}
      <RSVP />

      <footer>
        <p style={{ marginTop: "8px", opacity: "0.5" }}>
          © 2026 GBS 10th Anniversary Celebration. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Invitation;
