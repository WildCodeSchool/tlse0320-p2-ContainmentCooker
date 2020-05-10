import React, { useState } from 'react';
import './Css/RecipesList.css';
import { Row, Container } from 'reactstrap';
import CardDetail from './CardDetail';
import './Css/RecipesList.css';

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
          <div className="recipes-list-container">
            <Row xs="1" sm="2" md="3" xl="4">
              {country && recipesByCountry && category && recipesByCategory ? (
                recipesResults.map(recipeResult => (
                  <CardDetail key={recipeResult.id} {...recipeResult} />
                ))
              ) : country &&
                recipesByCountry &&
                (!category || category === 'Choose your category') ? (
                recipesByCountry.map(recipeResult => (
                  <CardDetail key={recipeResult.id} {...recipeResult} />
                ))
              ) : category &&
                recipesByCategory &&
                (!country || country === 'Choose your country') ? (
                recipesByCategory.map(recipeResult => (
                  <CardDetail key={recipeResult.id} {...recipeResult} />
                ))
              ) : (!country || country === 'Choose your country') &&
                (!category || category === 'Choose your category') ? (
                allRecipes.map(recipeResult => (
                  <CardDetail key={recipeResult.id} {...recipeResult} />
                ))
              ) : (
                <></>
              )}
            </Row>
          </div>
        </Container>
      ) : rSelected === 2 ? (
        <Container className="main-container" fluid={true}>
          <div className="recipes-list-container">
            <Row xs="1" sm="2" md="3" xl="4">
              {ingredient1 &&
              recipesIngredient1 &&
              ingredient2 === '' &&
              (recipesIngredient2.length === 0 || recipesIngredient2 === null) &&
              ingredient3 === '' &&
              (recipesIngredient3.length === 0 || recipesIngredient3 === null) ? (
                recipesIngredient1.map(recipeResult => (
                  <CardDetail key={recipeResult.id} {...recipeResult} />
                ))
              ) : ingredient1 &&
                recipesIngredient1 &&
                ingredient2 &&
                recipesIngredient2 &&
                ingredient3 === '' &&
                (recipesIngredient3.length === 0 || recipesIngredient3 === null) ? (
                recipesResultsInput1andInput2.map(recipeResult => (
                  <CardDetail key={recipeResult.id} {...recipeResult} />
                ))
              ) : ingredient1 &&
                recipesIngredient1 &&
                ingredient2 &&
                recipesIngredient2 &&
                ingredient3 === '' &&
                (recipesIngredient3.length === 0 || recipesIngredient3 === null) &&
                (recipesResultsInput1andInput2.length === 0 ||
                  recipesResultsInput1andInput2 === null) ? (
                recipesIngredient1.map(recipeResult => (
                  <CardDetail key={recipeResult.id} {...recipeResult} />
                ))
              ) : ingredient1 &&
                recipesIngredient1 &&
                ingredient2 &&
                recipesIngredient2 &&
                ingredient3 &&
                recipesIngredient3 ? (
                recipesIngredientResults.map(recipeResult => (
                  <CardDetail key={recipeResult.id} {...recipeResult} />
                ))
              ) : ingredient1 === '' && ingredient2 === '' && ingredient3 === '' ? (
                allRecipes.map(recipeResult => (
                  <CardDetail key={recipeResult.id} {...recipeResult} />
                ))
              ) : ingredient1 &&
                recipesIngredient1 &&
                ingredient2 &&
                recipesIngredient2 &&
                ingredient3 &&
                recipesIngredient3 &&
                recipesResults.lenght === 0 ? (
                <div>
                  No results for : {ingredient1}, {ingredient2}, {ingredient3}.
                </div>
              ) : (
                <h1></h1>
              )}
            </Row>
          </div>
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
