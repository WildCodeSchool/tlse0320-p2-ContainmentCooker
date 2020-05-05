import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';
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
        </Card>
      ))}
    </div>
  );
}

RecipeCard.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default RecipeCard;

/*<div className="RecipeList">
          <ul>
            <li>
              Recipe:
              {meal.strMeal}
            </li>
            <img className="ImgRecipe" src={meal.strMealThumb} alt={meal.strCategory} />
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
            <li>{meal.strIngredient1}</li>
            <li>{meal.strIngredient2}</li>
            <li>{meal.strIngredient3}</li>
            <li>{meal.strIngredient4}</li>
            <li>{meal.strIngredient5}</li>
            <li>{meal.strIngredient6}</li>
            <li>{meal.strIngredient7}</li>
            <li>{meal.strIngredient8}</li>
            <li>{meal.strIngredient9}</li>
            <li>{meal.strIngredient10}</li>
            <li>{meal.strIngredient11}</li>
            <li>{meal.strIngredient12}</li>
            <li>{meal.strIngredient13}</li>
            <li>{meal.strIngredient14}</li>
            <li>{meal.strIngredient15}</li>
            <li>{meal.strIngredient16}</li>
            <li>{meal.strIngredient17}</li>
            <li>{meal.strIngredient18}</li>
            <li>{meal.strIngredient19}</li>
            <li>{meal.strIngredient20}</li>
            <li>{meal.strMeasure1}</li>
            <li>{meal.strMeasure2}</li>
            <li>{meal.strMeasure3}</li>
            <li>{meal.strMeasure4}</li>
            <li>{meal.strMeasure5}</li>
            <li>{meal.strMeasure6}</li>
            <li>{meal.strMeasure7}</li>
            <li>{meal.strMeasure8}</li>
            <li>{meal.strMeasure9}</li>
            <li>{meal.strMeasure10}</li>
            <li>{meal.strMeasure11}</li>
            <li>{meal.strMeasure12}</li>
            <li>{meal.strMeasure13}</li>
            <li>{meal.strMeasure14}</li>
            <li>{meal.strMeasure15}</li>
            <li>{meal.strMeasure16}</li>
            <li>{meal.strMeasure17}</li>
            <li>{meal.strMeasure18}</li>
            <li>{meal.strMeasure19}</li>
            <li>{meal.strMeasure20}</li>
          </ul>
        </div> */
