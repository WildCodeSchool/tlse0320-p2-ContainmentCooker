import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import RandomPage from './components/RandomPage';
import ContactPage from './components/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/randompage" component={RandomPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
