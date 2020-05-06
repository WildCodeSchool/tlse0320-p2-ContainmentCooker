import React, { useState, useEffect } from 'react';
import RecipesList from './RecipesList';
import Header from './Header';
import Footer from './Footer';
import './Css/ListPage.css';
import axios from 'axios';
import _ from 'lodash';
import AdvancedSearch from './AdvancedSearch';

export default function ListPage() {
  // const [country, handleCountry] = useState('');
  // const [category, handleCategory] = useState('');
  // const [recipesByCountry, setRecipesByCountry] = useState([]);
  // const [recipesByCategory, setRecipesByCategory] = useState([]);
  // const [recipesResults, setRecipesResults] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
  //     .then(res => res.data.meals)
  //     .then(res => setRecipesByCountry(res));
  // }, [country]);

  // useEffect(() => {
  //   axios
  //     .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  //     .then(res => res.data.meals)
  //     .then(res => setRecipesByCategory(res));
  // }, [category]);

  // useEffect(() => {
  //   const results = _.intersectionWith(recipesByCountry, recipesByCategory, _.isEqual);
  //   setRecipesResults(results);
  // }, [recipesByCategory, recipesByCountry]);

  return (
    <div className="listPage">
      <Header />
      <AdvancedSearch
      // handleCountry={handleCountry}
      // country={country}
      // handleCategory={handleCategory}
      // category={category}
      // recipesResults={recipesResults}
      />
      <RecipesList />
      <Footer />
    </div>
  );
}
