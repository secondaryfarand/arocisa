import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Background from '../../components/Background/Background';
import MascotWidget from '../../components/MascotWidget/MascotWidget';
import TestingParameters from '../../components/TestingParameters/TestingParameters';
import FormulationTable from '../../components/FormulationTable/FormulationTable';
import FormulaVisualization from '../../components/FormulaVisualization/FormulaVisualization';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Documentation from '../../components/Documentation/Documentation';
import Conclusion from '../../components/Conclusion/Conclusion';
import LogoMarquee from '../../components/LogoMarquee/LogoMarquee';
import Footer from '../../components/Footer/Footer';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main className={styles.mainContent}>
        <Hero />
        <Background />
        <MascotWidget />
        <TestingParameters />
        <FormulationTable />
        <FormulaVisualization />
        <FeaturedProducts />
        <Documentation />
        <Conclusion />
        <LogoMarquee />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;