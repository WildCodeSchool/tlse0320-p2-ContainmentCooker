import React from 'react';
import { Link } from 'react-router-dom';
import RecipesList from './RecipesList';
import Header from './Header';
import Searchbar from './SearchBar';
import './Css/ListPage.css';

export default function ListPage() {
  return (
    <div className="listPage">
      <Link to="/">Home</Link>
      <Header />
      <Searchbar />
      <h3>Choose the recipes you want to degustate</h3>
      <div>
        <RecipesList />
      </div>
    </div>
  );
}
