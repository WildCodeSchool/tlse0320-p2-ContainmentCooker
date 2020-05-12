import React from 'react';
import FontAwesome from 'react-fontawesome';
import {
  Card,
  CardImg,
  CardBody,
  Row,
  Col,
  Container,
  CardTitle,
  Button,
  UncontrolledTooltip,
  Spinner
} from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Css/RecipesList.css';

class RecipesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      strIngredient: ''
    };
  }

  componentDidUpdate(prevProps) {
    const linkFrom = window.location.pathname;
    const {
      match: {
        params: { strCategorie }
      }
    } = this.props;
    const prevCategorieId = prevProps.match.params.strCategorie;
    if (linkFrom.indexOf('list-categories') !== -1 && prevCategorieId !== prevProps) {
      this.loadCategorieList(strCategorie);
    } else {
      const strIngredient = this.props.match.params.strIngredient;
      console.log(strIngredient);
      this.loadIngredientRecipesList(strIngredient);
    }
  }

  componentDidMount() {
    const linkFrom = window.location.pathname;
    if (linkFrom.indexOf('list-categories') !== -1) {
      const strCategorie = this.props.match.params.strCategorie;
      console.log(strCategorie);
      this.loadCategorieList(strCategorie);
    } else {
      const strIngredient = this.props.match.params.strIngredient;
      console.log(strIngredient);
      this.loadIngredientRecipesList(strIngredient);
    }
  }

  loadCategorieList(strCategorie) {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategorie}`)
      .then(response => response.data)
      .then(data => {
        this.setState({
          meals: data.meals
        });
      });
  }

  loadIngredientRecipesList(strIngredient) {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${strIngredient}`)
      .then(response => response.data)
      .then(data => {
        this.setState({
          meals: data.meals,
          strIngredient
        });
      });
  }

  render() {
    const meals = this.state.meals;
    console.log(meals);
    return (
      <Container className="main-container" fluid={true}>
        <div className="recipes-list-container">
          <Row xs="1" sm="2" md="3" xl="4">
            {meals !== null ? (
              meals.map(meal => (
                <Col className="container-card-recipe">
                  <Card className="card-recipe">
                    <CardImg
                      top
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="card-image"
                    />
                    <div className="card-heart">
                      <FontAwesome
                        onClick={this.remove}
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
                      <CardTitle className="card-title">{meal.strMeal}</CardTitle>
                      <Link
                        id={meal.idMeal}
                        to={{ pathname: `/recipe-page/${meal.idMeal}` }}
                        type="button"
                        className="ButtonDisplay"
                      >
                        See a recipe
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
              ))
            ) : (
              <div className="ingredient-error-message">
                <div>
                  <Spinner style={{ width: '3rem', height: '3rem', color: 'white' }} />
                </div>
                <div className="text-ingredient-error-message">
                  <p>Oops ...</p>
                  <p>
                    Sorry we don't have recipes for : <strong>{this.state.strIngredient}</strong>
                  </p>
                  <p>Do a new search or return to</p>
                  <Link to={{ pathname: `/` }} className="button-error-message">
                    HOME PAGE >>>
                  </Link>
                </div>
              </div>
            )}
          </Row>
        </div>
      </Container>
    );
  }
}

RecipesList.propTypes = {
  strCategorie: PropTypes.arrayOf(PropTypes.string).isRequired,
  match: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default withRouter(RecipesList);
