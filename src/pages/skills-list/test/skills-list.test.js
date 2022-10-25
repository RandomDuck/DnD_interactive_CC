import { render, screen } from '@testing-library/react';
import { SkillsList } from '..';

test('renders SkillsList', () => {
  render(<SkillsList />);
  const element = screen.getByTestId('skillList');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('id','skillList')
});
