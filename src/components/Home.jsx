import React from 'react';
import Banner from './Banner';
import CategoriesList from './CategoriesList';
import SearchBar from './SearchBar';

function Home() {
  return (
    <div>
      <Banner />
      <SearchBar />
      <CategoriesList />
    </div>
  );
}

export default Home;
