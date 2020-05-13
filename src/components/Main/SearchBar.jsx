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

  componentDidMount() {
    const listOfIngredients = this.loadIngredients();
    console.log(listOfIngredients);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      ingredientsValue: event.target.value
    });
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
    const { ingredientsValue } = this.props;
    return (
      <div className="SearchBar">
        <h2 className="SearchTitle"> Give me one ingredient, I give you some recipes !</h2>
        <div className="searcharea">
          <input
            list="data"
            value={ingredientsValue}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            type="text"
            placeholder="Your main ingredient"
            className="bar"
          />
          <datalist id="data">
            {this.state.listIngredients.map((item, key) => (
              <option key={key} value={item.strIngredient} />
            ))}
          </datalist>
          <Link to={{ pathname: `/list-recipes/${this.state.ingredientsValue}` }}>
            <img
              src="https://pngimage.net/wp-content/uploads/2018/06/icone-loupe-png-2.png"
              className="searchsubmit"
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
