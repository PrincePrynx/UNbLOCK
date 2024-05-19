// router.js - Router configuration for frontend

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DialoguePrompt from './components/DialoguePrompt';
import FictionPrompt from './components/FictionPrompt';
import NonfictionPrompt from './components/NonfictionPrompt';
import PoetryPrompt from './components/PoetryPrompt';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dialogue" component={DialoguePrompt} />
        <Route path="/fiction" component={FictionPrompt} />
        <Route path="/nonfiction" component={NonfictionPrompt} />
        <Route path="/poetry" component={PoetryPrompt} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
