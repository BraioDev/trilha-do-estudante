import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './pages/contexts/auth'

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
                <Navigate to="/login" />
            </div>
        );
    }

    return children;
}