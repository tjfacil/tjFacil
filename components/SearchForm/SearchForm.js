import { useState } from "react";

import Checkbox from "../Checkbox/Checkbox";
import Radio from "../Radio/Radio";
import SearchBar from "./SearchBar";

import { getCourtUrl, validateInput } from "../../lib/form-util";

const DEFAULT_INSTANCE = "first";
const DEFAULT_MEAN = "physical";

const SearchForm = (props) => {
  const [error, setError] = useState(false);
  const [inputText, setInputText] = useState("");
  const [instance, setInstance] = useState(DEFAULT_INSTANCE);
  const [mean, setMean] = useState(DEFAULT_MEAN);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!validateInput(inputText)) {
      setError(true);
      return;
    }

    const courtUrl = getCourtUrl(props.courtData, inputText, instance, mean);

    if (!courtUrl) {
      setError(true);
      return;
    }

    setError(false);
    window.open(courtUrl, "_blank");
    setInputText("");
  };

  return (
    <form onSubmit={submitHandler}>
      <SearchBar
        inputText={inputText}
        setInputText={setInputText}
        courtData={props.courtData}
        hasError={error}
        setHasError={setError}
        showAutoComplete={props.showAutoComplete}
        setShowAutoComplete={props.setShowAutoComplete}
      />
      <Checkbox setMean={setMean} />
      <Radio setInstance={setInstance} />
    </form>
  );
};

export default SearchForm;
