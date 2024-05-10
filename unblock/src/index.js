import React from 'react';
import ReactDOM from 'react-dom/unblock';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import './index.html';

import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import CreatorPage from './components/CreatorPage';
import CategoryPage from './components/CategoryPage';
import PromptGenerator from './components/PromptGenerator';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/creator">
          <CreatorPage />
        </Route>
        <Route path="/category">
          <CategoryPage />
        </Route>
        <Route path="/generate/:category" render={({ match }) => <PromptGenerator category={match.params.category} />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
