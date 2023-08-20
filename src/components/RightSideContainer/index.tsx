import { Link } from 'react-router-dom';
import { FormContainer } from '../FormContainer';
import styles from './styles.module.css';

type Props = {
    title: string;
    description: React.ReactNode;
    handleSubmit: () =>  void;
    formType: 'login' | 'register';
    text: string;
    to: string;
}

export const RightSideContainer = 
    ({ title, description, handleSubmit, formType, text, to }: Props) => 
    {
    const linkClass = formType === 'login' ? styles.recover : styles.back;

    return (
        <section className={styles.rightSide}>
            <div className={styles.cardForm}>
                <h2>{title}</h2>
                <p className={styles.description}>{description}</p>
                <FormContainer formType={formType} handleSubmit={handleSubmit} />
                <div className={linkClass}>
                    <Link to={to}>{text}</Link>
                </div>
            </div>
        </section>
    );
}