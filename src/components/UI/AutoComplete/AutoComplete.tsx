import styles from './AutoComplete.module.css';
import { useEffect, useState } from 'react';

export interface IAutoCompleteData {
  id: string;
  value: string;
  label: string;
}

interface IProps {
  data: IAutoCompleteData[];
  inputText: string;
  clickHandler: React.MouseEventHandler;
}

const AutoComplete: React.FC<IProps> = ({ data, inputText, clickHandler }) => {
  const [filteredData, setFilteredData] = useState<IAutoCompleteData[]>([]);

  useEffect(() => {
    const newData = data
      .filter((entry) => entry.value.includes(inputText))
      .sort((a, b) => (a.value > b.value ? 1 : -1));
    setFilteredData(newData);
  }, [data, inputText]);

  return (
    <ul className={styles.list} data-testid='autocomplete'>
      {filteredData.map((entry) => (
        <li
          className={styles.item}
          key={entry.id}
          value={entry.value}
          onClick={clickHandler}
          data-testid='autocompleteOption'
        >
          {entry.label}
        </li>
      ))}
    </ul>
  );
};

export default AutoComplete;
