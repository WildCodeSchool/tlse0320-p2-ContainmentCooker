/* eslint-disable react/prop-types */
import React from 'react';

function RecipeCard({ meals }) {
  return (
    <div className="RecipeCard">
      <h2> The Containment random Recipe</h2>
      {meals.map(meal => (
        <div className="RecipeList">
          <ul>
            <li>
              Recipe:
              {meal.strMeal}
            </li>
            <li>
              Category:
              {meal.strCategory}
            </li>
            <li>
              Area:
              {meal.strArea}
            </li>
            <li>
              Instructions:
              {meal.strInstructions}
            </li>
            <img className="ImgRecipe" src={meal.strMealThumb} alt={meal.strCategory} />
            <li>
              Ingredient 1:
              {meal.strIngredient1}
            </li>
            <li>
              Ingredient 2:
              {meal.strIngredient2}
            </li>
            <li>
              Ingredient 3:
              {meal.strIngredient3}
            </li>
            <li>
              Ingredient 4:
              {meal.strIngredient4}
            </li>
            <li>
              Measure 1:
              {meal.strMeasure1}
            </li>
            <li>
              Measure 2:
              {meal.strMeasure2}
            </li>
            <li>
              Measure 3:
              {meal.strMeasure3}
            </li>
            <li>
              Measure 4:
              {meal.strMeasure4}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RecipeCard;
