import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const isAuthenticaded = () => {
  const token = localStorage.getItem('token');
  return token !== null;
};

export const RequireAuth = ({ children }: Props) => {
  if (!isAuthenticaded()) {
    return <Navigate to="/" />;
  }

  return children;
};
