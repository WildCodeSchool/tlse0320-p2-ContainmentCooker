import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import ListPage from './components/ListPage';
import RandomPage from './components/RandomPage';
import ContactPage from './components/ContactPage';
import AdvancedSearch from './components/AdvancedSearch';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [country, handleCountry] = useState('');
  const [category, handleCategory] = useState('');
  const [recipesByCountry, setRecipesByCountry] = useState([]);
  const [recipesByCategory, setRecipesByCategory] = useState([]);
  const [recipesResults, setRecipesResults] = useState([]);

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

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/randompage" component={RandomPage} />
          <Route path="/contact" component={ContactPage} />
          <Route
            path="/list-categories/:strCategorie"
            component={ListPage}
            // component={props => ( <ListPage {...props} country={country} handleCountry={handleCountry} />)}
          />
          <Route path="/list-recipes/:strIngredient" component={ListPage} />
          {/* <Route
            path="/all-recipes"
            component={() => (
              <AdvancedSearch
                handleCountry={handleCountry}
                country={country}
                handleCategory={handleCategory}
                category={category}
                recipesResults={recipesResults}
              />
            )}
          /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
