// App.js - Main application component with routing setup

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Author from './components/author';
import Contact from './components/contact';
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
              <li><a href ="/">Home</a></li>
              <li><a href ="/about">About</a></li>
              <li><a href ="/author">Author</a></li>
              <li><a href ="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/author" element={<Author />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dialogue" element={<DialoguePrompt />} />
          <Route path="/fiction" element={<FictionPrompt />} />
          <Route path="/nonfiction" element={<NonfictionPrompt />} />
          <Route path="/poetry" element={<PoetryPrompt />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
