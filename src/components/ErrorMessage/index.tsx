import styles from './styles.module.css';

export type ErrorMessageType = string | false | undefined;

type Props = {
  msg: ErrorMessageType;
};

export const ErrorMessage = ({ msg }: Props) => {
  return <p className={styles.error}>{msg}</p>;
};
