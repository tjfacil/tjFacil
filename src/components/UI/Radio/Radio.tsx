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
    <div className={styles.radioContainer} data-testid='radio'>
      {options.map((option, index) => (
        <div key={option.value} className={styles.radioOption} data-testid='radioOption'>
          <input
            type='radio'
            name={radioName}
            id={option.value}
            value={option.value}
            onChange={changeHandler}
            defaultChecked={index === 0}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
