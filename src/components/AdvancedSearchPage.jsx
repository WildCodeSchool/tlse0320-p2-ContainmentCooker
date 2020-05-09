import React, { useState, useEffect } from 'react';
import AdvancedResultsRecipesList from './AdvancedResultsRecipesList';
import Header from './Header';
import Footer from './Footer';
import './Css/ListPage.css';
import axios from 'axios';
import _ from 'lodash';
import AdvancedSearch from './AdvancedSearch';

export default function AdvancedSearchPage() {
  const [country, handleCountry] = useState('');
  const [category, handleCategory] = useState('');
  const [recipesByCountry, setRecipesByCountry] = useState([]);
  const [recipesByCategory, setRecipesByCategory] = useState([]);
  const [recipesResults, setRecipesResults] = useState([]);
  const [allRecipes, getAllRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
      .then(res => res.data.meals)
      .then(res => setRecipesByCountry(res));
  }, [country]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(res => res.data.meals)
      .then(res => setRecipesByCategory(res));
  }, [category]);

  useEffect(() => {
    const results = _.intersectionWith(recipesByCountry, recipesByCategory, _.isEqual);
    setRecipesResults(results);
  }, [recipesByCategory, recipesByCountry]);

  useEffect(() => {
    axios
      .get(` https://www.themealdb.com/api/json/v1/1/filter.php?a=french`)
      .then(res => res.data.meals)
      .then(res => getAllRecipes(res));
  }, [allRecipes]);

  return (
    <div>
      <Header />
      <AdvancedSearch
        handleCountry={handleCountry}
        country={country}
        handleCategory={handleCategory}
        category={category}
        recipesResults={recipesResults}
      />
      <AdvancedResultsRecipesList
        handleCountry={handleCountry}
        country={country}
        handleCategory={handleCategory}
        category={category}
        recipesResults={recipesResults}
        recipesByCategory={recipesByCategory}
        recipesByCountry={recipesByCountry}
        allRecipes={allRecipes}
      />
      <Footer />
    </div>
  );
}
