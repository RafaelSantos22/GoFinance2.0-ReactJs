import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { NotFound } from '../pages/NotFound';
import { UserHome } from '../pages/UserHome';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/user' element={<UserHome />} /> 
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}