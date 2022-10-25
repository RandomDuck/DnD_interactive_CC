import { render, screen } from '@testing-library/react';
import { ModInput, ModDisplay } from '..';

test('renders ModDisplay link', () => {
  render(<ModDisplay type='str' boxName='str' />);
  const linkElement = screen.getByText('0');
  expect(linkElement).toBeInTheDocument();
});

test('renders ModInput button', () => {
  render(<ModInput type='str' />);
  const linkElement = screen.getByRole('spinbutton');
  expect(linkElement).toBeInTheDocument();
});
