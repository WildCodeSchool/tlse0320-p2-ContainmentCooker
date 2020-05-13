import React from 'react';
import Banner from './Banner';
import CategoriesList from '../Main/CategoriesList';
import SearchBar from '../Main/SearchBar';
import Header from '../Main/Header';
import Footer from '../Main/Footer';

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
