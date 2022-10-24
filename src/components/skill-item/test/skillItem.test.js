import { render, screen } from '@testing-library/react';
import { Skill } from '..';

test('renders skill', () => {
  render(<Skill />);
  const element = screen.getByTestId('skill');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('id','skill')
});
