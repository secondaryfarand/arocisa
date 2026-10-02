import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Documentation.module.css';

const galleryData = [
  {
    id: 1,
    src: '/assets/documentation/doc-1.jpeg',
    title: 'AROCISA Inhaler Design',
    category: 'Product Showcase',
    aspect: 'portraitLeft'
  },
  {
    id: 2,
    src: '/assets/documentation/doc-2.jpeg',
    title: 'Product & Promotional Setup',
    category: 'Exhibition Display',
    aspect: 'landscapeTop'
  },
  {
    id: 3,
    src: '/assets/documentation/doc-3.jpeg',
    title: 'Exhibition & Team Presentation',
    category: 'Exhibition Booth',
    aspect: 'landscapeBottom'
  },
  {
    id: 4,
    src: '/assets/documentation/doc-4.jpeg',
    title: 'AROCISA Inhaler & Retail Packaging',
    category: 'Packaging & Branding',
    aspect: 'portraitRight'
  }
];

const Documentation = () => {
  const [selectedImg, setSelectedImg] = useState(null);

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
        
        {/* Header - Tanpa Badge */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Our Documentation</h2>
          <p className={styles.subtitle}>
            A visual highlight of AROCISA product packaging, booth setup, and official exhibition presentation.
          </p>
        </motion.div>

        {/* Symmetric 3-Column Grid Layout */}
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryData.map((item) => (
            <motion.div 
              key={item.id} 
              className={`${styles.gridItem} ${styles[item.aspect]}`}
              variants={itemVariants}
              onClick={() => setSelectedImg(item)}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className={styles.image} 
                  loading="lazy" 
                />
                
                {/* Overlay saat Hover */}
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <span className={styles.category}>{item.category}</span>
                    <h3 className={styles.imgTitle}>{item.title}</h3>
                  </div>
                  <div className={styles.zoomBtn}>
                    <i className="fas fa-search-plus"></i>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div 
              className={styles.lightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
            >
              <motion.div 
                className={styles.lightboxContent}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className={styles.closeBtn} 
                  onClick={() => setSelectedImg(null)}
                  aria-label="Close modal"
                >
                  <i className="fas fa-times"></i>
                </button>
                
                <img 
                  src={selectedImg.src} 
                  alt={selectedImg.title} 
                  className={styles.lightboxImg} 
                />
                
                <div className={styles.lightboxCaption}>
                  <span className={styles.lightboxCategory}>{selectedImg.category}</span>
                  <h4 className={styles.lightboxTitle}>{selectedImg.title}</h4>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Documentation;