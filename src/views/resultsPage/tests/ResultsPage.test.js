import { render, screen } from '@testing-library/react';
import ResultsPage from '../ResultsPage';

test('renders results page', () => {
  render(<ResultsPage/>);
  const resultsContainer = screen.getByTestId('results-page');
  expect (resultsContainer).toBeInTheDocument();
});
