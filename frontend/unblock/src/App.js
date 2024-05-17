// App.js - Main application component with routing setup

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Author from './components/Author';
import Contact from './components/Contact';
import DialoguePrompt from './components/DialoguePrompt';
import FictionPrompt from './components/FictionPrompt';
import NonfictionPrompt from './components/NonfictionPrompt';
import PoetryPrompt from './components/PoetryPrompt';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/author">Author</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/author" component={Author} />
          <Route path="/contact" component={Contact} />
          <Route path="/dialogue" component={DialoguePrompt} />
          <Route path="/fiction" component={FictionPrompt} />
          <Route path="/nonfiction" component={NonfictionPrompt} />
          <Route path="/poetry" component={PoetryPrompt} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
