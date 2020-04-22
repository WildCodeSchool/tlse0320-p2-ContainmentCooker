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
  UncontrolledTooltip
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Css/RecipesList.css';

class RecipesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: []
    };
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { strCategorie }
      }
    } = this.props;
    const prevCategorieId = prevProps.match.params.strCategorie;
    if (prevCategorieId !== strCategorie) {
      this.loadCategorieList(strCategorie);
    }
  }

  componentDidMount() {
    const strCategorie = this.props.match.params.strCategorie;
    console.log(strCategorie);
    this.loadCategorieList(strCategorie);
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

  render() {
    const meals = this.state.meals;
    console.log(meals);
    return (
      <Container fluid={true}>
        <div className="recipes-list-container">
          <Row xs="1" sm="2" md="3" xl="4">
            {meals.map(meal => (
              <Col>
                <Card>
                  <CardImg top src={meal.strMealThumb} alt={meal.strMeal} className="card-image" />
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
                    <Button>See more</Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    );
  }
}

export default withRouter(RecipesList);
