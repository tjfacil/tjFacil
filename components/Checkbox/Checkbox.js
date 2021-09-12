import style from "./Checkbox.module.css";

const Checkbox = (props) => {

  const checkboxChangeHandler = event => {
    if (event.target.checked) {
      props.setMean("electronic");
    } else {
      props.setMean("physical");
    }
  };

  return (
    <div className={style.checkboxContainer}>
      <input type="checkbox" id="cb-pje" onChange={checkboxChangeHandler} />
      <label htmlFor="cb-pje">Processo Eletrônico</label>
    </div>
  );
};

export default Checkbox;
