import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('adds 1 + 2 to equal 3', () => {
  const sum = require('./sum');
  expect(sum(1, 2)).toBe(3);
});
