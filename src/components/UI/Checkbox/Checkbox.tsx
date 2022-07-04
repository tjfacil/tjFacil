import styles from './Checkbox.module.css';

interface IProps {
  label: string;
  checkboxId: string;
  changeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<IProps> = ({ label, checkboxId, changeHandler }) => {
  return (
    <div className={styles.checkboxContainer} data-testid='checkbox'>
      <input type='checkbox' id={checkboxId} onChange={changeHandler} />
      <label htmlFor={checkboxId}>{label}</label>
    </div>
  );
};

export default Checkbox;
