import React, { Component } from 'react';
import Categories from './Categories';
import '../css/CategoriesList.css';

class CategoriesList extends Component {
  render() {
    return (
      <div className="categoriesList">
        <div className="categories-picture">
          <Categories />
        </div>
      </div>
    );
  }
}

export default CategoriesList;
