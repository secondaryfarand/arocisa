import React from 'react';
import { motion } from 'framer-motion';
import styles from './Conclusion.module.css';

const keyHighlights = [
  {
    id: 1,
    iconClass: 'fas fa-leaf',
    title: 'Indonesian Biodiversity Integration',
    description: 'Utilizes local Clove, Cinnamon, and Sappan Wood to establish a robust, natural non-pharmacological respiratory defense.'
  },
  {
    id: 2,
    iconClass: 'fas fa-flask',
    title: 'Cold-Maceration Extraction',
    description: 'Preserves critical volatile bioactives (Eugenol, Cinnamaldehyde, Menthol) without thermal degradation.'
  },
  {
    id: 3,
    iconClass: 'fas fa-shield-alt',
    title: 'High Antioxidant Protection',
    description: 'Achieves up to 57.39% DPPH radical scavenging capability to effectively combat airway oxidative stress.'
  },
  {
    id: 4,
    iconClass: 'fas fa-heartbeat',
    title: 'Bio-Compatible & Non-Irritant',
    description: 'Maintains optimal nasal pH (5.5 – 6.5), ensuring complete mucosal compatibility for daily use.'
  }
];

const sdgGoals = [
  {
    number: 'SDG 3',
    title: 'Good Health & Well-Being',
    desc: 'Protects community respiratory health against air pollution and ARI threats.'
  },
  {
    number: 'SDG 13',
    title: 'Climate Action',
    desc: 'Promotes eco-friendly, bio-sustainable resources for environmental resilience.'
  }
];

const Conclusion = () => {
  // Animasi Container (Stagger Children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Animasi Item Card
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>EXECUTIVE SUMMARY</span>
          <h2 className={styles.title}>Conclusion & Impact</h2>
          <p className={styles.subtitle}>
            AROCISA establishes an innovative, eco-conscious shield uniting Indonesian botanical heritage with modern respiratory technology.
          </p>
        </motion.div>

        {/* Hero Core Statement Banner */}
        <motion.div 
          className={styles.bannerCard}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.bannerBadge}>Core Finding</div>
          <p className={styles.bannerText}>
            Through optimized cold-maceration, <strong>AROCISA</strong> preserves vital botanical compounds to deliver up to <strong>57.39% radical scavenging efficiency</strong> while remaining perfectly balanced for human nasal mucosa (pH 5.5–6.5).
          </p>
        </motion.div>

        {/* Grid 4 Key Pillars / Highlights */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {keyHighlights.map((item) => (
            <motion.div key={item.id} className={styles.highlightCard} variants={itemVariants}>
              <div className={styles.iconBox}>
                <i className={`${item.iconClass} ${styles.cardIcon}`}></i>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section: Socio-Economic & SDG Impact */}
        <motion.div 
          className={styles.impactWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.impactHeader}>
            <i className={`fas fa-globe-americas ${styles.impactHeaderIcon}`}></i>
            <div>
              <h3 className={styles.impactTitle}>Global & Socio-Economic Impact</h3>
              <p className={styles.impactSubtitle}>
                Elevating traditional spice valuation while contributing directly to UN Sustainable Development Goals.
              </p>
            </div>
          </div>

          <div className={styles.sdgGrid}>
            {sdgGoals.map((sdg, index) => (
              <div key={index} className={styles.sdgCard}>
                <div className={styles.sdgBadge}>{sdg.number}</div>
                <div>
                  <h4 className={styles.sdgTitle}>{sdg.title}</h4>
                  <p className={styles.sdgDesc}>{sdg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final Conclusion Takeaway */}
        <motion.div 
          className={styles.takeaway}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <i className={`fas fa-check-circle ${styles.checkIcon}`}></i>
          <span>A pocket-sized, travel-friendly wellness solution bridging science, nature, and sustainability.</span>
        </motion.div>

      </div>
    </section>
  );
};

export default Conclusion;