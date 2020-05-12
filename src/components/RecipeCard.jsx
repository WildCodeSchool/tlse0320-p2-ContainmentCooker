import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import IngredientsList from './IngredientsList';

function RecipeCard({ meals }) {
  return (
    <div className="RecipeCard">
      {meals.map(meal => (
        <div className="cardRecipe">
          <div className="cardRecipe">
            <div className="titleCard">{meal.strMeal}</div>
            <div>
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

RecipeCard.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default RecipeCard;
