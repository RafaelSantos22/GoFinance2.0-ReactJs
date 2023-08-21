import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NotFound } from '../pages/NotFound';
import { UserHome } from '../pages/UserHome';
import { RequireAuth } from '../components/RequireAuth';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/user"
        element={
          <RequireAuth>
            <UserHome />
          </RequireAuth>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
