import { render, screen } from '@testing-library/react';
import { CombatEmblems } from '..';

test('renders learn react link', () => {
  render(<CombatEmblems />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders hello world button', () => {
  render(<CombatEmblems />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
