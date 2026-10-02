import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeaturedProducts.module.css';

const dummyProducts = [
  {
    id: 1,
    name: 'Pine Essential Oil',
    category: 'Essential Oil',
    price: '$24.00',
    color: '#D8E2DC'
  },
  {
    id: 2,
    name: 'Handcrafted Ceramic Mug',
    category: 'Home & Living',
    price: '$18.00',
    color: '#ECE4DB'
  },
  {
    id: 3,
    name: 'Sandalwood Soy Candle',
    category: 'Decor',
    price: '$28.00',
    color: '#E2D4C9'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const FeaturedProducts = () => {
  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Featured Products</h2>
        <p className={styles.subtitle}>Curated selections crafted for timeless comfort</p>
      </motion.div>

      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {dummyProducts.map((product) => (
          <motion.div 
            key={product.id} 
            className={styles.card}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className={styles.imagePlaceholder} style={{ backgroundColor: product.color }}>
              <span className={styles.badge}>{product.category}</span>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.price}>{product.price}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedProducts;