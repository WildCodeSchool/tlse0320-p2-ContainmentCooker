import React from 'react';
import './Home.css';
import RandomRecipe from './RandomRecipe';
import Header from './Header';

function RandomPage() {
  return (
    <div className="RandomPage">
      <Header />
      <RandomRecipe />
    </div>
  );
}

export default RandomPage;
