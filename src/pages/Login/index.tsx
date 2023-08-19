import styles from './styles.module.css';
import { LeftSideContainer } from "../../components/LeftSideContainer";
import { RightSideContainer } from '../../components/RightSideContainer';

export const Login = () => {
    return (
        <div className={styles.container}>
            <LeftSideContainer />
            <RightSideContainer />
        </div>
    );
}