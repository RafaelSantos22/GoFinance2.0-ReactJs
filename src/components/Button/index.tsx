import styles from './styles.module.css';

type Props = {
    children: React.ReactNode;
    btnReadMore?: boolean;
    type: 'button' | 'submit';
    disabled?: boolean;
}

export const Button = ({ children, btnReadMore, type, disabled }: Props) => {
    const buttons = 
        btnReadMore ? `${styles.btn} ${styles.btnReadMore}` : styles.btn;

    return <button disabled={disabled} type={type} className={buttons}>{children}</button>
}