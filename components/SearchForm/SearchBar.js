import { Fragment, useState } from "react";
import AutoComplete from "./AutoComplete";
import style from "./SearchBar.module.css";

const INPUT_MAX_LENGTH = 50;
const INPUT_PLACEHOLDER = "Número do processo (CNJ) ou sigla do tribunal";

const SearchBar = (props) => {
  const [isInputOnFocus, setIsInputOnFocus] = useState(false);

  const courtNames = props.courtData.map(
    (court) => `${court.abbr} - ${court.name}`
  );
  courtNames.sort();

  const onInputTextChangeHandler = (event) => {
    props.setHasError(false);
    const userInputText = event.target.value.trim().toUpperCase();
    props.setShowAutoComplete(userInputText !== "");
    props.setInputText(userInputText);
  };

  const outlineClass = isInputOnFocus
    ? style.focused
    : props.hasError
    ? style.error
    : "";
  const inputBackgroundClasses = `${style.background} ${outlineClass}`;

  return (
    <Fragment>
      <div className={inputBackgroundClasses}>
        <input
          type="text"
          value={props.inputText}
          placeholder={INPUT_PLACEHOLDER}
          maxLength={INPUT_MAX_LENGTH}
          onFocus={() => setIsInputOnFocus(true)}
          onBlur={() => setIsInputOnFocus(false)}
          onChange={onInputTextChangeHandler}
          className={style.input}
        />
        <button className={style.button}>Buscar</button>
      </div>
      {props.showAutoComplete && (
        <AutoComplete
          courtData={props.courtData}
          inputText={props.inputText}
          setInputText={props.setInputText}
        />
      )}
    </Fragment>
  );
};

export default SearchBar;
