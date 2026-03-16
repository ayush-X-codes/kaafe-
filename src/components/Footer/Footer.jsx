import React, { useEffect, useRef } from "react";
import "./Footer.css";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer-wrapper" ref={footerRef}>
      <div className="footer-content">
        <section>
          <p className="fot-heading">Kaafe</p>
          <div className="brand-rule" />
          <p className="footer-tagline" style={{ marginTop: "14px" }}>
            Modern Café & Comfort Food
          </p>
        </section>

        <section className="links-col">
          <p className="fot-heading">Quick Links</p>
          <Link to="/" className="fot-links">
            Home
          </Link>
          <Link to="/menu" className="fot-links">
            Menu
          </Link>
          <Link to="/contact" className="fot-links">
            Contact
          </Link>
        </section>

        <section>
          <p className="fot-heading">Contact Info</p>
          <div className="contact-info-box">
            <MapPin size={14} className="contact-icon" />
            <p className="contact-info">
              Ram Jhula, near Parmarth Niketan, Swarg Ashram, Rishikesh,
              Uttarakhand 249304
            </p>
          </div>
          <div className="contact-info-box">
            <Phone size={14} className="contact-icon" />
            <p className="contact-info"> 97608 31982</p>
          </div>
          <div className="contact-info-box">
            <Mail size={14} className="contact-icon" />
            <p className="contact-info"> kaafeindia@gmail.com</p>
          </div>
        </section>
      </div>

      <div className="copyright-wrapper">
        <p className="copyright">© 2026 Kaafe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
