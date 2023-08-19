import styles from './styles.module.css';

type Props = {
    children: React.ReactNode;
    btnReadMore?: boolean;
}

export const Button = ({ children, btnReadMore }: Props) => {
    const buttons = 
        btnReadMore ? `${styles.btn} ${styles.btnReadMore}` : styles.btn;

    return <button className={buttons}>{children}</button>
}