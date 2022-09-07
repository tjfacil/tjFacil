import { render, screen } from '@testing-library/react';
import SearchBar from '../../../components/Search/SearchBar';

describe('SearchBar component tests', () => {
  test('renders SearchBar component', () => {
    render(
      <SearchBar
        courtsData={[]}
        inputText=''
        hasError={false}
        showAutoComplete={false}
        setInputText={jest.fn()}
        setHasError={jest.fn()}
        setShowAutoComplete={jest.fn()}
      />
    );

    const searchBar = screen.getByTestId('searchBar');
    expect(searchBar).toBeInTheDocument();
    const placeholderText = 'Número do processo (CNJ) ou sigla do tribunal';
    const placeholder = screen.getByPlaceholderText(placeholderText);
    expect(placeholder).toBeInTheDocument();
  });
});
