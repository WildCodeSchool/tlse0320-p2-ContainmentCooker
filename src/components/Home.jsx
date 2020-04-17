import React from 'react';
import Banner from './Banner';
import { CategoriesList } from './CategoriesList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <CategoriesList />
      </div>
    );
  }
}

export default Home;
