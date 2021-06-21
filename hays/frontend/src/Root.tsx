import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import Home from './pages/home/home'
import './styles/Root.css'

function Root() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Root;
