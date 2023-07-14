import { render, screen } from '@testing-library/react';
import { CombatEmblems } from '..';

test('renders emblems component', () => {
  render(<CombatEmblems />);
  const element = screen.getByTestId('combat-emblems');
  expect(element).toBeInTheDocument();
});

test('renders Inspiration emblem', () => {
  render(<CombatEmblems />);
  const element = screen.getByText(/Inspiration/i);
  expect(element).toBeInTheDocument();
});

test('renders Proficiency emblem', () => {
  render(<CombatEmblems />);
  const element = screen.getByText(/Proficiency/i);
  expect(element).toBeInTheDocument();
});

test('renders Speed emblem', () => {
  render(<CombatEmblems />);
  const element = screen.getByText(/Speed/i);
  expect(element).toBeInTheDocument();
});

test('renders Armor class emblem', () => {
  render(<CombatEmblems />);
  const element = screen.getByText(/Armor class/i);
  expect(element).toBeInTheDocument();
});