import { render, screen } from '@testing-library/react';
import { SkillItem } from '..';

test('renders skill', () => {
  render(<SkillItem type='str' name="test" />);
  const element = screen.getByTestId('skill');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('id','skill')
});
