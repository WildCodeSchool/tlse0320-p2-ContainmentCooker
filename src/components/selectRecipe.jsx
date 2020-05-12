import React from 'react';
import axios from 'axios';
/*import RecipesList from './components/RecipesList';*/

/* Recuperer l'ID de la recette sur page RecipesList !!!!! avec bouton 'See More' */

class selectRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: []
    };
    this.getSelectRecipe = this.getSelectRecipe.bind(this);
  }

  componentDidMount() {
    this.getSelectRecipe;
  }

  /*Appel API avec l'id ?*/
  getSelectRecipe() {
    axios
      .get(
        'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
      ) /* récuperer l'id de la page RecipesList */
      .then(response => response.data)
      .then(data => {
        this.setState({
          meals: data.idMeal /*vérifier idMeal ou meals ? */
        });
      });
  }

  render() {
    return (
      <div className="selectRecipe">
        <RecipePage meals={this.state.meals} />}{' '}
        {/* afficher recette meme structure que RandomRecipe}*/}
      </div>
    );
  }
}

export default selectRecipe;
