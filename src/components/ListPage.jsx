import React from 'react';
import RecipesList from './RecipesList';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';

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
