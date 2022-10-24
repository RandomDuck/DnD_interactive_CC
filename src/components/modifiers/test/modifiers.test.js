import { render, screen } from '@testing-library/react';
import { ModInput, ModDisplay } from '..';

test('renders ModDisplay link', () => {
  render(<ModDisplay />);
  const linkElement = screen.getByRole('button');
  expect(linkElement).toBeInTheDocument();
});

test('renders ModInput button', () => {
  render(<ModInput />);
  const linkElement = screen.getByRole('button');
  expect(linkElement).toBeInTheDocument();
});
