import styles from './styles.module.css';
import { LeftSideContainer } from '../../components/LeftSideContainer';
import { RightSideContainer } from '../../components/RightSideContainer';
import { FormValues } from '../../components/FormContainer/structure';
import { api } from '../../services/api';
import { useState } from 'react';
import { Loading } from '../../components/Loading';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const addUser = async (values: FormValues) => {
    try {
      setLoading(true);
      const response = await api.post('v1/users', values);
      if (response.status === 201) {
        console.log('Usuário cadastrado com sucesso!');
        navigate('/');
      } else {
        console.error('Erro ao cadastrar usuário.');
      }
    } catch (error) {
      setError(true);
      console.error('Ocorreu um erro ao cadastrar usuário:', error);
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
        handleSubmit={addUser}
        formType="register"
        title="Cadastro"
        description="para iniciar"
        to="/"
        text="Voltar"
      />
    </div>
  );
};
