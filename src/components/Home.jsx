import React from 'react';
import Banner from './Banner';
import CategoriesList from './CategoriesList';
import SearchBar from './SearchBar';
import Header from './Header';

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <SearchBar />
      <CategoriesList />
    </div>
  );
}

export default Home;
