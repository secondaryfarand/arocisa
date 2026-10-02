import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeaturedProducts.module.css';

const singleProduct = {
  id: 1,
  name: 'AROCISA Aromatherapy Inhaler',
  category: 'Inhaler',
  price: 'Rp 12.000',
  description: 'Spice-Based Aromatic Inhaler with Clove, Cinnamon, and Sappan Wood for ARI (Acute Respiratory Infection)',
  imgLandscape: '/assets/products/product-landscape.jpeg', // Path gambar Landscape (Desktop)
  imgPortrait: '/assets/products/product-potrait.jpeg'    // Path gambar Portrait (Mobile / Tablet)
};

const FeaturedProducts = () => {
  return (
    <section className={styles.section}>
      {/* Header */}
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Featured Product</h2>
        <p className={styles.subtitle}>Discover our signature natural aromatherapy innovation</p>
      </motion.div>

      {/* Single Product Card */}
      <motion.div 
        className={styles.singleCardWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.card}>
          
          {/* Container Gambar Responsif */}
          <div className={styles.imageContainer}>
            {/* 1. Foto Landscape (Muncul di Desktop) */}
            <img 
              src={singleProduct.imgLandscape} 
              alt={`${singleProduct.name} Landscape`} 
              className={`${styles.productImg} ${styles.desktopImg}`} 
            />

            {/* 2. Foto Portrait (Muncul di HP / Tablet) */}
            <img 
              src={singleProduct.imgPortrait} 
              alt={`${singleProduct.name} Portrait`} 
              className={`${styles.productImg} ${styles.mobileImg}`} 
            />

            <span className={styles.badge}>{singleProduct.category}</span>
          </div>

          {/* Detail Produk */}
          <div className={styles.cardBody}>
            <div>
              <h3 className={styles.productName}>{singleProduct.name}</h3>
              <p className={styles.productDescription}>{singleProduct.description}</p>
            </div>
            <p className={styles.price}>{singleProduct.price}</p>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProducts;