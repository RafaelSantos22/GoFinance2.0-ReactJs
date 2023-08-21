import styles from './styles.module.css';
import ReactLoading from 'react-loading';

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <ReactLoading type="spin" color="#00BFFF" height={50} width={50} />
    </div>
  );
};
