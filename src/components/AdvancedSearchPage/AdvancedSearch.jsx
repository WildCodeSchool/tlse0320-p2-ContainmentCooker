import React from 'react';
import axios from 'axios';
import './AdvancedSearch.css';

class AdvancedSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listArea: [],
      listCategory: []
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
      <div className="select-advanced">
        <label htmlFor="area-select">
          <select
            placeholder="Area"
            value={country}
            onChange={e => handleCountry(e.target.value)}
            className="select-by-area"
          >
            <option className="option-select">Choose your country</option>
            {this.state.listArea.map((item, key) => (
              <option key={key} value={item.strArea} className="option-select">
                {item.strArea}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="fridge-select">
          <select
            type="text"
            placeholder="Category"
            value={category}
            onChange={e => handleCategory(e.target.value)}
            list="data-category"
            className="select-by-category"
          >
            <option className="option-select">Choose your category</option>
            {this.state.listCategory.map((item, key) => (
              <option key={key} value={item.strCategory} className="option-select">
                {item.strCategory}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

export default AdvancedSearch;
