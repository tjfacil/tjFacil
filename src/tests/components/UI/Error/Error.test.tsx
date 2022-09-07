import { render, screen } from '@testing-library/react';
import Error from '../../../../components/UI/Error/Error';

describe('Error component tests', () => {
  test('renders Error component', () => {
    const line1 = 'Ocorreu um erro inesperado.';
    const line2 = 'Por favor tente novamente mais tarde.';

    render(<Error />);

    expect(screen.getByText(line1)).toBeInTheDocument();
    expect(screen.getByText(line2)).toBeInTheDocument();
  });
});
