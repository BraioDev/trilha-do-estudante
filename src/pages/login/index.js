import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleBack = () => {
        window.history.back();
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (!isButtonDisabled) { // Check if the button is not disabled
            setIsButtonDisabled(true); // Disable the button
            if (email === 'braio@gmail.com' && password === '12345') {
                toast.success('Login bem-sucedido!');
                setTimeout(() => {
                    window.history.back();
                }, 1500);
            } else {
                toast.error('Email ou senha inválidas. Tente novamente!');
            }
            setTimeout(() => {
                setIsButtonDisabled(false); // Re-enable the button after 2 seconds
            }, 2000);
        }
    };

    return (
        <body style={{ backgroundColor: 'var(--branco-cinza)' }}>
            <div className="login-container">
                <div className="login-card">
                    <h2>Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        className="input-login"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={handlePasswordChange}
                        className="input-login"
                    />
                    <button
                        className="button-dark espacamento"
                        onClick={handleLogin}
                        disabled={isButtonDisabled}
                    >
                        Login
                    </button>
                    <button className="button-dark espacamento" onClick={handleBack}>Voltar</button>
                </div>
            </div>
            <ToastContainer />
        </body>
    );
}
