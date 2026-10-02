import React from 'react';
import { motion } from 'framer-motion';
import { equipmentData } from '../../data/equipmentData';
import styles from './Equipment.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const Equipment = () => {
  return (
    <section className={styles.section}>
      {/* Section Header (Tanpa Tagline / Badge) */}
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Laboratory & Processing Equipment</h2>
        <p className={styles.subtitle}>
          Essential tools utilized during extraction, measurement, and precise formulation.
        </p>
      </motion.div>

      {/* Equipment Cards Grid */}
      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {equipmentData.map((item, index) => (
          <motion.div 
            key={item.id} 
            className={styles.card}
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            {/* Image Box (Polos tanpa Badge) */}
            <div className={styles.imageContainer}>
              <img 
                src={item.image} 
                alt={item.name} 
                className={styles.image} 
                loading="lazy"
              />
              {/* <span className={styles.numberTag}>
                {String(index + 1).padStart(2, '0')}
              </span> */}
            </div>

            {/* Card Content */}
            <div className={styles.cardBody}>
              <div className={styles.titleRow}>
                <h3 className={styles.cardTitle}>{item.name}</h3>
                <i className={`${item.icon} ${styles.icon}`}></i>
              </div>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Equipment;