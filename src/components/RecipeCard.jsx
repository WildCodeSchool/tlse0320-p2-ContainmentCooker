import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import IngredientsList from './IngredientsList';

function RecipeCard({ meals }) {
  return (
    <div className="RecipeCard">
      {meals.map(meal => (
        <Card className="card">
          <CardBody className="card">
            <CardTitle className="titleCard">{meal.strMeal}</CardTitle>
            <CardSubtitle>
              {' '}
              {meal.strCategory} / {meal.strArea}{' '}
            </CardSubtitle>
          </CardBody>
          <img className="ImgRecipe" src={meal.strMealThumb} alt={meal.strCategory} />
          <IngredientsList bsclass="card" meal={meal} />
          <CardBody>
            <CardText>{meal.strInstructions}</CardText>
          </CardBody>
          <div>
            <ReactPlayer className="VideoRecipe" url={meal.strYoutube} />
          </div>
        </Card>
      ))}
    </div>
  );
}

RecipeCard.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default RecipeCard;
