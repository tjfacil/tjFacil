import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { mockFetchErr, mockFetchOkEmpty } from './app-data';

window.fetch = jest.fn();

describe('Main App component tests', () => {
  test('renders App component sucessfully', async () => {
    (window.fetch as jest.Mock).mockResolvedValueOnce(mockFetchOkEmpty);

    render(<App />);

    const title = screen.getByText('TJFácil');
    expect(title).toBeInTheDocument();
    const spinner = await screen.findByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    const search = await screen.findByTestId('searchForm');
    expect(search).toBeInTheDocument();
  });

  test('renders App component on request error', async () => {
    (window.fetch as jest.Mock).mockResolvedValueOnce(mockFetchErr);

    render(<App />);

    const title = screen.getByText('TJFácil');
    expect(title).toBeInTheDocument();
    const spinner = await screen.findByTestId('spinner');
    expect(spinner).toBeInTheDocument();
    const search = await screen.findByText('Ocorreu um erro inesperado.');
    expect(search).toBeInTheDocument();
  });
});
