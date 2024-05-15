import { render, screen } from '@testing-library/react';
import App from './App';

/* App.test.css - Test styles for the React app */

// /* Example test styles */
// .test-element {
//   background-color: red
//   color: white
//   padding: 10px
//   border-radius: 5px
// }




test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
