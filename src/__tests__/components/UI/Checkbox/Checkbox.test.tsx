import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from '../../../../components/UI/Checkbox/Checkbox';

describe('Checkbox component tests', () => {
  test('renders Checkbox component', () => {
    render(
      <Checkbox
        label='testLabel'
        checkboxId='testId'
        changeHandler={jest.fn()}
      />
    );

    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(screen.getByText('testLabel')).toBeInTheDocument();
  });

  test('Checkbox triggers handler method on change state', () => {
    const mockHandler = jest.fn();

    render(
      <Checkbox
        label='testLabel'
        checkboxId='testId'
        changeHandler={mockHandler}
      />
    );

    const checkbox: HTMLInputElement = screen.getByLabelText('testLabel');
    expect(checkbox.checked).toEqual(false);
    userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);
    expect(mockHandler).toHaveBeenCalledTimes(1);
    userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
    expect(mockHandler).toHaveBeenCalledTimes(2);
  });
});
