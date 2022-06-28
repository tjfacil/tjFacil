import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders App component', () => {
  const { getByText } = render(<App />);
  const title = getByText(/TJFácil/i);
  expect(title).toBeInTheDocument();
});
