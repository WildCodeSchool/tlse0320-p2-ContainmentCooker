import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import IngredientsList from './IngredientsList';

function RecipePage({ meals }) {
  return (
    <div className="RecipeCard">
      <h2>{this.strMeal}</h2>
      {meals.map(meal => (
        <Card>
          <CardBody>
            <CardTitle> {meal.strMeal} </CardTitle>
            <CardSubtitle>
              {' '}
              {meal.strCategory} / {meal.strArea}{' '}
            </CardSubtitle>
          </CardBody>
          <img className="ImgRecipe" src={meal.strMealThumb} alt={meal.strCategory} />
          <IngredientsList meal={meal} />
          <CardBody>
            <CardText>{meal.strInstructions}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default RecipePage;
