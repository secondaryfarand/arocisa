import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ProductDisplay.module.css';

const productData = {
  name: 'AROCISA by gasyor',
  category: 'INHALER',
  unitPrice: 12000,
  tagline: 'Innovative and Natural-Based Aromatic Inhaler.',
  imgLandscape: '/assets/products/product-landscape.jpeg',
  imgPortrait: '/assets/products/product-potrait.jpeg',
};

// Ganti dengan nomor WhatsApp penerima (format internasional tanpa +, contoh: 628123456789)
const WHATSAPP_NUMBER = '6289507366634';

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
      `Hello AROCISA GASYOR Team! 👋\n\n` +
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
            Air pollution is an environmental problem that requires serious attention. According to IQAir data
            (World Air Quality Report 2025), Indonesia ranked first among Southeast Asian countries in terms of air
            pollution. One of the major sources of air pollution in our immediate environment is road traffic, particularly
            motor-vehicle emissions. In urban areas, vehicle emissions account for approximately 60–70% of potential
            pollutants, including NO2, CO, PM10, and PM2.5. This situation is particularly relevant to Denpasar City,
            the capital of Bali Province. The increasing population of Denpasar City, driven by economic development,
            has contributed to a growing number of motor vehicles used by the community. The increase in motor
            vehicle numbers consequently generates higher pollutant emissions. In 2026, Denpasar City was included
            among the ten areas in Indonesia with the poorest air-quality conditions (Detikbali, 2026).
          </p>
          <p>
            Dependence on motor vehicles not only contributes to increased air pollution and declining urban
            air quality, but may also reduce physical activity, ultimately affecting public health (Patz et al., 2014),
            including through Acute Respiratory Infections (ARI). Indonesia is rich in local spices, such as Cinnamon (Cinnamomum burmannii), which contains
            cinnamaldehyde, flavonoids, and eugenol with antioxidant and antimicrobial properties; Clove (Syzygium
            aromaticum), which contains eugenol, flavonoids, and tannins with anti-inflammatory, antibacterial, and
            expectorant properties; and Sappan Wood (Caesalpinia sappan), which contains active compounds such as
            brazilin, flavonoids, tannins, and essential oils with antibacterial and anti-inflammatory properties.
          </p>
          <p>
            These three local spices may help alleviate symptoms associated with Acute Respiratory Infections
            (ARI). Their potential may be utilized to reduce inflammation, combat microorganisms associated with
            infection, and support the body’s defenses during ARI. Based on this potential, AROCISA was developed
            as a practical, easy-to-use aromatic inhaler based on local spices to help relieve respiratory discomfort. The
            development of AROCISA is aligned with SDG 3 through efforts to support health and well-being, as well
            as SDG 13 through the sustainable and environmentally responsible utilization of local biodiversity
          </p>
        </div>
      </motion.div>

    </div>
  );
};

export default ProductDisplay;