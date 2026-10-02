import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          gasyor<span> arocisa.</span>
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button 
          className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Navigation Links */}
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink 
              to="/products" 
              className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
              onClick={closeMenu}
            >
              Product
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink 
              to="/methodology" 
              className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
              onClick={closeMenu}
            >
              Methodology
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink 
              to="/team" 
              className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
              onClick={closeMenu}
            >
              Our Team
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink 
              to="/poster" 
              className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
              onClick={closeMenu}
            >
              Our Poster
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;