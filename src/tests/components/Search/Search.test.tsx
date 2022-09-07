import { fireEvent, render, screen } from '@testing-library/react';
import Search from '../../../components/Search/Search';

window.open = jest.fn();

describe('Search component tests', () => {
  test('renders Search component', () => {
    render(
      <Search
        courtsData={[]}
        showAutoComplete={false}
        setShowAutoComplete={jest.fn()}
      />
    );

    const searchForm = screen.getByTestId('searchForm');
    expect(searchForm).toBeInTheDocument();
  });

  test('suit options only show when input starts with numeric', async () => {
    render(
      <Search
        courtsData={[]}
        showAutoComplete={false}
        setShowAutoComplete={jest.fn()}
      />
    );

    const searchForm = screen.getByTestId('searchForm');
    expect(searchForm).toBeInTheDocument();
    const searchBarInput = screen.getByTestId('searchBarInput');
    expect(searchBarInput).toBeInTheDocument();
    let checkbox = screen.queryByTestId('checkbox');
    expect(checkbox).toBeNull();
    let radio = screen.queryByTestId('radio');
    expect(radio).toBeNull();
    fireEvent.change(searchBarInput, { target: { value: '123456' } });
    checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
    radio = screen.getByTestId('radio');
    expect(radio).toBeInTheDocument();
    fireEvent.change(searchBarInput, { target: { value: 'tribunal' } });
    checkbox = screen.queryByTestId('checkbox');
    expect(checkbox).toBeNull();
    radio = screen.queryByTestId('radio');
    expect(radio).toBeNull();
  });
});
