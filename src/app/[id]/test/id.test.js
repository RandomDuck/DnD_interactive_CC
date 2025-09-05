import { render, screen } from '@testing-library/react';
import Root from '../page';

test('renders ID', () => {
  render(<Root />);
  const element = screen.getByTestId('rootElement');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('id', 'rootElement');
});
