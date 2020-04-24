import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ListPage from './components/ListPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RandomPage from './components/RandomPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/randompage" component={RandomPage} />
          <Route path="/list-categories/:strCategorie" component={ListPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
