import React from 'react';
import './Home.css';
import RecipeClick from './RandomRecipe';
import Header from './Header';

function RecipePage() {
  return (
    <div className="RandomPage">
      <Header />
      <RecipeClick />
    </div>
  );
}

export default RecipePage;
