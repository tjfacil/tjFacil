import { render, screen } from '@testing-library/react';
import Header from '../../../components/Header/Header';

describe('Header component tests', () => {
  test('Header renders', () => {
    render(<Header />);

    const title = screen.getByText('TJFácil');
    expect(title).toBeInTheDocument();
  });
});
