import styles from './styles.module.css';
import { LeftSideContainer } from "../../components/LeftSideContainer";
import { RightSideContainer } from '../../components/RightSideContainer';
import { Link } from 'react-router-dom';

export const Login = () => {
    const handleSubmit = () => {

    }

    return (
        <div className={styles.container}>
            <LeftSideContainer />
            <RightSideContainer
                handleSubmit={handleSubmit}
                formType='login'
                title='Login'
                description={
                    <>
                        Entre ou <Link className={styles.register} to='/register'>faça seu cadastro</Link>
                    </>
                }
                to='/recover'
                text='Esqueceu sua senha'
            />
        </div>
    );
}