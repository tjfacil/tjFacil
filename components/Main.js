import { useState } from "react";

import SearchForm from "./SearchForm/SearchForm";
import Title from "./Title/Title";

import style from "./Main.module.css";

const Main = (props) => {
  const [isAutoCompleteShown, setIsAutoCompleteShown] = useState(false);

  const backgroundChangeHandler = () => {
    setIsAutoCompleteShown(false);
  };

  return (
    <main className={style.main} onClick={backgroundChangeHandler}>
      <Title />
      <SearchForm
        courtData={props.courtData}
        showAutoComplete={isAutoCompleteShown}
        setShowAutoComplete={setIsAutoCompleteShown}
      />
    </main>
  );
};

export default Main;
