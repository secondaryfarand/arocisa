import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar'; // Sesuaikan path Navbar kamu
import Footer from '../../components/Footer/Footer'; // Sesuaikan path Footer kamu
import styles from './Poster.module.css';

export default function PosterPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Path ke file gambar PNG poster kamu
  const posterSrc = '/assets/poster.webp'; // Ubah sesuai path file gambar kamu

  return (
    <div className={styles.pageContainer}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Simple Header Title & Subtitle */}
        <div className={styles.headerGroup}>
          <h1 className={styles.pageTitle}>Our Poster</h1>
          <p className={styles.pageSubtitle}>
            Click on the poster to view it in full screen
          </p>
        </div>

        {/* Poster Card Container */}
        <div 
          className={styles.posterWrapper}
          onClick={() => setIsModalOpen(true)}
        >
          {/* Poster Image Preview */}
          <img
            src={posterSrc}
            alt="AROCISA Research Poster"
            className={styles.posterImage}
          />

          {/* Hover Overlay */}
          <div className={styles.hoverOverlay}>
            <span className={styles.hoverBadge}>
              <i className="fa-solid fa-magnifying-glass-plus"></i> Click to enlarge
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Modal Viewer */}
      {isModalOpen && (
        <div 
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
        >
          {/* Close Button */}
          <button
            className={styles.closeButton}
            onClick={() => setIsModalOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>

          {/* Full Page Image Container */}
          <div 
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={posterSrc}
              alt="AROCISA Full Poster"
              className={styles.fullPosterImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}