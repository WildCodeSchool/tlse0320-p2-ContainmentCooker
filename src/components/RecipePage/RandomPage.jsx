import React from 'react';
import RandomRecipe from './RandomRecipe';
import Header from '../Main/Header';
import Footer from '../Main/Footer';

function RandomPage() {
  return (
    <div className="RandomPage">
      <Header />
      <RandomRecipe />
      <Footer />
    </div>
  );
}

export default RandomPage;
