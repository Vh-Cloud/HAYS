import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './styles/Root.css'

function Root() {
  return (
    <Router>
      <div className="Nav-container">
        <span>
          <Link to="/">Hays</Link>
        </span>

        <div className="Nav">
          <span>
            <Link to="/">Home</Link>
          </span>

          <span>
            <Link to="/about">About us</Link>
          </span>

          <span>
            <Link to="/contact">Contact</Link>
          </span>
        </div>
      </div>
    </Router>
  );
}

export default Root;
