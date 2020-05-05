import React from 'react';
import axios from 'axios';

class AdvancedSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listArea: [],
      areaInput: '',
      listCategory: [],
      categoryInput: '',
      inputValue: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      areaInput: event.target.value1,
      categoryInput: event.target.value2
    });
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
    return (
      <div className="input-advanced">
        <input
          type="text"
          placeholder="Area"
          value={this.state.areaInput}
          onChange={this.handleChange}
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
          value={this.state.categoryInput}
          onChange={this.handleChange}
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
