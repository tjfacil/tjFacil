import styles from './Radio.module.css';

interface IOptions {
  value: string;
  label: string;
}

interface IProps {
  radioName: string;
  options: IOptions[];
  changeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const Radio: React.FC<IProps> = ({ radioName, options, changeHandler }) => {
  return (
    <div className={styles.radioContainer}>
      {options.map((option) => (
        <div key={option.value} className={styles.radioOption}>
          <input
            type='radio'
            name={radioName}
            id={option.value}
            value={option.value}
            onChange={changeHandler}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
