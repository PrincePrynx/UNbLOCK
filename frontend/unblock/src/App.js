// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Author from './components/Author';
import Contact from './components/Contact';
import DialoguePrompt from './components/DialoguePrompt';
import FictionPrompt from './components/FictionPrompt';
import NonfictionPrompt from './components/NonfictionPrompt';
import PoetryPrompt from './components/PoetryPrompt';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
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
        </main>
      </div>
    </Router>
  );
};

export default App;
