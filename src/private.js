import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './pages/contexts/auth';

export default function Private({ children }) {
    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        return <div></div>;
    }

    if (!signed) {
        toast.error('Por favor, faça login para acessar');
    }

    return <Navigate to="/" />;
}
