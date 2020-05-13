import React from 'react';
import RecipeClick from './RecipeClick';
import Header from '../Main/Header';
import Footer from '../Main/Footer';

function RecipePage() {
  return (
    <div className="RandomPage">
      <Header />
      <RecipeClick />
      <Footer />
    </div>
  );
}

export default RecipePage;
