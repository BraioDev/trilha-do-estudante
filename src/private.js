import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './pages/contexts/auth'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Private({ children }) {
    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div></div>
        )
    }

    if (!signed) {
        return (
            <div>
                <ToastContainer />
                <Navigate to="/login" />
            </div>
        );
    }

    return children;
}