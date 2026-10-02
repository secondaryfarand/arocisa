import React from 'react';
import { motion } from 'framer-motion';
import styles from './FormulationTable.module.css';

const formulaData = [
  {
    formula: 'F1',
    rows: [
      { volume: '100', concentration: '3.054,27', absorbance: '0,4912', inhibition: '16,45%' },
      { volume: '300', concentration: '9.162,80', absorbance: '0,4036', inhibition: '31,35%' },
      { volume: '500', concentration: '15.271,33', absorbance: '0,3222', inhibition: '45,20%' }
    ]
  },
  {
    formula: 'F2',
    rows: [
      { volume: '100', concentration: '3.116,995', absorbance: '0,4355', inhibition: '25,92%' },
      { volume: '300', concentration: '9.350,84', absorbance: '0,3352', inhibition: '42,99%' },
      { volume: '500', concentration: '15.584,73', absorbance: '0,2505', inhibition: '57,39%' }
    ]
  },
  {
    formula: 'F3',
    rows: [
      { volume: '100', concentration: '3.154,08', absorbance: '0,4438', inhibition: '24,51%' },
      { volume: '300', concentration: '9.462,24', absorbance: '0,3326', inhibition: '43,42%' },
      { volume: '500', concentration: '15.770,40', absorbance: '0,2549', inhibition: '56,64%' }
    ]
  }
];

const FormulationTable = () => {
  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.subTitle}>FORMULATION PERFORMANCE</span>
        <h2 className={styles.title}>Inhibition Percentage Analysis</h2>
        <p className={styles.description}>
          Inhibition test results (%IC) across various sample concentrations for Formulations F1, F2, and F3.
        </p>
      </motion.div>

      <motion.div 
        className={styles.tableCard}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.tableResponsive}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thFormula}>Formula</th>
                <th>
                  Pipetted Volume
                  <span className={styles.unit}>(μL)</span>
                </th>
                <th>
                  Sample Concentration
                  <span className={styles.unit}>(ppm)</span>
                </th>
                <th>Mean Absorbance</th>
                <th>
                  Percentage
                  <span className={styles.unit}>Inhibition (%IC)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {formulaData.map((group) =>
                group.rows.map((row, index) => (
                  <tr key={`${group.formula}-${index}`} className={styles.tr}>
                    {/* Render cell Formula hanya di baris pertama tiap grup dengan rowSpan */}
                    {index === 0 && (
                      <td 
                        rowSpan={group.rows.length} 
                        className={styles.tdFormulaGroup}
                      >
                        <span className={styles.formulaBadge}>{group.formula}</span>
                      </td>
                    )}
                    <td className={styles.tdValue}>{row.volume}</td>
                    <td className={styles.tdValue}>{row.concentration}</td>
                    <td className={styles.tdValue}>{row.absorbance}</td>
                    <td className={styles.tdHighlight}>{row.inhibition}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
};

export default FormulationTable;