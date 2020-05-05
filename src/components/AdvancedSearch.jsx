import React from 'react';
import axios from 'axios';

class AdvancedSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listArea: [],
      listCategory: [],
      inputValue: []
    };
  }

  componentDidMount() {
    this.loadAreas();
    this.loadCategories();
  }

  loadAreas() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then(response => response.data)
      .then(data => {
        this.setState({
          listArea: data.meals
        });
      });
  }
  loadCategories() {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then(response => response.data)
      .then(data => {
        this.setState({
          listCategory: data.meals
        });
      });
  }

  render() {
    const { country, handleCountry, category, handleCategory } = this.props;
    return (
      <div className="input-advanced">
        <input
          type="text"
          placeholder="Area"
          value={country}
          onChange={e => handleCountry(e.target.value)}
          list="data-area"
        ></input>
        <datalist id="data-area">
          {this.state.listArea.map((item, key) => (
            <option key={key} value={item.strArea} />
          ))}
        </datalist>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => handleCategory(e.target.value)}
          list="data-category"
        ></input>
        <datalist id="data-category">
          {this.state.listCategory.map((item, key) => (
            <option key={key} value={item.strCategory} />
          ))}
        </datalist>{' '}
      </div>
    );
  }
}

export default AdvancedSearch;
/*
 Je saisie un pays afin de filtrer les recettes du pays
 Je saisie une catégorie afin d'avoir les recettes correspondantes
 
*/
