import { render, screen } from '@testing-library/react';
import { Root } from '..';

test('renders learn react link', () => {
  render(<Root />);
  const element = screen.getByText(/hello world/i)
  expect(element).toBeInTheDocument();
});
