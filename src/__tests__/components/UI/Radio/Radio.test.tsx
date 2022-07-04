import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio from '../../../../components/UI/Radio/Radio';
import { mockRadioOptions } from './radio-data';

describe('Radio component tests', () => {
  test('Radio renders', () => {
    render(
      <Radio radioName='radioTest' options={[]} changeHandler={() => {}} />
    );

    const radio = screen.getByTestId('radio');
    expect(radio).toBeInTheDocument();
  });

  test('Radio renders options', () => {
    render(
      <Radio
        radioName='radioTest'
        options={mockRadioOptions}
        changeHandler={() => {}}
      />
    );

    const options = screen.getAllByTestId('radioOption');
    expect(options).toHaveLength(2);
    expect(screen.getByText('testLabel1')).toBeInTheDocument();
    expect(screen.getByText('testLabel2')).toBeInTheDocument();
  });

  test('Radio triggers handler method on change options', () => {
    const mockHandler = jest.fn();

    render(
      <Radio
        radioName='radioTest'
        options={mockRadioOptions}
        changeHandler={mockHandler}
      />
    );

    const radioLabel1: HTMLInputElement = screen.getByLabelText('testLabel1');
    const radioLabel2: HTMLInputElement = screen.getByLabelText('testLabel2');
    expect(radioLabel1.checked).toEqual(true);
    expect(radioLabel2.checked).toEqual(false);
    userEvent.click(radioLabel2);
    expect(radioLabel1.checked).toEqual(false);
    expect(radioLabel2.checked).toEqual(true);
    expect(mockHandler).toHaveBeenCalledTimes(1);
    userEvent.click(radioLabel1);
    expect(radioLabel1.checked).toEqual(true);
    expect(radioLabel2.checked).toEqual(false);
    expect(mockHandler).toHaveBeenCalledTimes(2);
  });
});
