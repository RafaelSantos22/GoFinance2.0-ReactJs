import { Link } from 'react-router-dom';
import { FormContainer } from '../FormContainer';
import styles from './styles.module.css';
import { FormValues } from '../FormContainer/structure';

type Props = {
  title: string;
  description: React.ReactNode;
  handleSubmit: (values: FormValues) => void;
  formType: 'login' | 'register';
  text: string;
  to: string;
  error: boolean;
};

export const RightSideContainer = ({
  title,
  description,
  handleSubmit,
  formType,
  text,
  to,
  error
}: Props) => {
  const linkClass = formType === 'login' ? styles.recover : styles.back;

  return (
    <section className={styles.rightSide}>
      <div className={styles.cardForm}>
        <h2>{title}</h2>
        <p className={styles.description}>{description}</p>
        <FormContainer
          error={error}
          formType={formType}
          handleSubmit={handleSubmit}
        />
        <div className={linkClass}>
          <Link to={to}>{text}</Link>
        </div>
      </div>
    </section>
  );
};
