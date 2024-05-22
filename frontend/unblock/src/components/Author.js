// Author.js - React component for the Author page

import React from 'react';
import './Author.css';

const Author = () => {
  return (
    <div className="author-container">
      <img src="author-photo.jpg" alt="Author" />
      <h1>About the Author</h1>
      <p>Prynx is a writer who is passionate about building a communnity for fellow writers.</p>
    </div>
  );
};

export default Author;
