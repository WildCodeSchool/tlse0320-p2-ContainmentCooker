import React, { Component } from 'react';

import Categories from './Categories_levrai';
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

export { CategoriesList };
