import React from 'react';
import axios from 'axios';

class InMyFridge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listIngredients: []
      // ingredientsValue1: '',
      // ingredientsValue2: '',
      // ingredientsValue3: ''
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  // handleChange(event) {
  //   this.setState({
  //     ingredientsValue1: event.target.value1,
  //     ingredientsValue2: event.target.value2,
  //     ingredientsValue3: event.target.value3
  //   });
  // }
  componentDidMount() {
    const listOfIngredients = this.loadIngredients();
    console.log(listOfIngredients);
  }
  loadIngredients() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/list.php?i=`)
      .then(response => response.data)
      .then(data => {
        this.setState({
          listIngredients: data.meals
        });
      });
  }

  render() {
    const {
      ingredient1,
      ingredient2,
      ingredient3,
      handleIngredient1,
      handleIngredient2,
      handleIngredient3
    } = this.props;
    return (
      <div className="input-ingredient">
        <form>
          <input
            type="text"
            placeholder="Ingredient 1"
            value={ingredient1}
            onChange={e => handleIngredient1(e.target.value)}
            list="data"
          />
          {ingredient1 ? (
            <input
              type="text"
              placeholder="Ingredient 2"
              value={ingredient2}
              onChange={e => handleIngredient2(e.target.value)}
              list="data"
            />
          ) : (
            <></>
          )}
          {ingredient1 && ingredient2 ? (
            <input
              type="text"
              placeholder="Ingredient 3"
              value={ingredient3}
              onChange={e => handleIngredient3(e.target.value)}
              list="data"
            />
          ) : (
            <></>
          )}
          <datalist id="data">
            {this.state.listIngredients.map((item, key) => (
              <option key={key} value={item.strIngredient} />
            ))}
          </datalist>
        </form>
      </div>
    );
  }
}

export default InMyFridge;
