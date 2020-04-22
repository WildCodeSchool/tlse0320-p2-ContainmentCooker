import React from 'react';
import './App.css';
import Home from './components/Home';
import ListPage from './components/ListPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list-categories/:strCategorie" component={ListPage} />
      </Switch>
    </Router>
  );
}

export default App;
