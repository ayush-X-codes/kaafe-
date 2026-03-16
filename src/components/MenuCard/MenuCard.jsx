import React, { useEffect, useRef } from "react";
import "./MenuCard.css";
import { menuData } from "../../data/menuData";

// Scroll-reveal hook for each category section
const useReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};

// Individual section with its own observer ref
const CategorySection = ({ cat }) => {
  const ref = useReveal();
  const items = menuData.filter((item) => item.category === cat);

  return (
    <section key={cat} className="category-section" ref={ref}>
      <h2 className="cat-name">{cat}</h2>
      <div className="heading-line" />

      <div className="menu-grid">
        {items.map((item) => (
          <div key={item.id} className="menu-card">
            <div className="card-image">
              <img src={item.image} alt={item.name} loading="lazy" />
            </div>
            <div className="card-content">
              <p className="item-name">{item.name}</p>
              <p className="item-description">{item.description}</p>
              <div className="card-footer">
                <p className="item-price">{item.price}</p>
                <span className="order-tag">Order</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const MenuCard = () => {
  const categories = ["Appetizers", "Mains", "Desserts"];

  return (
    <div className="menu-wrapper">
      <p className="menu-page-label">Kaafe Restaurant</p>
      <h1 className="title">Our Menu</h1>
      <div className="title-rule" />

      {categories.map((cat) => (
        <CategorySection key={cat} cat={cat} />
      ))}
    </div>
  );
};

export default MenuCard;
