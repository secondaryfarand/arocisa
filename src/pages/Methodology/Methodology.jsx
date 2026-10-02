import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Materials from '../../components/Materials/Materials';
import Equipment from '../../components/Equipment/Equipment';
import Steps from '../../components/Steps/Steps';
import Footer from '../../components/Footer/Footer';

const MethodologyPage = () => {
  return (
    <div>
      <Navbar />

      <main style={{ paddingTop: '0rem', minHeight: '80vh' }}>
        <Materials />
        <Equipment />
        <Steps />
        {/* Selanjutnya komponen Steps di sini */}
      </main>

      <Footer />
    </div>
  );
};

export default MethodologyPage;