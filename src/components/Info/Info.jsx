import React, { useEffect, useRef } from "react";
import "./Info.css";

// Minimal inline SVG icons — no library dependency
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15.5 14.5" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const Info = () => {
  const hoursRef = useRef(null);
  const locationRef = useRef(null);

  useEffect(() => {
    const cards = [hoursRef.current, locationRef.current].filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="info-section">
      <div className="hours-col col" ref={hoursRef}>
        <h2 className="heading">
          <span className="heading-icon">
            <ClockIcon />
          </span>
          Opening Hours
        </h2>
        <div className="card-divider" />
        <div className="info-row">
          <p className="res-info">
            <strong>Mon – Fri</strong>
            11:30 AM – 11:30 PM
          </p>
          <p className="res-info">
            <strong>Sat – Sun</strong>
            11:30 AM – 11:30 PM
          </p>
        </div>
      </div>

      <div className="location-col col" ref={locationRef}>
        <h2 className="heading">
          <span className="heading-icon">
            <PinIcon />
          </span>
          Find Us
        </h2>
        <div className="card-divider" />
        <div className="info-row">
          <p className="res-info">
            Sco 7, Back Side, Sector 7-C, Sector 7, Chandigarh, 160019
          </p>
          <p className="res-info">
            <strong>Phone</strong>
            70873 00591
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
