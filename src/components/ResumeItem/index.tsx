import styles from './styles.module.css';

type Props = {
  txt: string;
  icon: string;
  value?: string;
  isCustom?: boolean;
};

export const ResumeItem = ({ txt, icon, value, isCustom }: Props) => {
  return (
    <div className={`${styles.card} ${isCustom ? styles.customCard : ''}`}>
      {isCustom ? (
        <>
          <img src={icon} alt="icon" />
          <p>{txt}</p>
        </>
      ) : (
        <div className={styles.valueBox}>
          <p>{txt}</p>
          <img src={icon} alt="icon" />
        </div>
      )}
      <h2>{value}</h2>
    </div>
  );
};
