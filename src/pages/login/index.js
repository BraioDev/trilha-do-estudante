import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../firebaseConection';
import {
    signInWithEmailAndPassword,
    signOut, onAuthStateChanged
} from 'firebase/auth';
import userIcon from '../../assets/imagens/user.png';
import { Link } from 'react-router-dom';
import 'react-tippy/dist/tippy.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [user, setUser] = useState(false);
    const [userDetail, setUserDetail] = useState({})
    const [IsButtonDisabled, setIsButtonDisabled] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleBack = () => {
        window.history.back();
    };

    useEffect(() => {
        async function checkLogin() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(true);
                    setUserDetail({
                        uid: user.uid,
                        email: user.email,
                    })
                } else {
                    // nao possui nenhum user logado.
                    setUser(false);
                    setUserDetail({})
                }
            })
        }
        checkLogin();
    }, [])

    async function logarUsuario() {
        await signInWithEmailAndPassword(auth, email, senha)
            .then((value) => {
                setUserDetail({
                    uid: value.user.uid,
                    email: value.user.email,
                })
                setUser(true);
                setEmail('')
                setSenha('')
            })
            .catch(() => {
                toast.error('Usuário ou senha inválidos');
                setTimeout(() => {
                    setIsButtonDisabled(false); // Re-enable the button after 2 seconds
                }, 2000);
            })
    }


    async function fazerLogout() {
        await signOut(auth)
        setUser(false);
        setUserDetail({})
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(file);
                setImagePreview(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <body style={{ backgroundColor: 'var(--branco-cinza)' }}>
            {user ? (
                <div className="login-container">
                    <div className="login-card">
                        <div className="profile-image">
                            <img
                                src={imagePreview || userIcon}
                                alt="Avatar"
                                className='image'
                            />
                        </div>
                        <label htmlFor="imageInput" className='input-button'>
                            Alterar
                            <input
                                id="imageInput"
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                            />
                        </label>
                        <span className='span-button'>Olá {userDetail.email}</span>
                        <button className="button-dark espacamento" onClick={fazerLogout}>Logout</button>
                        <button className="button-dark espacamento" onClick={handleBack}>Voltar</button>
                    </div>
                </div>
            ) : (
                <div className="login-container">
                    <div className="login-card">
                        <h2>Login</h2>
                        <input
                            type="email"
                            placeholder="Informe seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-login"
                        />
                        <input
                            type="password"
                            placeholder="Informe sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="input-login"
                        />
                        {/* botões */}
                        <button className="button-dark espacamento" onClick={logarUsuario}>Login</button>
                        <Link to="/auto-cadastro" className='link-invisivel'>
                            <button className="button-dark espacamento">Cadastrar</button>
                        </Link>
                        <button className="button-dark espacamento" onClick={handleBack}>Voltar</button>
                    </div>
                </div>
            )}
            <ToastContainer />
        </body>
    );
}
