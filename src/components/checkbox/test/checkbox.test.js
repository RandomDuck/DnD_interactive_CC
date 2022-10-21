import { render, screen } from '@testing-library/react';
import { Checkbox } from '..';


test('renders hello world button', () => {
  render(<Checkbox />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
