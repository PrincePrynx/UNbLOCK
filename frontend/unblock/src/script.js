// script.js - Script to handle user input and scrolling

// Function to scroll to the main content section when the page loads
window.onload = () => {
    document.getElementById('nameInput').focus();
  };
  
  // Function to scroll to the main content section when the "Start" button is clicked
  document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('nameInput').blur();
    document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
  });
  