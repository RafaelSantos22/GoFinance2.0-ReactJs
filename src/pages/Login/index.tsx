import styles from './styles.module.css';
import { LeftSideContainer } from '../../components/LeftSideContainer';
import { RightSideContainer } from '../../components/RightSideContainer';
import { Link, useNavigate } from 'react-router-dom';
import { api, getUserById } from '../../services/api';
import { FormValues } from '../../components/FormContainer/structure';
import { useState } from 'react';
import { Loading } from '../../components/Loading';

export const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const login = async (values: FormValues) => {
    try {
      setLoading(true);
      const response = await api.post('v1/auth/login', values);
      if (response.status === 200) {
        const { token, id } = response.data;
        getUserById(token, id);
        navigate('/user');
      }
    } catch (error) {
      setError(true);
      console.error('Ocorreu um erro ao fazer o login:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {loading && <Loading />}
      <LeftSideContainer />
      <RightSideContainer
        error={error}
        handleSubmit={login}
        formType="login"
        title="Login"
        description={
          <>
            Entre ou{' '}
            <Link className={styles.register} to="/register">
              faça seu cadastro
            </Link>
          </>
        }
        to="/recover"
        text="Esqueceu sua senha"
      />
    </div>
  );
};
