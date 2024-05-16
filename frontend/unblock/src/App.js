// // App.js - Main component for the React app

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import About from './about';
// import Contact from './contact';
// import Author from './author';
// import Home from './home'; // Assuming you have a Home component for the landing page

// const App = () => {
//   return (
//     <Router>
//       <div>
//         {/* Navigation */}
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//             <li>
//               <Link to="/author">Author</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Routes */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/contact">
//             <Contact />
//           </Route>
//           <Route path="/author">
//             <Author />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;























// App.js - Main component for the React app

import React, { useState } from 'react';
import DialoguePrompt from './components/DialoguePrompt';
import PoetryPrompt from './components/PoetryPrompt';
import NonfictionPrompt from './components/NonfictionPrompt';
import FictionPrompt from './components/FictionPrompt';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import contact from './public/contact'
// import About from './public/about'
// import Author from './public/author'

const App = () => {
  const [name, setName] = useState('');

  // Function to handle input change
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
<BrowserRouter>
<Routes>

<Route path="/" element={<home />} />
<Route path="contact" element={<contact />} />
<Route path="about" element={<about />} />
<Route path="author" element={<author />} />
</Routes>
</BrowserRouter>,


    <div>
      <h1>Welcome to UNbLOCK</h1>
      <p>Please enter your name:</p>
      <input type="text" value={name} onChange={handleChange} />
      {name && (
        <div>
          <DialoguePrompt name={name} />
          <PoetryPrompt name={name} />
          <NonfictionPrompt name={name} />
          <FictionPrompt name={name} />
        </div>
      )}
    </div>
  );
};

export default App;
