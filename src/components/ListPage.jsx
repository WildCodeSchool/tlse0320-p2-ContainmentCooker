import React from 'react';
import RecipesList from './AdvancedSearchPage/RecipesList';
import Header from './Main/Header';
import Footer from './Main/Footer';
import SearchBar from './Main/SearchBar';

export default function ListPage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <RecipesList />
      <Footer />
    </div>
  );
}
