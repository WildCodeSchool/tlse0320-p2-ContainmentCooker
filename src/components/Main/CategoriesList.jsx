import React from 'react';
import Categories from './Categories';
import './CategoriesList.css';

function CategoriesList() {
  return (
    <div className="categoriesList">
      <div className="categories-picture">
        <Categories />
      </div>
    </div>
  );
}

export default CategoriesList;
