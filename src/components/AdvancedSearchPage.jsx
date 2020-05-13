import React, { useState, useEffect } from 'react';
import AdvancedResultsRecipesList from './AdvancedResultsRecipesList';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import _ from 'lodash';
import { Button, ButtonGroup } from 'reactstrap';
import AdvancedSearch from './AdvancedSearch';
import InMyFridge from './InMyFridge';
import './Css/AdvancedSearchPage.css';

export default function AdvancedSearchPage() {
  const [country, handleCountry] = useState('');
  const [category, handleCategory] = useState('');
  const [recipesByCountry, setRecipesByCountry] = useState([]);
  const [recipesByCategory, setRecipesByCategory] = useState([]);
  const [recipesResults, setRecipesResults] = useState([]);
  const [allRecipes, getAllRecipes] = useState([]);
  const [ingredient1, handleIngredient1] = useState('');
  const [ingredient2, handleIngredient2] = useState('');
  const [ingredient3, handleIngredient3] = useState('');
  const [recipesIngredient1, setRecipesIngredient1] = useState([]);
  const [recipesIngredient2, setRecipesIngredient2] = useState([]);
  const [recipesIngredient3, setRecipesIngredient3] = useState([]);
  const [recipesResultsInput1andInput2, setRecipesResultsInput1andInput2] = useState([]);
  const [recipesIngredientResults, setrecipesIngredientResults] = useState([]);
  const [rSelected, setRSelected] = useState(null);

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

  useEffect(() => {
    if (ingredient1 === '') {
      setRecipesIngredient1([]);
    } else {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient1}`)
        .then(res => res.data.meals)
        .then(res => setRecipesIngredient1(res));
    }
  }, [ingredient1]);

  useEffect(() => {
    if (ingredient2 === '') {
      setRecipesIngredient2([]);
    } else {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient2}`)
        .then(res => res.data.meals)
        .then(res => setRecipesIngredient2(res));
    }
  }, [ingredient2]);

  useEffect(() => {
    if (ingredient3 === '') {
      setRecipesIngredient3([]);
    } else {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient3}`)
        .then(res => res.data.meals)
        .then(res => setRecipesIngredient3(res));
    }
  }, [ingredient3]);

  useEffect(() => {
    const results = _.intersectionWith(
      recipesIngredient1,
      recipesIngredient2,
      recipesIngredient3,
      _.isEqual
    );
    setrecipesIngredientResults(results);
  }, [recipesIngredient1, recipesIngredient2, recipesIngredient3]);

  useEffect(() => {
    const results = _.intersectionWith(recipesIngredient1, recipesIngredient2, _.isEqual);
    setRecipesResultsInput1andInput2(results);
  }, [recipesIngredient1, recipesIngredient2]);

  return (
    <div>
      <Header />
      <h2 className="advanced-search-title">Make your research choice</h2>
      <ButtonGroup className="advanced-search-button-choice">
        <Button
          className="advanced-search-button-country-category"
          color="primary"
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
        >
          Filter by country/category
        </Button>
        <Button
          className="advanced-search-button-fridge"
          color="primary"
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
        >
          Filter by ingredients
        </Button>
      </ButtonGroup>
      {rSelected === 1 ? (
        <AdvancedSearch
          handleCountry={handleCountry}
          country={country}
          handleCategory={handleCategory}
          category={category}
          recipesResults={recipesResults}
        />
      ) : rSelected === 2 ? (
        <InMyFridge
          ingredient1={ingredient1}
          ingredient2={ingredient2}
          ingredient3={ingredient3}
          handleIngredient1={handleIngredient1}
          handleIngredient2={handleIngredient2}
          handleIngredient3={handleIngredient3}
          recipesIngredient1={recipesIngredient1}
          recipesIngredient2={recipesIngredient2}
          recipesIngredient3={recipesIngredient3}
          recipesIngredientResults={recipesIngredientResults}
          recipesResultsInput1andInput2={recipesResultsInput1andInput2}
        />
      ) : (
        <></>
      )}
      <AdvancedResultsRecipesList
        country={country}
        category={category}
        recipesResults={recipesResults}
        recipesByCategory={recipesByCategory}
        recipesByCountry={recipesByCountry}
        allRecipes={allRecipes}
        ingredient1={ingredient1}
        ingredient2={ingredient2}
        ingredient3={ingredient3}
        recipesIngredient1={recipesIngredient1}
        recipesIngredient2={recipesIngredient2}
        recipesIngredient3={recipesIngredient3}
        recipesIngredientResults={recipesIngredientResults}
        rSelected={rSelected}
        recipesResultsInput1andInput2={recipesResultsInput1andInput2}
      />
      <Footer />
    </div>
  );
}
