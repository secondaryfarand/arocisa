import React from 'react';
import styles from './LogoMarquee.module.css';

const logoList = [
  { id: 1, src: '/assets/asociation_logo/iid.webp', alt: 'Partner / Organization 1' },
  { id: 2, src: '/assets/asociation_logo/innopa.webp', alt: 'Partner / Organization 2' },
  { id: 3, src: '/assets/asociation_logo/wintex.webp', alt: 'Partner / Organization 3' },
  { id: 4, src: '/assets/asociation_logo/iyia.webp', alt: 'Partner / Organization 4' },
  { id: 5, src: '/assets/asociation_logo/wiia.png', alt: 'Partner / Organization 5' },
  { id: 6, src: '/assets/asociation_logo/ifia.webp', alt: 'Partner / Organization 6' },
];

const LogoMarquee = () => {
  // Duplikasi 4x agar total panjang deretan logo pasti melebihi lebar layar monitor terluas
  const quadruplicatedLogos = [
    ...logoList, 
    ...logoList, 
    ...logoList, 
    ...logoList
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <p className={styles.label}>PARTICIPATING & RECOGNIZED AT</p>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {quadruplicatedLogos.map((logo, index) => (
              <div key={`${logo.id}-${index}`} className={styles.logoCard}>
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className={styles.logoImg}
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LogoMarquee;