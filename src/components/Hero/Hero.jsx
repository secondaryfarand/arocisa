import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import styles from './Hero.module.css';

// 4 Gambar Unsplash bertema rempah & essential oil alami
const bgImages = [
  'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1920&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1920&auto=format&fit=crop'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroRef = useRef(null);
  const taglineRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  // Auto-slide background setiap 8 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  // Animasi GSAP Entrance untuk teks
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.fromTo(taglineRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, delay: 0.2 })
        .fromTo(titleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.7')
        .fromTo(descRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.7')
        .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.6');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Background Image Slider dengan Murni Cross-Fade (Tanpa mode="wait") */}
      <div className={styles.bgWrapper}>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            className={styles.bgImage}
            style={{ backgroundImage: `url(${bgImages[currentImageIndex]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        {/* Dark Overlay di atas gambar agar teks tetap jelas */}
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* <span className={styles.tagline} ref={taglineRef}>
          Organic & Minimalist Collection
        </span> */}
        <h1 className={styles.title} ref={titleRef}>
          Innovative and Natural-Based Aromatic Inhaler
        </h1>
        <p className={styles.description} ref={descRef}>
          Spice-Based Aromatic Inhaler with Clove, Cinnamon, and Sappan Wood for ARI (Acute Respiratory Infection)
        </p>
        <div className={styles.actions} ref={ctaRef}>
          <Link to="/products" className={styles.btnPrimary}>
            Explore Products
          </Link>
          <Link to="/team" className={styles.btnSecondary}>
            Our Team
          </Link>
        </div>
      </div>

      {/* Indicator Dots */}
      <div className={styles.indicators}>
        {bgImages.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentImageIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;