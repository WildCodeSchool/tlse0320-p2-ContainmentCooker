import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ListPage from './components/ListPage';
import RandomPage from './components/RandomPage';
import ContactPage from './components/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipePage from './components/RecipePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/randompage" component={RandomPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/list-categories/:strCategorie" component={ListPage} />
          <Route path="/list-recipes/:strIngredient" component={ListPage} />
          <Route path="/recipe-page/:idMeal" component={RecipePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
