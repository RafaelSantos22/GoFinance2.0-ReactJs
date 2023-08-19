import { Link } from 'react-router-dom';
import { CardForm } from '../CardForm';
import styles from './styles.module.css';

export const RightSideContainer = () => {
    return (
        <section className={styles.rightSide}>
            <CardForm 
                title='Login' 
                description= {
                    <>
                        Entre ou <Link to='/register'>faça seu cadastro</Link>
                    </>
                }
            />
        </section>
    );
}