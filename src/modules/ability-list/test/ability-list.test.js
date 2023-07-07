import { render, screen } from '@testing-library/react';
import { AbilityList } from '..';

test('renders AbilityList', () => {
  render(<AbilityList />);
  const element = screen.getByTestId('abs');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('id','abs')
});
