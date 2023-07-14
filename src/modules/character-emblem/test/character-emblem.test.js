import { render, screen } from '@testing-library/react';
import { CharacterEmblem } from '..';
import { atom } from 'jotai';
import { LevelEmblem } from '../components/levelEmblem';
const lvl = atom(1);

test('renders SkillsList', () => {
  render(<CharacterEmblem />);
  const element = screen.getByTestId('CharacterEmblem');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('id','CharacterEmblem')
});

test('renders levelEmblem', () => {
  render(<LevelEmblem config={lvl} />);
  const element = screen.getByTestId('level');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('id', 'level')
});
