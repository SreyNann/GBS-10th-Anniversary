import React from "react";
import { useLanguage } from "../../context/language";
import { addGuest2, removeGuest2, submitRSVP } from "../../utils/script";
import { useLocation } from "react-router-dom";

const RSVP = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const isVip = location.pathname.includes("/vip");

  return (
    <section className="rsvp-section" id="rsvp">
      <div className="rsvp-card reveal">
        <div id="form-wrapper">
          <div className="rsvp-header">
            <h2>{t.rsvp.title}</h2>
          </div>

          {/* <!-- GUEST 1 --> */}
          <div className="guest-block">
            <div className="guest-block-header">
              <span className="guest-tag">{t.rsvp.primary_guest.header}</span>
            </div>
            <div className="form-group">
              <label className="form-label">
                {t.rsvp.company.label} <span>*</span>
              </label>
              <input
                className="form-input"
                id="business"
                placeholder={t.rsvp.company.placeholder}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  {t.rsvp.primary_guest.name.label}
                  <span>*</span>
                </label>
                <input
                  className="form-input"
                  id="g1name"
                  placeholder={t.rsvp.primary_guest.name.placeholder}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  {t.rsvp.primary_guest.title.label}
                </label>
                <input
                  className="form-input"
                  id="g1title"
                  placeholder={t.rsvp.primary_guest.title.placeholder}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">
                {t.rsvp.primary_guest.email.label} <span>*</span>
              </label>
              <input
                className="form-input"
                type="email"
                id="g1email"
                placeholder={t.rsvp.primary_guest.email.placeholder}
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                {t.rsvp.primary_guest.tel.label} <span>*</span>
              </label>
              <input
                className="form-input"
                type="tel"
                id="g1tel"
                placeholder={t.rsvp.primary_guest.tel.placeholder}
              />
            </div>
          </div>

          {/* <!-- GUEST 2 --> */}
          <div className="guest-block" id="g2block" style={{ display: "none" }}>
            <div className="guest-block-header">
              <span className="guest-tag g2">
                {t.rsvp.secondary_guest.header}
              </span>
              <button className="remove-btn" onClick={removeGuest2}>
                ✕
              </button>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  {t.rsvp.secondary_guest.name.label}
                  <span>*</span>
                </label>
                <input
                  className="form-input"
                  id="g2name"
                  placeholder={t.rsvp.secondary_guest.name.placeholder}
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  {t.rsvp.secondary_guest.title.label}
                </label>
                <input
                  className="form-input"
                  id="g2title"
                  placeholder={t.rsvp.secondary_guest.title.placeholder}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">
                {t.rsvp.secondary_guest.email.label}
              </label>
              <input
                className="form-input"
                type="email"
                id="g2email"
                placeholder={t.rsvp.secondary_guest.email.placeholder}
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                {t.rsvp.secondary_guest.tel.label}
              </label>
              <input
                className="form-input"
                type="tel"
                id="g2tel"
                placeholder={t.rsvp.secondary_guest.tel.placeholder}
              />
            </div>
          </div>

          <div className="max-note" id="max-note">
            ⚠️ Maximum of <strong>2 guests</strong> per submission reached.
            <input
              type="number"
              id="guest"
              defaultValue="1"
              style={{ display: "none" }}
            />
          </div>

          {isVip && (
            <button className="add-guest-btn" id="add-btn" onClick={addGuest2}>
              ＋ {t.rsvp.btn.add_guest.label}
            </button>
          )}

          <div className="form-group">
            <label className="form-label">
              {t.rsvp.attendance.label} <span>*</span>
            </label>
            <div className="radio-group">
              <label className="radio-opt attend">
                <input type="radio" name="att" value="yes" />{" "}
                {t.rsvp.attendance.yes}
              </label>
              <label className="radio-opt decline">
                <input type="radio" name="att" value="no" />{" "}
                {t.rsvp.attendance.no}
              </label>
            </div>
          </div>

          <div className="consent-section" id="consent-form">
            <h3>Consent Statement</h3>
            <div>
              <input
                type="checkbox"
                id="accurate"
                style={{ marginRight: 16 }}
              />
              {t.rsvp.consent.primary}
            </div>
            <div>
              <input type="checkbox" id="consent" style={{ marginRight: 16 }} />
              {t.rsvp.consent.secondary}
            </div>
          </div>

          <button className="submit-btn" onClick={submitRSVP}>
            {t.rsvp.btn.submit.label} →
          </button>
        </div>

        <div className="success-msg" id="success-msg">
          <div className="success-icon">🎉</div>
          <h3>Your response has been recorded!</h3>
          <p>
            Thanks <strong id="cname"></strong>, your RSVP is received.
            <br />
            Confirmation sent to <strong id="cemail"></strong>.<br />
            <br />
            See you on
            <strong>14 August 2026</strong>!
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
