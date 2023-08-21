import { Button } from '../Button';
import styles from './styles.module.css';
import CircleImg from '../../assets/eclipse.svg';

export const LeftSideContainer = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>GoFinance</h1>
      <p className={styles.description}>
        O empréstimo ponto a ponto mais popular do mundo
      </p>
      <Button type="button" btnReadMore>
        Read More
      </Button>
      <div className={styles.circle}>
        <img src={CircleImg} alt="circleImg" />
      </div>
    </header>
  );
};
