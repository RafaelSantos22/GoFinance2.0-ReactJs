import styles from './styles.module.css';
import CreditCardIcon from '../../assets/credit-card.svg';
import { User } from '../../types/User';

export const UserHeader = () => {
  const user: User = JSON.parse(localStorage.getItem('userData') || '{}');

  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        <img src={CreditCardIcon} alt="creditcard" />
        <h1>GoFinance</h1>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.details}>
          <p>{user.name}</p>
          <span>{user.email}</span>
        </div>
      </div>
    </header>
  );
};
