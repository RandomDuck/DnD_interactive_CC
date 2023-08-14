import { render, screen } from '@testing-library/react';
import { SkillsList, AbilityList, SavingThrows } from '../imports';
import { AbilityAndSkill } from '..';

test('renders SkillsList', () => {
  render(<SkillsList />);
  const element = screen.getByTestId('skillList');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('id', 'skillList');
});

test('renders SavingThrows', () => {
  render(<SavingThrows />);
  const element = screen.getByTestId('savingthrow');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('id', 'savingthrow');
});

test('renders AbilityList', () => {
  render(<AbilityList />);
  const element = screen.getByTestId('abs');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('id', 'abs');
});

test('renders AbilityAndSkill', () => {
  render(<AbilityAndSkill />);
  const element = screen.getByTestId('AbilityAndSkill');
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute('id', 'AbilityAndSkill');
});
