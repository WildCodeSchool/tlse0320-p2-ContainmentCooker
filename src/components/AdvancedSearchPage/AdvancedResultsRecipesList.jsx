import React from 'react';
import './RecipesList.css';
import { Row, Container } from 'reactstrap';
import CardDetail from './CardDetail';

function select(
  country,
  category,
  recipesByCountry,
  recipesByCategory,
  allRecipes,
  recipesResults
) {
  if (country && recipesByCountry && category && recipesByCategory) {
    return recipesResults;
  } else if (country && recipesByCountry && (!category || category === 'Choose your category')) {
    return recipesByCountry;
  } else if (category && recipesByCategory && (!country || country === 'Choose your country')) {
    return recipesByCategory;
  } else {
    return allRecipes;
  }
}

function ingredients(
  allRecipes,
  ingredient1,
  ingredient2,
  ingredient3,
  recipesIngredient1,
  recipesIngredient2,
  recipesIngredient3,
  recipesIngredientResults,
  recipesResultsInput1andInput2
) {
  if (
    ingredient1 &&
    recipesIngredient1 &&
    ingredient2 &&
    recipesIngredient2 &&
    ingredient3 &&
    recipesIngredient3
  ) {
    return recipesIngredientResults.length < 1
      ? recipesResultsInput1andInput2
      : recipesIngredientResults;
  } else if (ingredient1 && recipesIngredient1 && ingredient2 && recipesIngredient2) {
    return recipesResultsInput1andInput2.length < 1
      ? recipesIngredient1
      : recipesResultsInput1andInput2;
  } else if (ingredient1 && recipesIngredient1) {
    return recipesIngredient1;
  } else {
    return allRecipes;
  }
}

export default function AdvancedResultsRecipesList({
  country,
  category,
  recipesResults,
  recipesByCountry,
  recipesByCategory,
  allRecipes,
  ingredient1,
  ingredient2,
  ingredient3,
  recipesIngredient1,
  recipesIngredient2,
  recipesIngredient3,
  recipesIngredientResults,
  rSelected,
  recipesResultsInput1andInput2
}) {
  return (
    <div>
      {rSelected === 1 ? (
        <Container className="main-container" fluid={true}>
          <Row xs="1" sm="2" md="3" xl="4">
            {select(
              country,
              category,
              recipesByCountry,
              recipesByCategory,
              allRecipes,
              recipesResults
            ).map(recipeResult => (
              <CardDetail key={recipeResult.id} {...recipeResult} />
            ))}
            )
          </Row>
        </Container>
      ) : rSelected === 2 ? (
        <Container className="main-container" fluid={true}>
          <Row xs="1" sm="2" md="3" xl="4">
            {ingredients(
              allRecipes,
              ingredient1,
              ingredient2,
              ingredient3,
              recipesIngredient1,
              recipesIngredient2,
              recipesIngredient3,
              recipesIngredientResults,
              recipesResultsInput1andInput2
            ).map(recipeResult => (
              <CardDetail key={recipeResult.id} {...recipeResult} />
            ))}
          </Row>
        </Container>
      ) : rSelected !== 1 && rSelected !== 2 ? (
        <Container className="main-container" fluid={true}>
          <div className="recipes-list-container">
            <Row xs="1" sm="2" md="3" xl="4">
              {allRecipes.map(recipeResult => (
                <CardDetail key={recipeResult.id} {...recipeResult} />
              ))}
            </Row>
          </div>
        </Container>
      ) : (
        <></>
      )}
    </div>
  );
}
