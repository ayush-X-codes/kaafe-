import React, { useState } from "react";
import "./ContactUs.css";
import { MapPin, Smartphone, Mail } from "lucide-react";

const subjects = ["Reservation", "Private Event", "Feedback", "Other"];

const ContactUs = () => {
  const [activeChip, setActiveChip] = useState(null);

  return (
    <div className="contact-wrapper">

      {/* ── LEFT: Brand + Info ── */}
      <div className="contact-left">
        <span className="contact-brand-name">Kaafe — Best & Widest</span>

        <h1 className="contact-headline">
          Let's<br />
          <em>talk</em> over<br />
          a meal.
        </h1>

        <p className="contact-tagline">
          Whether you're planning a special evening or simply have a question —
          we'd love to hear from you.
        </p>

        {/* Contact info rows */}
        <div className="contact-info-list">
          <div className="info-item">
            <div className="info-icon-wrap">
              <MapPin />
            </div>
            <div className="info-text">
              <span className="info-label">Address</span>
              <span className="info-value">Ram Jhula, near Parmarth Niketan,<br /> Swarg Ashram, Rishikesh, Uttarakhand 249304</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-wrap">
              <Smartphone />
            </div>
            <div className="info-text">
              <span className="info-label">Phone</span>
              <span className="info-value">097608 31982</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-wrap">
              <Mail />
            </div>
            <div className="info-text">
              <span className="info-label">Email</span>
              <span className="info-value">kaafeindia@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="hours-block">
          <span className="hours-label">Opening Hours</span>
          <div className="hours-row">
            <span className="hours-day">Monday – Friday</span>
            <span className="hours-time">8:30 AM – 10:30 PM</span>
          </div>
          <div className="hours-row">
            <span className="hours-day">Saturday – Sunday</span>
            <span className="hours-time">8:30 AM – 10:30 PM</span>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Form ── */}
      <div className="contact-right">
        <p className="form-eyebrow">Send a message</p>
        <h2 className="form-title">We'd love to<br />hear from you.</h2>
        <p className="form-subtitle">
          Fill out the form and our team will get back to you within 24 hours.
        </p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>

          {/* Name + Email row */}
          <div className="field-row">
            <div className="field-group">
              <label className="contact-label" htmlFor="name">Name</label>
              <input
                className="contact-input"
                id="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>
            <div className="field-group">
              <label className="contact-label" htmlFor="email">Email</label>
              <input
                className="contact-input"
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div className="field-group">
            <label className="contact-label" htmlFor="phone">Phone</label>
            <input
              className="contact-input"
              id="phone"
              type="tel"
              placeholder="(555) 000-0000"
            />
          </div>

          {/* Subject chips */}
          <div className="field-group">
            <label className="contact-label">Subject</label>
            <div className="subject-chips">
              {subjects.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`chip${activeChip === s ? " active" : ""}`}
                  onClick={() => setActiveChip(activeChip === s ? null : s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="field-group">
            <label className="contact-label" htmlFor="message">Message</label>
            <textarea
              className="contact-input message-box"
              id="message"
              name="message"
              placeholder="Tell us how we can help…"
            />
          </div>

          <button className="btn-submit" type="submit">
            Send Message
          </button>

        </form>
      </div>

    </div>
  );
};

export default ContactUs;

