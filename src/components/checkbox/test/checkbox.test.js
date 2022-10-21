import { render, screen } from '@testing-library/react';
import { Checkbox } from '..';


test('chekbox is renderd', () => {
  render(<Checkbox />);
  const checkbox = screen.getAllByRole(Checkbox)[0]
  expect(checkbox).toBeVisible();
});
