import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3 className={styles.logo}>gasyor<span> arocisa.</span></h3>
          <p className={styles.desc}>Innovative and Natural-Based Aromatic Inhaler.</p>
        </div>
        <div className={styles.links}>
          <h4>navigation</h4>
          <ul>
            <li><a href="/">home</a></li>
            <li><a href="/products">products</a></li>
            <li><a href="/methodology">methodology</a></li>
            <li><a href="/team">our team</a></li>
            <li><a href="/poster">our poster</a></li>
          </ul>
        </div>
        <div className={styles.socials}>
          <h4>social media</h4>
          <ul>
            <li><a href="https://instagram.com">instagram</a></li>
            {/* <li><a href="/https://pinterest.com">pinterest</a></li> */}
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Gasyor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;