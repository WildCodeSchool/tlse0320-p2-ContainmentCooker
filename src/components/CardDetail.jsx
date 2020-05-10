import React from 'react';
import './Css/RecipesList.css';
import { Card, CardImg, CardBody, Col, CardTitle, Button, UncontrolledTooltip } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

export default function CardDetail(props) {
  return (
    <div className="recipes-list-container">
      <Col className="container-card-recipe">
        <Card className="card-recipe">
          <CardImg top src={props.strMealThumb} alt={props.strMeal} className="card-image" />
          <div className="card-heart">
            <FontAwesome
              className="recipe-not-love"
              name="heart"
              size="2x"
              id="UncontrolledTooltip"
            />
          </div>
          <UncontrolledTooltip placement="bottom" target="UncontrolledTooltip">
            Add to favorites
          </UncontrolledTooltip>
          <CardBody>
            <CardTitle className="card-title">{props.strMeal}</CardTitle>
            <Button>See more</Button>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
}