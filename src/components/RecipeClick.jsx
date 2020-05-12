import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Css/RecipeCard.css';

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
      {arrMeal.map(item => (
        <div className="cardRecipe">
          <div className="cardRecipe">
            <div className="titleCard">{item.strMeal}</div>
            <div>
              {' '}
              {item.strCategory} / {item.strArea}{' '}
            </div>
          </div>
          <img className="ImgRecipe" src={item.strMealThumb} alt={item.strCategory} />
          <div bsclass="card" item={item} />
          <div>
            <div>{item.strInstructions}</div>
            <div className="VideoRecipe">
              <ReactPlayer className="VideoRecipe" url={item.strYoutube} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeClick;
