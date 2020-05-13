import React from 'react';
import { Badge, ListGroup, ListGroupItem } from 'reactstrap';
import './RecipeCard.css';

function IngredientsList({ meal }) {
  const data = Object.entries(meal).reduce(
    (accumulator, [key, value]) => (value ? { ...accumulator, [key]: value } : accumulator),
    {}
  );
  const keys = Object.keys(data);
  const ingredients = [];
  const measures = [];

  for (let i = 0; i < keys.length; i++) {
    if (keys[i].indexOf('strIngredient') !== -1) {
      ingredients.push(data[keys[i]]);
    }
    if (keys[i].indexOf('strMeasure') !== -1) {
      measures.push(data[keys[i]]);
    }
  }

  return (
    <div>
      <ListGroup>
        {ingredients.map((_, i) => (
          <ListGroupItem>
            {ingredients[i]}
            <Badge className="badge" pill>
              {measures[i]}
            </Badge>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default IngredientsList;
