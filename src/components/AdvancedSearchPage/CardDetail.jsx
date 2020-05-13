import React from 'react';
import './RecipesList.css';
import { Card, CardImg, CardBody, Col, CardTitle } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

export default function CardDetail(props) {
  return (
    <div className="recipes-list-container">
      <Col className="container-card-recipe card-detail">
        <Card className="card-recipe">
          <CardImg top src={props.strMealThumb} alt={props.strMeal} className="card-image" />
          {/* <div className="card-heart">
            <FontAwesome
              className="recipe-not-love"
              name="heart"
              size="2x"
              id="UncontrolledTooltip"
            />
          </div>
          <UncontrolledTooltip placement="bottom" target="UncontrolledTooltip">
            Add to favorites
          </UncontrolledTooltip> */}
          <CardBody className="card-body">
            <CardTitle className="card-title">{props.strMeal}</CardTitle>
            <Link
              id={props.idMeal}
              to={{ pathname: `/recipe-page/${props.idMeal}` }}
              type="button"
              className="ButtonDisplay"
            >
              See a recipe
            </Link>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
}
