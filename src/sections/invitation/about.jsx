import React from "react";
import { FaClock } from "react-icons/fa6";
import { BsTicketDetailed } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { useLanguage } from "../../context/language";

const About = () => {
  const { t } = useLanguage();
  return (
    <section className="about">
      <div className="reveal">
        <div className="about-label">{t.about.title}</div>
        <h2
          style={{
            color: "var(--volcano)",
          }}
        >
          {t.about.subtitle}
        </h2>
        {/* <div className="divider"></div> */}
        <p style={{ marginTop: "20px" }}>{t.about.paragraph_01}</p>
        <p style={{ marginTop: "16px" }}>{t.about.paragraph_02}</p>
      </div>
      <div className="detail-cards reveal" style={{ transitionDelay: "0.15s" }}>
        <div className="detail-card">
          <div className="detail-icon dc-coral">
            <FaCalendarDays />
          </div>
          <div>
            <div className="detail-card-label">Date</div>
            <div className="detail-card-value"> {t.about.date}</div>
          </div>
        </div>
        <div className="detail-card">
          <div className="detail-icon dc-yellow">
            <FaClock />
          </div>
          <div>
            <div className="detail-card-label">Time</div>
            <div className="detail-card-value">{t.about.time}</div>
          </div>
        </div>
        <div className="detail-card">
          <div className="detail-icon dc-teal">
            <FaLocationDot />
          </div>
          <div>
            <div className="detail-card-label">Venue</div>
            <div className="detail-card-value">{t.about.venue}</div>
          </div>
        </div>
        <div className="detail-card">
          <div className="detail-icon dc-purple">
            <FaAddressBook />
          </div>
          <div>
            <div className="detail-card-label">Dress Code</div>
            <div className="detail-card-value">{t.about.dress_code}</div>
          </div>
        </div>
        <div className="detail-card">
          <div className="detail-icon dc-coral">
            <BsTicketDetailed />
          </div>
          <div>
            <div className="detail-card-label">Parking</div>
            <div className="detail-card-value">{t.about.parking}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
