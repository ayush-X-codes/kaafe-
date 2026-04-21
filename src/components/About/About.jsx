import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const sectionRef = useRef(null);

  // Scroll-triggered reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <p className="about-label">Our Story</p>

      <h2 className="about-heading">
        A Modern Café Experience,
        <br />
        Crafted for Chandigarh
      </h2>

      <div className="about-divider" />

      <div className="about-stats">
        <div className="stat-pill">
          <span className="stat-number">3.9★</span>
          <span className="stat-label">Customer Rating</span>
        </div>
        <div className="stat-pill">
          <span className="stat-number">800+</span>
          <span className="stat-label">Happy Reviews</span>
        </div>
        <div className="stat-pill">
          <span className="stat-number">3 Ways</span>
          <span className="stat-label">Dine • Drive • Deliver</span>
        </div>
      </div>

      <div className="about-body">
        <p className="para-about">
          Located on Sco 7, Back Side, Sector 7-C, Sector 7, Chandigarh, 160019,
           <strong> Wild Thyme</strong> has become a favorite
          neighborhood café where comfort meets convenience. Whether you're
          dining in with friends, grabbing a quick drive-through bite, or
          ordering from home, we make every experience smooth and satisfying.
        </p>
        <p className="para-about">
          With over a eight hundred sixty five customer reviews and a reputation for
          consistency, Wild Thyme is known for its welcoming
          atmosphere and inclusive environment. It’s a place where conversations
          flow, cravings are satisfied, and every visit feels relaxed and easy.
        </p>
      </div>

      <p className="about-signature">— Team Wild Thyme </p>
    </section>
  );
};

export default About;
