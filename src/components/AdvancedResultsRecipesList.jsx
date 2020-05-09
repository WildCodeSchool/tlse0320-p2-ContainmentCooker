import React from 'react';
import './Css/RecipesList.css';
import { Row, Container } from 'reactstrap';
import CardDetail from './CardDetail';

export default function AdvancedResultsRecipesList({
  country,
  category,
  recipesResults,
  recipesByCountry,
  recipesByCategory,
  allRecipes
}) {
  return (
    <div>
      <Container className="main-container" fluid={true}>
        <Row xs="1" sm="2" md="3" xl="4">
          {country && recipesByCountry && category && recipesByCategory ? (
            recipesResults.map(recipeResult => (
              <CardDetail key={recipeResult.id} {...recipeResult} />
            ))
          ) : country && recipesByCountry && (!category || category === 'Choose your category') ? (
            recipesByCountry.map(recipeResult => (
              <CardDetail key={recipeResult.id} {...recipeResult} />
            ))
          ) : category && recipesByCategory && (!country || country === 'Choose your country') ? (
            recipesByCategory.map(recipeResult => (
              <CardDetail key={recipeResult.id} {...recipeResult} />
            ))
          ) : (!country || country === 'Choose your country') &&
            (!category || category === 'Choose your category') ? (
            allRecipes.map(recipeResult => <CardDetail key={recipeResult.id} {...recipeResult} />)
          ) : (
            <h1></h1>
          )}
        </Row>
      </Container>
    </div>
  );
}
