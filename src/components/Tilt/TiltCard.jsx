// TiltCard.jsx
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import styles from "./Tilt.module.css";

export default function TiltCard() {
  const tiltRef = useRef(null);

  useEffect(() => {
    const node = tiltRef.current;
    
    // Inisialisasi Vanilla-Tilt pada elemen DOM
    VanillaTilt.init(node, {
      max: 25,          // Maksimal sudut kemiringan (derajat)
      speed: 400,       // Kecepatan transisi saat kursor bergerak
      glare: true,      // Menambahkan efek kilau cahaya (glare)
      "max-glare": 0.5, // Intensitas maksimal kilau cahaya
      scale: 1.05,      // Efek zoom sedikit saat di-hover
    });

    // Cleanup function saat komponen di-unmount
    return () => {
      if (node && node.vanillaTilt) {
        node.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div ref={tiltRef} className={styles.tiltCard}>
        <div>
          <h2 className={styles.cardTitle}>Efek 3D Tilt</h2>
          <p className={styles.cardText}>
            Elemen ini merespons gerakan kursor secara dinamis dan halus menggunakan Vanilla-Tilt.js & CSS Modules.
          </p>
        </div>
        <div style={{ transform: "translateZ(40px)" }}>
          <span style={{ fontSize: "0.85rem", background: "rgba(255,255,255,0.2)", padding: "6px 12px", borderRadius: "8px" }}>
            Hover & Geser Kursor
          </span>
        </div>
      </div>
    </div>
  );
}