/* eslint-disable react/prop-types */
import React from 'react';

function RecipeCard({ recipe }) {
  return (
    <div className="RecipeCard">
      <ul>
        <li>
          Recipe:
          {recipe.strMeal}
        </li>
        <li>
          Category:
          {recipe.strCategory}
        </li>
      </ul>
    </div>
  );
}

export default RecipeCard;
