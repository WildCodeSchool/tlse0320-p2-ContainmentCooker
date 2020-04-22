/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import './RandomPage.css';

class RandomRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        strMeal: ''
      }
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
          recipe: data
        });
      });
  }

  render() {
    return (
      <div className="RandomRecipe">
        {this.state.recipe && <RecipeCard recipe={this.state.recipe} />}
        <button type="button" onClick={this.getRecipe}>
          Random recipe
        </button>
      </div>
    );
  }
}

export default RandomRecipe;
