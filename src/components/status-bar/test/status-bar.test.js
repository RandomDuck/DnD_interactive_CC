import { render, screen } from '@testing-library/react';
import { StatusBar } from '..';

test('renders status-bar link', () => {
  render(<StatusBar />);
  const linkElement = screen.getByTestId('status-bar');
  expect(linkElement).toBeInTheDocument();
});