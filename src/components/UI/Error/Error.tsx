import styles from './Error.module.css';

interface IProps {}

const Error: React.FC<IProps> = () => {
  return (
    <div className={styles.errorContainer} data-testid='errorDiv'>
      <p>Ocorreu um erro inesperado.</p>
      <p>Por favor tente novamente mais tarde.</p>
    </div>
  );
};

export default Error;
