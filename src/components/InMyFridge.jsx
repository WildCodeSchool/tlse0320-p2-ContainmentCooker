import React from 'react';
import axios from 'axios';

class InMyFridge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listIngredients: [],
      ingredientsValue1: '',
      ingredientsValue2: '',
      ingredientsValue3: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      ingredientsValue1: event.target.value1,
      ingredientsValue2: event.target.value2,
      ingredientsValue3: event.target.value3
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
      <div className="input-ingredient">
        <div>
          <input
            type="text"
            placeholder="Ingredient 1"
            value={this.state.ingredientsValue1}
            onChange={this.handleChange}
            list="data"
          />
          <input
            type="text"
            placeholder="Ingredient 2"
            value={this.state.ingredientsValue2}
            onChange={this.handleChange}
            list="data"
          />
          <input
            type="text"
            placeholder="Ingredient 3"
            value={this.state.ingredientsValue3}
            onChange={this.handleChange}
            list="data"
          />
        </div>
        <datalist id="data">
          {this.state.listIngredients.map((item, key) => (
            <option key={key} value={item.strIngredient} />
          ))}
        </datalist>
      </div>
    );
  }
}

export default InMyFridge;
