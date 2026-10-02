import React, { useState } from 'react';
import styles from './MascotWidget.module.css';

export default function MascotWidget() {
  // Array berisi 3 gambar maskot yang akan berganti-ganti saat diklik
  const mascotList = [
    '/assets/mascot/karakter_arocisa_no_bg.png',
    '/assets/mascot/mascot_senyum.png',
    '/assets/mascot/mascot_sedih.png',
  ];

  // State index gambar untuk maskot kiri dan kanan
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1);

  // Function pergantian gambar siklik
  const handleLeftClick = () => {
    setLeftIndex((prevIndex) => (prevIndex + 1) % mascotList.length);
  };

  const handleRightClick = () => {
    setRightIndex((prevIndex) => (prevIndex + 1) % mascotList.length);
  };

  return (
    <>
      {/* Maskot Elemen 1 (Kiri) */}
      <div className={`${styles.mascotContainer} ${styles.mascotLeft}`}>
        <div className={styles.imageWrapper} onClick={handleLeftClick}>
          <img
            src={mascotList[leftIndex]}
            alt="Interactive Mascot Left"
            className={styles.mascotImg}
          />
        </div>
        <span className={styles.hintTooltip}>✨ Click me!</span>
      </div>

      {/* Maskot Elemen 2 (Kanan) */}
      <div className={`${styles.mascotContainer} ${styles.mascotRight}`}>
        <div className={styles.imageWrapper} onClick={handleRightClick}>
          <img
            src={mascotList[rightIndex]}
            alt="Interactive Mascot Right"
            className={styles.mascotImg}
          />
        </div>
        <span className={styles.hintTooltip}>👆 Tap to change!</span>
      </div>
    </>
  );
}