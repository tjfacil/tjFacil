import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';
import { Court } from '../../util/lib';
import AutoComplete, {
  IAutoCompleteData,
} from '../UI/AutoComplete/AutoComplete';

const INPUT_MAX_LENGTH = 50;
const INPUT_PLACEHOLDER = 'Número do processo (CNJ) ou sigla do tribunal';

interface IProps {
  courtsData: Court[];
  inputText: string;
  hasError: boolean;
  showAutoComplete: boolean;
  setInputText: (text: string) => void;
  setHasError: (error: boolean) => void;
  setShowAutoComplete: (show: boolean) => void;
}

const SearchBar: React.FC<IProps> = ({
  courtsData,
  inputText,
  hasError,
  showAutoComplete,
  setInputText,
  setHasError,
  setShowAutoComplete,
}) => {
  const [isInputOnFocus, setIsInputOnFocus] = useState<boolean>(false);
  const [autoCompleteData, setAutoCompleteData] = useState<IAutoCompleteData[]>(
    []
  );

  useEffect(() => {
    const newData: IAutoCompleteData[] = [];
    courtsData.map((court) => {
      newData.push({
        id: court.id,
        value: court.abbr,
        label: `${court.abbr} - ${court.name}`,
      });
    });
    setAutoCompleteData(newData);
  }, [courtsData]);

  const handleInputTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const userInputText = event.target.value.trim().toUpperCase();
    setShowAutoComplete(userInputText !== '');
    setInputText(userInputText);
    setHasError(false);
  };

  const handleAutoCompleteClick: React.MouseEventHandler = (event) => {
    const abbr = event.currentTarget?.textContent?.split(' - ', 1)[0];
    setInputText(abbr || '');
  };

  const outlineClass = isInputOnFocus
    ? styles.focused
    : hasError
    ? styles.error
    : '';
  const inputBackgroundClasses = `${styles.background} ${outlineClass}`;

  return (
    <>
      <div className={inputBackgroundClasses}>
        <input
          type='text'
          value={inputText}
          placeholder={INPUT_PLACEHOLDER}
          maxLength={INPUT_MAX_LENGTH}
          onFocus={() => setIsInputOnFocus(true)}
          onBlur={() => setIsInputOnFocus(false)}
          onChange={handleInputTextChange}
          className={styles.input}
        />
        <button className={styles.button}>Buscar</button>
      </div>
      {showAutoComplete && (
        <AutoComplete
          data={autoCompleteData}
          inputText={inputText}
          clickHandler={handleAutoCompleteClick}
        />
      )}
    </>
  );
};

export default SearchBar;
