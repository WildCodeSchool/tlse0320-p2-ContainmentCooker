import React from 'react';
import './Home.css';
import RandomRecipe from './RandomRecipe';
import Header from './Header';
import Footer from './Footer';

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
