import { Navigate } from 'react-router-dom';
import { isAuthenticaded } from '../../services/api';

type Props = {
  children: React.ReactNode;
};

export const RequireAuth = ({ children }: Props) => {
  if (!isAuthenticaded()) {
    return <Navigate to="/" />;
  }

  return children;
};
