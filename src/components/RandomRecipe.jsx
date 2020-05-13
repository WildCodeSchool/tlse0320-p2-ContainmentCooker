/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import RecipeCard from './RecipeCard';
import './Css/RecipeCard.css';

class RandomRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: []
    };
    this.getRecipe = this.getRecipe.bind(this);
  }

  componentDidMount() {
    this.getRecipe();
  }

  getRecipe() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => response.data)
      .then(data => {
        this.setState({
          meals: data.meals
        });
      });
  }

  render() {
    return (
      <div className="RandomRecipe">
        {this.state.meals && <RecipeCard meals={this.state.meals} />}
        <div className="containerButtonRecipe">
          <button
            className="ButtonRecipe"
            type="button"
            color="secondary"
            size="lg"
            onClick={this.getRecipe}
          >
            Random recipe
          </button>
        </div>
      </div>
    );
  }
}

export default RandomRecipe;
