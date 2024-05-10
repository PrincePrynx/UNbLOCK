import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import CreatorPage from './components/CreatorPage';
import LandingPage from './components/LandingPage';

function App() {
  const [userName, setUserName] = useState('');

  const handleUserName = (name) => {
    setUserName(name);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <LandingPage handleUserName={handleUserName} />
          </Route>
          <Route path="/about" component={AboutPage} />
          <Route path="/creator" component={CreatorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
