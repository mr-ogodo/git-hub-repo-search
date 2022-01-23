import { render, screen } from '@testing-library/react';
import NotFoundPage from '../NotFoundPage';

test('Renders Not Found Page', () => {
  render(<NotFoundPage/>);
  const heading = screen.getByTestId('oops');
  const homeButton = screen.getByTestId('home-button');

  expect(homeButton).toBeInTheDocument();
  expect(heading).not.toBeEmptyDOMElement();
});