import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3 className={styles.logo}>Natura<span>.</span></h3>
          <p className={styles.desc}>Harmonizing natural beauty into every corner of your everyday space.</p>
        </div>
        <div className={styles.links}>
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Collections</a></li>
            <li><a href="/about">Our Story</a></li>
          </ul>
        </div>
        <div className={styles.socials}>
          <h4>Social Media</h4>
          <ul>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#pinterest">Pinterest</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Natura. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;