import { render, screen } from '@testing-library/react';
import { AbilityScore } from '..';

test('renders ability-score', () => {
  render(<AbilityScore type='str' />);
  const element = screen.getByTestId('ability-score');
  expect(element).toBeInTheDocument();
});
