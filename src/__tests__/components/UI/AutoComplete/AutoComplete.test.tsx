import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AutoComplete from '../../../../components/UI/AutoComplete/AutoComplete';
import { mockAutoCompleteData } from './autocomplete-data';

describe('AutoComplete component tests', () => {
  test('renders AutoComplete component', () => {
    render(<AutoComplete data={[]} inputText={''} clickHandler={jest.fn()} />);

    const autoComplete = screen.getByTestId('autocomplete');
    expect(autoComplete).toBeInTheDocument();
  });

  test('AutoComplete properly displays options', () => {
    render(
      <AutoComplete
        data={mockAutoCompleteData}
        inputText={''}
        clickHandler={jest.fn()}
      />
    );

    const options = screen.getAllByTestId('autocompleteOption');
    expect(options).toHaveLength(3);
    expect(screen.getByText('testLabel1')).toBeInTheDocument();
    expect(screen.getByText('testLabel2')).toBeInTheDocument();
    expect(screen.getByText('testLabel3')).toBeInTheDocument();
  });

  test('AutoComplete properly sorts options', () => {
    render(
      <AutoComplete
        data={mockAutoCompleteData}
        inputText={''}
        clickHandler={jest.fn()}
      />
    );

    const options = screen.getAllByTestId('autocompleteOption');
    expect(options).toHaveLength(3);
    expect(options[0]).toHaveTextContent('testLabel2');
    expect(options[1]).toHaveTextContent('testLabel3');
    expect(options[2]).toHaveTextContent('testLabel1');
  });

  test('AutoComplete calls handler method on click', () => {
    const mockHandler = jest.fn();

    render(
      <AutoComplete
        data={mockAutoCompleteData}
        inputText={''}
        clickHandler={mockHandler}
      />
    );

    const optionLabel = screen.getByText('testLabel1');
    userEvent.click(optionLabel);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test('AutoComplete filters data according to the inputText prop', () => {
    const { rerender } = render(
      <AutoComplete
        data={mockAutoCompleteData}
        inputText={''}
        clickHandler={jest.fn()}
      />
    );

    let options = screen.getAllByTestId('autocompleteOption');
    expect(options).toHaveLength(3);

    rerender(
      <AutoComplete
        data={mockAutoCompleteData}
        inputText={'tj'}
        clickHandler={jest.fn()}
      />
    );

    options = screen.getAllByTestId('autocompleteOption');
    expect(options).toHaveLength(2);

    rerender(
      <AutoComplete
        data={mockAutoCompleteData}
        inputText={'trf'}
        clickHandler={jest.fn()}
      />
    );

    options = screen.getAllByTestId('autocompleteOption');
    expect(options).toHaveLength(1);

    rerender(
      <AutoComplete
        data={mockAutoCompleteData}
        inputText={''}
        clickHandler={jest.fn()}
      />
    );

    options = screen.getAllByTestId('autocompleteOption');
    expect(options).toHaveLength(3);
  });
});
