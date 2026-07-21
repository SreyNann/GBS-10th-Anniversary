import {
  FaClock,
  FaCalendarDays,
  FaLocationDot,
  FaAddressBook,
} from "react-icons/fa6";
import bgImage from "./../../assets/background.jpg";
import { useLanguage } from "../../context/language";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section
      className="hero"
      id="top"
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="badge">✦ {t.hero.invite}</div>
      <div className="hero-title-gap">
        <h1 className="hero-title">{t.hero.subtitle_01}</h1>

        <h1 className="hero-title">{t.hero.subtitle_02}</h1>

        <h1 className="hero-title">{t.hero.subtitle_03}</h1>
      </div>

      <p className="hero-sub">{t.hero.paragraph}</p>
      <div className="pill-row">
        <div className="pill">
          <FaCalendarDays />
          {t.hero.date}
        </div>
        <div className="pill">
          <FaClock />
          {t.hero.time}
        </div>
        <div className="pill">
          <FaLocationDot />
          {t.hero.venue}
        </div>
        <div className="pill">
          <FaAddressBook />
          {t.hero.dress_code}
        </div>
      </div>

      <div>
        <a href="#rsvp" className="cta-btn">
          RSVP Now ↓
        </a>
        <p className="note">{t.hero.deadline}</p>
      </div>
    </section>
  );
};

export default Hero;
