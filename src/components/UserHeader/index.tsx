import styles from './styles.module.css';
import CreditCardIcon from '../../assets/credit-card.svg';

export const UserHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        <img src={CreditCardIcon} alt="creditcard" />
        <h1>GoFinance</h1>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.details}>
          <p>Samantha Freitas</p>
          <span>sam.freitas@example.com</span>
        </div>
      </div>
    </header>
  );
};
