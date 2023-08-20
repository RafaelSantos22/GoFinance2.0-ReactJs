import styles from './styles.module.css';
import { ResumeItem } from '../../ResumeItem';
import { UserHeader } from '../../components/UserHeader';
import TrendingUp from '../../assets/trending-up.svg';
import TrendingDown from '../../assets/trending-down.svg';
import DolarIcon from '../../assets/dolar-icon.svg';
import PlusIcon from '../../assets/plus-sm.svg';
import { Button } from '../../components/Button';

export const UserHome = () => {
    return (
        <div className={styles.container}>
            <UserHeader />
            <div className={styles.name}>
                <h2>OLÁ, RAFAEL</h2>
                <Button type='button'>Sair</Button>
            </div>
            <div className={styles.areaTransactions}>
                <ResumeItem txt="Entradas" icon={TrendingUp} value='R$ 1200,00' />
                <ResumeItem txt="Saídas" icon={TrendingDown} value='R$ 400,00' />
                <ResumeItem txt="Saldo" icon={DolarIcon} value='R$ 800,00' />
                <ResumeItem txt="Transação" icon={PlusIcon} isCustom={true} />
            </div>
        </div>
    );
}