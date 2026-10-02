import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ProductDisplay.module.css';

const productData = {
  name: 'AROCISA Aromatherapy Inhaler',
  category: 'Innovative Aromatherapy',
  unitPrice: 12000,
  tagline: 'Natural Relief & Mental Clarity in Every Breath',
  imgLandscape: '/assets/products/product-landscape.jpeg',
  imgPortrait: '/assets/products/product-portrait.jpeg',
};

// Ganti dengan nomor WhatsApp penerima (format internasional tanpa +, contoh: 628123456789)
const WHATSAPP_NUMBER = '628988261709';

const ProductDisplay = () => {
  const [quantity, setQuantity] = useState(1);

  // Perhitungan Keuangan
  const appFee = 700;
  const subtotal = productData.unitPrice * quantity;
  const grandTotal = subtotal + appFee;

  // Helper Format Rupiah
  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleQuantityChange = (type) => {
    if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'increase') {
      setQuantity(quantity + 1);
    }
  };

  // Handler Klik Order ke WhatsApp
  const handleWhatsAppOrder = () => {
    const message = 
      `Hello AROCISA GASYOR Visitor Team! 👋\n\n` +
      `I would like to order the following product:\n` +
      `• Product: *${productData.name}*\n` +
      `• Quantity: *${quantity} item(s)*\n` +
      `• Unit Price: ${formatRupiah(productData.unitPrice)}\n` +
      `• Subtotal: ${formatRupiah(subtotal)}\n` +
      `• Application Fee: ${formatRupiah(appFee)}\n` +
      `• *Grand Total: ${formatRupiah(grandTotal)}*\n\n` +
      `Please provide details for payment and shipping. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.container}>
      
      {/* SECTION 1: VISUAL & QUICK INFO */}
      <div className={styles.topSection}>
        
        {/* Responsive Image Container */}
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Gambar Desktop (Landscape) */}
          <img 
            src={productData.imgLandscape} 
            alt={`${productData.name} Landscape`} 
            className={`${styles.productImg} ${styles.desktopImg}`} 
          />

          {/* Gambar Mobile (Portrait) */}
          <img 
            src={productData.imgPortrait} 
            alt={`${productData.name} Portrait`} 
            className={`${styles.productImg} ${styles.mobileImg}`} 
          />

          <span className={styles.categoryBadge}>{productData.category}</span>
        </motion.div>

        {/* Quick Product Specs & Buy CTA */}
        <motion.div 
          className={styles.quickInfo}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={styles.subtitle}>{productData.tagline}</span>
          <h1 className={styles.title}>{productData.name}</h1>
          <p className={styles.price}>
            {formatRupiah(productData.unitPrice)} <span className={styles.unitText}>/ pcs</span>
          </p>

          <div className={styles.divider} />

          {/* Quantity Selector & WhatsApp Button */}
          <div className={styles.actionRow}>
            <div className={styles.quantityControl}>
              <button 
                onClick={() => handleQuantityChange('decrease')}
                aria-label="Decrease quantity"
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <span>{quantity}</span>
              <button 
                onClick={() => handleQuantityChange('increase')}
                aria-label="Increase quantity"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>

            <button 
              className={styles.ctaButton}
              onClick={handleWhatsAppOrder}
            >
              <i className={`fa-brands fa-whatsapp ${styles.waIcon}`}></i> Order / Inquire Now
            </button>
          </div>

          {/* MINIMALIST ORDER BILL SUMMARY */}
          <div className={styles.billCard}>
            <h4 className={styles.billTitle}>Order Summary</h4>
            <div className={styles.billRow}>
              <span>Subtotal ({quantity} {quantity > 1 ? 'items' : 'item'})</span>
              <span>{formatRupiah(subtotal)}</span>
            </div>
            <div className={styles.billRow}>
              <span>Application Fee</span>
              <span>{formatRupiah(appFee)}</span>
            </div>
            <div className={styles.billDivider} />
            <div className={`${styles.billRow} ${styles.totalRow}`}>
              <span>Estimated Total</span>
              <span>{formatRupiah(grandTotal)}</span>
            </div>
          </div>

          {/* Highlights dengan Tag <i> Font Awesome */}
          <ul className={styles.highlights}>
            <li>
              <i className={`fa-solid fa-leaf ${styles.icon}`}></i> 
              <span>100% Organic & Natural Essential Oils</span>
            </li>
            <li>
              <i className={`fa-solid fa-feather-pointed ${styles.icon}`}></i> 
              <span>Ergonomic & Portable Design</span>
            </li>
            <li>
              <i className={`fa-solid fa-microscope ${styles.icon}`}></i> 
              <span>Scientifically Formulated for Long-Lasting Freshness</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* SECTION 2: DETAILED PRODUCT STORY */}
      <motion.div 
        className={styles.detailsSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.detailsTitle}>Product Overview & Innovation</h2>
        <div className={styles.paragraphGroup}>
          <p>
            The AROCISA Aromatherapy Inhaler is an innovative wellness breakthrough designed to provide instant freshness and natural relaxation amidst busy daily routines. Combining high-quality natural botanical extracts with modern ergonomic inhaler technology, this product is formulated to relieve nasal congestion, reduce stress levels, and restore mental focus without synthetic side effects.
          </p>
          <p>
            The core strength of AROCISA lies in its long-lasting, stable aromatherapy formulation and convenient portability. With its compact, eco-friendly design, it serves as a practical health solution for professionals, students, and active individuals needing a quick boost of mental clarity. Every component is manufactured under strict hygienic standards to ensure optimal aroma diffusion and effectiveness.
          </p>
          <p>
            Driven by continuous research and innovation, AROCISA represents a sustainable approach to modern personal care. Free from harmful chemicals, it is completely safe for regular everyday use. Recognized and showcased at international innovation competitions, AROCISA reflects our dedication to bringing world-class, locally crafted aromatherapy products to the global stage.
          </p>
        </div>
      </motion.div>

    </div>
  );
};

export default ProductDisplay;