import React from 'react';
import RecipesList from './RecipesList';
import Header from './Header';
import Footer from './Footer';
import './Css/ListPage.css';
import _ from 'lodash';
import SearchBar from './SearchBar';

export default function ListPage() {
  return (
    <div className="listPage">
      <Header />
      <SearchBar />
      <RecipesList />
      <Footer />
    </div>
  );
}
