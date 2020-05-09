import React from 'react';
import axios from 'axios';
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
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${strMeal}`)
      .then(response => response.data)
      .then(data => {
        this.setState({
          meals: data.meals
        });
      });
  }

  render() {
    return (
      <div className="RecipeClick">
        {this.state.meals && <RecipeCard meals={this.state.meals} />}
      </div>
    );
  }
}

export default RandomRecipe;
