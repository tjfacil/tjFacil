import style from "./AutoComplete.module.css";

const AutoComplete = (props) => {
  const listItemClickHandler = (event) => {
    const abbr = event.target.textContent.split(" - ", 1)[0];
    props.setInputText(abbr);
  };

  const sortedCourtData = props.courtData
    .filter((court) => court.abbr.includes(props.inputText))
    .sort((a, b) => (a.abbr > b.abbr ? 1 : -1));

  return (
    <ul className={style.list}>
      {sortedCourtData.map((court) => (
        <li
          className={style.item}
          key={court.id}
          value={court.abbr}
          onClick={listItemClickHandler}
        >
          {`${court.abbr} - ${court.name}`}
        </li>
      ))}
    </ul>
  );
};

export default AutoComplete;
