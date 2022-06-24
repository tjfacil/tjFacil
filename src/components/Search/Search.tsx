import React, { useState } from 'react';
import { Court, getCourtUrl, validateInput } from '../../util/lib';
import Checkbox from '../UI/Checkbox/Checkbox';
import Radio from '../UI/Radio/Radio';
import SearchBar from './SearchBar';

const DEFAULT_INSTANCE = 'first';
const DEFAULT_MODE = 'physical';
const RADIO_OPTIONS = [
  { value: 'first', label: 'Primeira Instância' },
  { value: 'second', label: 'Segunda Instância' },
];

interface IProps {
  courtsData: Court[];
  showAutoComplete: boolean;
  setShowAutoComplete: (show: boolean) => void;
}

const Search: React.FC<IProps> = ({
  courtsData,
  showAutoComplete,
  setShowAutoComplete,
}) => {
  const [error, setError] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const [instance, setInstance] = useState<string>(DEFAULT_INSTANCE);
  const [mode, setMode] = useState<string>(DEFAULT_MODE);

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!validateInput(inputText)) {
      setError(true);
      return;
    }

    const courtUrl = getCourtUrl(courtsData, inputText, instance, mode);

    if (!courtUrl) {
      setError(true);
      return;
    }

    setError(false);
    window.open(courtUrl, '_blank');
    setInputText('');
  };

  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setMode('electronic');
    } else {
      setMode('physical');
    }
  };

  const handleInstanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInstance(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <SearchBar
        inputText={inputText}
        setInputText={setInputText}
        courtsData={courtsData}
        hasError={error}
        setHasError={setError}
        showAutoComplete={showAutoComplete}
        setShowAutoComplete={setShowAutoComplete}
      />
      <Checkbox
        label='Processo Eletrônico'
        checkboxId='cb-pje'
        changeHandler={handleModeChange}
      />
      <Radio
        radioName='instance'
        options={RADIO_OPTIONS}
        changeHandler={handleInstanceChange}
      />
    </form>
  );
};

export default Search;
