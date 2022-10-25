import { render, screen } from '@testing-library/react';
import { Root } from '..';

test('renders root', () => {
  render(<Root />);
  const element = screen.getByTestId('root');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('id','root')
});
