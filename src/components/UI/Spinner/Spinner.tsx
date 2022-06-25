import styles from './Spinner.module.css';

interface IProps {}

const Spinner: React.FC<IProps> = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.ldsDefault}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
