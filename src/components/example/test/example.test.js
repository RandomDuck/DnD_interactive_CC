import { render, screen } from '@testing-library/react';
import Example from '..';

test('renders learn react link', () => {
  render(<Example />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders hello world button', () => {
  render(<Example />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
