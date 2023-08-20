import styles from './styles.module.css';
import { LeftSideContainer } from "../../components/LeftSideContainer";
import { RightSideContainer } from '../../components/RightSideContainer';

export const Register = () => {
    const handleSubmit = () => {

    }

    return (
        <div className={styles.container}>
            <LeftSideContainer />
            <RightSideContainer 
                handleSubmit={handleSubmit}
                formType='register'
                title='Cadastro'
                description='para iniciar'
                to='/'
                text='Voltar'
            />
        </div>
    );
}