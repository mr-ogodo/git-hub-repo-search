import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';

test('Render Home Page', () => {
  render(<HomePage/>);
  const searchButton = screen.getByTestId('search-button');
  const userInput = screen.getByTestId('user-input');
  const repoInput = screen.getByTestId('repo-input');
  
  expect(userInput).not.toHaveValue();
  expect(repoInput).not.toHaveValue();
  expect(searchButton).toHaveAttribute('disabled');
});