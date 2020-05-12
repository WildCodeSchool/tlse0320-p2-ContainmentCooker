import React from 'react';
import Banner from './Banner';
import CategoriesList from './CategoriesList';
import SearchBar from './SearchBar';
import Header from './Header';
import Footer from './Footer';

import './Home.css';

function Home() {
  return (
    <div className="global">
      <Header />
      <Banner />
      <SearchBar />
      <CategoriesList />
      <Footer />
    </div>
  );
}

export default Home;
