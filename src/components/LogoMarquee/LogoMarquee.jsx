import React from 'react';
import styles from './LogoMarquee.module.css';

const logoList = [
  { 
    id: 1, 
    src: '/assets/asociation_logo/iid.webp', 
    alt: 'Partner / Organization 1',
    link: 'https://iid-official.com/' // Isi link website di sini
  },
  { 
    id: 2, 
    src: '/assets/asociation_logo/innopa.webp', 
    alt: 'Partner / Organization 2',
    link: 'https://innopa.org/'
  },
  { 
    id: 3, 
    src: '/assets/asociation_logo/wintex.webp', 
    alt: 'Partner / Organization 3',
    link: 'https://iid-official.com/wintex/'
  },
  { 
    id: 4, 
    src: '/assets/asociation_logo/iyia.webp', 
    alt: 'Partner / Organization 4',
    link: 'https://iid-official.com/iyia/'
  },
  { 
    id: 5, 
    src: '/assets/asociation_logo/wiia.png', 
    alt: 'Partner / Organization 5',
    link: 'https://www.wiipa.world/'
  },
  { 
    id: 6, 
    src: '/assets/asociation_logo/ifia.webp', 
    alt: 'Partner / Organization 6',
    link: 'https://ifia.com/'
  },
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
                <a 
                  href={logo.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.logoLink}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={styles.logoImg}
                    loading="lazy" 
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LogoMarquee;