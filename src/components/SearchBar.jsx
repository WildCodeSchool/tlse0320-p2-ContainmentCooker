import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listIngredients: [],
      ingredientsValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      ingredientsValue: event.target.value
    });
  }

  componentDidMount() {
    const listOfIngredients = this.loadIngredients();
    console.log(listOfIngredients);
  }

  loadIngredients() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
      .then(response => response.data)
      .then(data => {
        this.setState({
          listIngredients: data.meals
        });
      });
  }

  render() {
    return (
      <div className="SearchBar">
        <div id="searcharea">
          <input
            list="data"
            value={this.state.ingredientsValue}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            type="text"
            placeholder="Your main ingredient"
            id="bar"
          />
          <datalist id="data">
            {this.state.listIngredients.map((item, key) => (
              <option key={key} value={item.strIngredient} />
            ))}
          </datalist>
          <Link to={{ pathname: `/list-recipes/${this.state.ingredientsValue}` }}>
            <img
              src="https://pngimage.net/wp-content/uploads/2018/06/icone-loupe-png-2.png"
              id="searchsubmit"
              alt="loupe"
            />
          </Link>
        </div>
        <div />
      </div>
    );
  }
}

export default withRouter(SearchBar);
