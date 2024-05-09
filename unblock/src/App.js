import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Creator from './components/Creator';
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
          <Route path="/about" component={About} />
          <Route path="/creator" component={Creator} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
