import React from 'react';
import { motion } from 'framer-motion';
import styles from './Background.module.css';

const Background = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Sisi Kiri: Gambar Produk / Bahan */}
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img 
            // src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop" 
            src="/assets/documentation/doc-1.jpeg" 
            alt="Natural Spices and Essential Oil Ingredients" 
            className={styles.image}
          />
          <div className={styles.imageAccentBadge}>
            <span className={styles.badgeNumber}>100%</span>
            <span className={styles.badgeText}>Natural Botanical</span>
          </div>
        </motion.div>

        {/* Sisi Kanan: Teks Latar Belakang */}
        <motion.div 
          className={styles.contentWrapper}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <span className={styles.subTitle}>BACKGROUND & FORMULATION</span>
          <h2 className={styles.title}>
            Harnessing Nature’s Remedy for Respiratory Wellness
          </h2>
          <p className={styles.paragraph}>
            Air pollution is an environmental issue that requires attention, with Indonesia ranking first in Southeast Asia (IQAir 2025) and Denpasar City entering the top 10 areas with the worst air quality (Detikbali, 2026). This condition impacts public health (Patz et al.,2014), particularly increasing the risk of. 
            <strong>Acute Respiratory Infections (ARI)</strong>
            {/* , <strong>Cinnamon</strong>, and <strong>Sappan Wood</strong>. */}
          </p>
          <p className={styles.paragraph}>
            As a solution, AROCISA was developed—a local spice-based aromatherapy inhaler (Cinnamon, Clove, and Sappan wood) to help relieve respiratory discomfort. AROCISA supports the achievement of SDG 3 (Good Health and Well-being) and SDG 13 through the sustainable and environmentally friendly utilization of local biodiversity. 
          </p>

          {/* Highlights / Features Grid */}
          <div className={styles.featuresGroup}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🌿</div>
              <div>
                <h4 className={styles.featureTitle}>Natural Active Essential Oils</h4>
                <p className={styles.featureDesc}>Rich in eugenol & cinnamaldehyde for respiratory ease.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🛡️</div>
              <div>
                <h4 className={styles.featureTitle}>Designed for ARI Support</h4>
                <p className={styles.featureDesc}>Helps soothe nasal congestion and calm airways naturally.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Background;