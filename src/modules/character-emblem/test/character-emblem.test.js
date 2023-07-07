import { render, screen } from '@testing-library/react';
import { CharacterEmblem } from '..';

test('renders SkillsList', () => {
  render(<CharacterEmblem />);
  const element = screen.getByTestId('CharacterEmblem');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('id','CharacterEmblem')
});
