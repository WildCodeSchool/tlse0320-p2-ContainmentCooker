import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Css/RecipeCard.css';
import IngredientsList from './IngredientsList';

function RecipeClick() {
  const [arrMeal, setArrMeal] = useState([]);
  const { idMeal } = useParams();

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then(response => response.data.meals)
      .then(response => setArrMeal(response));
  }, [arrMeal]);

  return (
    <div className="RecipeCard">
      {arrMeal.map(meal => (
        <div className="cardRecipe">
          <div className="cardRecipe">
            <div className="titleCard">{meal.strMeal}</div>
            <div className="subtitleCard">
              {' '}
              {meal.strCategory} / {meal.strArea}{' '}
            </div>
          </div>
          <img className="ImgRecipe" src={meal.strMealThumb} alt={meal.strCategory} />
          <div bsclass="card" meal={meal} />
          <h2 className="TitleInstructions">Instructions</h2>
          <div className="InstructionsList">
            <div className="Instructions">{meal.strInstructions}</div>
            <IngredientsList meal={meal} />
          </div>

          <div className="VideoRecipe">
            <ReactPlayer className="VideoRecipe" url={meal.strYoutube} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeClick;

/* 
Je me rends sur la page d'affichage RecipesList,
je clique sur "see more" => cela récupère l'id de la recette et m'ouvre la page compléte correspondante
*/
