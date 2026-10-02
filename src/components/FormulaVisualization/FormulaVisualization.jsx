import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FormulaVisualization.module.css';

const formulasData = {
  F1: {
    id: 'F1',
    equation: 'y = 0.0019x + 12.369',
    rSquare: '0.9364',
    title: 'DPPH Free Radical Scavenging Activity (40 ppm) at 1:1 Ratio (514.5 nm)',
    points: [
      { x: 3054.27, y: 16.45 },
      { x: 6100, y: 26.00 },
      { x: 9162.80, y: 31.35 },
      { x: 12200, y: 34.00 }
    ],
    trendline: { x1: 3000, y1: 18, x2: 12200, y2: 35 }
  },
  F2: {
    id: 'F2',
    equation: 'y = 0.0027x + 7.9328',
    rSquare: '0.9882',
    title: 'DPPH Free Radical Scavenging Activity (40 ppm) at 1:1 Ratio (514.5 nm)',
    points: [
      { x: 6200, y: 25.92 },
      { x: 9350.84, y: 32.20 },
      { x: 12400, y: 42.99 },
      { x: 15584.73, y: 50.80 }
    ],
    trendline: { x1: 6200, y1: 25, x2: 15584, y2: 50 }
  },
  F3: {
    id: 'F3',
    equation: 'y = 0.0024x + 19.349',
    rSquare: '0.965',
    title: 'DPPH Free Radical Scavenging Activity (40 ppm) at 1:1 Ratio (514.5 nm)',
    points: [
      { x: 3154.08, y: 24.51 },
      { x: 6300, y: 36.50 },
      { x: 9462.24, y: 43.42 },
      { x: 12600, y: 46.80 },
      { x: 15770.40, y: 56.64 }
    ],
    trendline: { x1: 3154, y1: 25, x2: 15770, y2: 56 }
  }
};

const tabs = ['F1', 'F2', 'F3'];

const FormulaVisualization = () => {
  const [activeTab, setActiveTab] = useState('F1');
  const activeData = formulasData[activeTab];

  // Helper kalkulasi koordinat SVG (Margin Kiri diperbesar ke 85px agar tidak menumpuk teks Y)
  const getSvgCoords = (x, y) => {
    // Range X: 0 - 20000 -> SVG X: 85 - 560
    const svgX = 85 + (x / 20000) * 475;
    // Range Y: 0 - 60 -> SVG Y: 250 - 30
    const svgY = 250 - (y / 60) * 220;
    return { x: svgX, y: svgY };
  };

  const pathD = activeData.points.reduce((acc, pt, index) => {
    const { x, y } = getSvgCoords(pt.x, pt.y);
    return index === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
  }, '');

  const trendX1 = getSvgCoords(activeData.trendline.x1, activeData.trendline.y1).x;
  const trendY1 = getSvgCoords(activeData.trendline.x1, activeData.trendline.y1).y;
  const trendX2 = getSvgCoords(activeData.trendline.x2, activeData.trendline.y2).x;
  const trendY2 = getSvgCoords(activeData.trendline.x2, activeData.trendline.y2).y;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.subTitle}>GRAPH VISUALIZATION</span>
        <h2 className={styles.title}>DPPH Radical Scavenging Activity</h2>
        <p className={styles.description}>
          Comparative linear regression curve analyzing the reduction capacity across formulations.
        </p>
      </div>

      {/* Main Dashboard Card dengan Layout Side-by-Side */}
      <div className={styles.mainCard}>
        {/* Sisi Kiri: Tab Selector Vertikal (Kecil) */}
        <div className={styles.sidebar}>
          <span className={styles.sidebarLabel}>Select Variant</span>
          <div className={styles.tabGroup}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ''}`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeSideTab"
                    className={styles.activePill}
                    transition={{ type: 'spring', duration: 0.4 }}
                  />
                )}
                <span className={styles.tabText}>{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sisi Kanan: Area Grafik (Lebih Lebar) */}
        <div className={styles.chartContent}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className={styles.chartWrapper}
            >
              <h3 className={styles.chartTitle}>{activeData.title}</h3>

              <div className={styles.svgContainer}>
                {/* ViewBox dengan margin aman di sebelah kiri */}
                <svg viewBox="0 0 600 290" className={styles.svg}>
                  {/* Grid Horizontal & Label Y (Sumbu Peredaman %) */}
                  {[0, 10, 20, 30, 40, 50, 60].map((val) => {
                    const yPos = 250 - (val / 60) * 220;
                    return (
                      <g key={`y-${val}`}>
                        <line x1="80" y1={yPos} x2="570" y2={yPos} className={styles.gridLine} />
                        <text x="72" y={yPos + 4} className={styles.axisLabel} textAnchor="end">
                          {val}.00
                        </text>
                      </g>
                    );
                  })}

                  {/* Grid Vertikal & Label X (Konsentrasi ppm) */}
                  {[0, 5000, 10000, 15000, 20000].map((val) => {
                    const xPos = 85 + (val / 20000) * 475;
                    return (
                      <g key={`x-${val}`}>
                        <line x1={xPos} y1="30" x2={xPos} y2={255} className={styles.gridLine} />
                        <text x={xPos} y="272" className={styles.axisLabel} textAnchor="middle">
                          {val}
                        </text>
                      </g>
                    );
                  })}

                  {/* Sumbu X dan Y Utama */}
                  <line x1="85" y1="30" x2="85" y2={250} className={styles.axisLine} />
                  <line x1="85" y1={250} x2="570" y2={250} className={styles.axisLine} />

                  {/* Label Title Sumbu Y - Diberi jarak x="18" agar tidak menumpuk angka */}
                  <text x="-140" y="20" transform="rotate(-90)" className={styles.axisTitle}>
                    Scavenging (%)
                  </text>

                  {/* Label Title Sumbu X */}
                  <text x="325" y="287" className={styles.axisTitle} textAnchor="middle">
                    Concentration (ppm)
                  </text>

                  {/* Trendline Dotted (Putus-Putus) */}
                  <line
                    x1={trendX1}
                    y1={trendY1}
                    x2={trendX2}
                    y2={trendY2}
                    className={styles.trendLine}
                  />

                  {/* Garis Data */}
                  <motion.path
                    d={pathD}
                    className={styles.dataPath}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  />

                  {/* Points / Titik Data */}
                  {activeData.points.map((pt, idx) => {
                    const { x, y } = getSvgCoords(pt.x, pt.y);
                    return (
                      <g key={idx}>
                        <circle cx={x} cy={y} r="4.5" className={styles.dataDot} />
                        <circle cx={x} cy={y} r="2" fill="#ffffff" />
                      </g>
                    );
                  })}
                </svg>

                {/* Badge Persamaan Linier di Atas Grafik */}
                <div className={styles.equationBadge}>
                  <div className={styles.eqRow}>
                    <span className={styles.eqLabel}>Linear Eq:</span>
                    <span className={styles.eqValue}>{activeData.equation}</span>
                  </div>
                  <div className={styles.eqRow}>
                    <span className={styles.eqLabel}>R² Score:</span>
                    <span className={styles.eqValue}>{activeData.rSquare}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FormulaVisualization;