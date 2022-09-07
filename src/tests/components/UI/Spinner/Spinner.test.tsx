import { render, screen } from '@testing-library/react';
import Spinner from '../../../../components/UI/Spinner/Spinner';

describe('Spinner component tests', () => {
  test('renders Spinner and check classes', async () => {
    render(<Spinner />);

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
