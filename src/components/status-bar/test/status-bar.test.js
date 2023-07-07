import { render, screen } from '@testing-library/react';
import { StatusBar } from '..';
import { atom } from 'jotai';
const testMax = atom(20);
const testCurrent = atom(10);

test('renders status-bar link', () => {
  render(<StatusBar maxConfig={testMax} label="test" color={{ positive: '#0c0', negative: '#070', text: '#00a' }} config={testCurrent} />);
  const linkElement = screen.getByTestId('status-bar');
  expect(linkElement).toBeInTheDocument();
});