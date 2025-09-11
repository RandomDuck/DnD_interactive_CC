import { render, screen } from '@testing-library/react';
import { Dropdown } from '..';


test('Dropdown is renderd', () => {
  render(<Dropdown />)
  const dropdown = screen.getAllByRole('select')[0]
  expect(dropdown).toBeVisible();
});
