import React from 'react';
import RecipesList from './RecipesList';
import Header from './Header';
import Footer from './Footer';
import './Css/ListPage.css';

export default function ListPage() {
  return (
    <div className="listPage">
      <Header />
      <RecipesList />
      <Footer />
    </div>
  );
}
