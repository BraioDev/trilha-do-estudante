import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './pages/contexts/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
