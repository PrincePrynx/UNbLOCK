import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import CreatorPage from './components/CreatorPage';
import CategorySelectionPage from './components/CategorySelectionPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/creator" component={CreatorPage} />
          <Route path="/category" component={CategorySelectionPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

