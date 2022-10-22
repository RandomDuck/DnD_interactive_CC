import { render, screen } from '@testing-library/react';
import { StyledChekbox } from '../imports';


test('chekbox is renderd', () => {
  render(<StyledChekbox />);
  const checkbox = screen.getAllByRole('checkbox')[0]
  expect(checkbox).toBeVisible();
});
