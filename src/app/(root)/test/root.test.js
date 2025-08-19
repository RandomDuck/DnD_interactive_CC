import { render, screen } from '@testing-library/react';
import { Root } from '..';

test('renders root', () => {
  render(<Root />);
  const element = screen.getByTestId('rootElement');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('id','rootElement');
});
