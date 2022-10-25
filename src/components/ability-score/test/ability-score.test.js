import { render, screen } from '@testing-library/react';
import { AbilityScore } from '..';

test('renders skill', () => {
  render(<AbilityScore />);
  const element = screen.getByTestId('skill');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('id','skill')
});
