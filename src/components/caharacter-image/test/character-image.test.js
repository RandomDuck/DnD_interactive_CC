import { render, screen } from '@testing-library/react';
import { CharacterImg } from '..';

test('renders character-image', () => {
  render(<CharacterImg />);
  const element = screen.getByTestId('char-img');
  expect(element).toBeInTheDocument();
});
