import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll for subtle background shift
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path);

  return (
    <nav className={`wrapper${scrolled ? ' scrolled' : ''}`}>
      <div className='resturent-name'>Wild Thyme</div>


      <div
        className={`hamburger-bars ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
      >
        <span />
        <span />
        <span />
      </div>


      <ul className={`nav-links ${isOpen ? 'active' : ''}`} role="list">
        <li>
          <Link
            to="/"
            onClick={closeMenu}
            className={isActive('/') ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            onClick={closeMenu}
            className={isActive('/menu') ? 'active' : ''}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={isActive('/contact') ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
        <li id="order-btn">
          <Link to="/order" onClick={closeMenu}>
            Order Now
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
