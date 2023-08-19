import styles from './styles.module.css';

type Props = {
    title: string;
    description: React.ReactNode;
}

export const CardForm = ({ title, description }: Props) => {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}
