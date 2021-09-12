import style from "./Radio.module.css";

const Radio = (props) => {
  const radioChangeHandler = (event) => {
    props.setInstance(event.target.value);
  };

  return (
    <div className={style.radioContainer}>
      <input
        type="radio"
        id="first"
        name="instance"
        value="first"
        onChange={radioChangeHandler}
        defaultChecked
      />
      <label htmlFor="first" className={style.firstLabel}>
        Primeira Instância
      </label>

      <input
        type="radio"
        id="second"
        name="instance"
        value="second"
        onChange={radioChangeHandler}
      />
      <label htmlFor="second">Segunda Instância</label>
    </div>
  );
};

export default Radio;
