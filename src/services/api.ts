import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://academy-react.rarolabs.com.br/'
});

export const isAuthenticaded = () => {
  const token = localStorage.getItem('token');
  return token !== null;
};

export const getUserById = async (token: string, id: string) => {
  try {
    const response = await api.get(`v1/users/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });

    if (response.status === 200) {
      const userData = response.data;
      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      console.error('Erro ao buscar dados do usuário:', response.status);
    }
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
  }
};
