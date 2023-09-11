import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './pages/contexts/auth';

export default function Private({ children }) {
    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        return <div></div>;
    }

    if (!signed) {
        return <Navigate to="/erro" />
    }

    return children;
}
