import React from 'react';
import { motion } from 'framer-motion';
import { stepsData } from '../../data/stepsData';
import styles from './Steps.module.css';

const Steps = () => {
  return (
    <section className={styles.section}>
      {/* Section Header */}
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Preparation & Formulation Steps</h2>
        <p className={styles.subtitle}>
          Step-by-step methodology in crafting the AROCISA natural aromatherapy inhaler.
        </p>
      </motion.div>

      {/* 1. TIMELINE DESKTOP (Vertikal Zig-Zag) */}
      <div className={styles.desktopTimeline}>
        <div className={styles.centerLine}></div>
        <div className={styles.stepsList}>
          {stepsData.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={step.id}
                className={`${styles.stepRow} ${isEven ? styles.rowLeft : styles.rowRight}`}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className={styles.timelineNode}>
                  {index + 1}
                </div>
                <div className={styles.card}>
                  <div className={styles.imageBox}>
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className={styles.image}
                      loading="lazy" 
                    />
                    {/* <span className={styles.stepBadge}>{step.stepNumber}</span> */}
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <i className={`${step.icon} ${styles.icon}`}></i>
                    </div>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 2. TIMELINE MOBILE & TABLET (Horizontal Slider Ke Samping) */}
      <div className={styles.mobileTimeline}>
        <div className={styles.scrollContainer}>
          <div className={styles.sliderTrack}>
            {/* Garis diletakkan di dalam sliderTrack agar lebarnya mengikuti konten */}
            <div className={styles.horizontalLine}></div>

            {stepsData.map((step, index) => (
              <div key={step.id} className={styles.mobileCardItem}>
                {/* Circle Number di atas garis */}
                <div className={styles.mobileNode}>
                  {index + 1}
                </div>

                {/* Step Card */}
                <div className={styles.card}>
                  <div className={styles.imageBox}>
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className={styles.image}
                      loading="lazy" 
                    />
                    {/* <span className={styles.stepBadge}>{step.stepNumber}</span> */}
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <i className={`${step.icon} ${styles.icon}`}></i>
                    </div>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className={styles.swipeHint}>
          <i className="fa-solid fa-hand-pointer"></i> Swipe sideways to see the next step
        </p>
      </div>
    </section>
  );
};

export default Steps;

                {/* <div className={styles.timelineNode}>
                  <i className="fa-solid fa-check"></i>
                </div> */}

   