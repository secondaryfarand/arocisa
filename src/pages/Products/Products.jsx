import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';
import Footer from '../../components/Footer/Footer';

const Products = () => {
  return (
    <div>
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Main Product Content */}
      <main style={{ paddingTop: '5rem' }}>
        <ProductDisplay />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};

export default Products;