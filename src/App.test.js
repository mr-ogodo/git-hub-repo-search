import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app components', () => {
  render(<App />);
  const appContainer = screen.getByTestId('app-test');
  expect(appContainer).not.toBeEmptyDOMElement();
});
