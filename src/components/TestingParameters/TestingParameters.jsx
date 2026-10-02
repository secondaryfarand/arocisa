import React from 'react';
import { motion } from 'framer-motion';
import styles from './TestingParameters.module.css';

const testData = [
  {
    id: 1,
    value: 'DPPH Free Radical',
    title: 'Test Method',
    description: 'Spectrophotometry Analysis'
  },
  {
    id: 2,
    value: '514,5 nm',
    title: 'Maximum Wavelength',
    description: 'Peak Absorption Spectrum'
  },
  {
    id: 3,
    value: '0,5879',
    title: 'Mean Control Absorbance',
    description: 'Baseline Stability Value'
  },
  {
    id: 4,
    value: 'Metanol P.A.',
    title: 'Primary Solvent',
    description: 'Pro Analysis Grade'
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const TestingParameters = () => {
  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.cardContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {testData.map((item, index) => (
          <React.Fragment key={item.id}>
            <motion.div className={styles.statItem} variants={itemVariants}>
              <h3 className={styles.statValue}>{item.value}</h3>
              <p className={styles.statTitle}>{item.title}</p>
              <span className={styles.statDescription}>{item.description}</span>
            </motion.div>
            
            {/* Pembatas Garis Vertikal Antar Kolom */}
            {index < testData.length - 1 && <div className={styles.divider} />}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
};

export default TestingParameters;