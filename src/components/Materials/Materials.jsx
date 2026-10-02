import React from 'react';
import { motion } from 'framer-motion';
import { materialsData } from '../../data/materialsData';
import styles from './Materials.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const Materials = () => {
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
        <h2 className={styles.title}>Key Organic Materials</h2>
        <p className={styles.subtitle}>
          Carefully selected natural ingredients and premium components engineered for maximum efficacy and safety.
        </p>
      </motion.div>

      {/* Materials Grid */}
      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {materialsData.map((item) => (
          <motion.div 
            key={item.id} 
            className={styles.card}
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <div className={styles.imageContainer}>
              <img 
                src={item.image} 
                alt={item.name} 
                className={styles.image} 
                loading="lazy"
              />
              {/* <span className={styles.categoryBadge}>{item.category}</span> */}
            </div>

            <div className={styles.cardBody}>
                <div className={styles.titleRow}>
                    <div>
                    <h3 className={styles.cardTitle}>{item.name}</h3>
                    {item.scientificName && (
                        <span className={styles.scientificName}>({item.scientificName})</span>
                    )}
                    </div>
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

export default Materials;