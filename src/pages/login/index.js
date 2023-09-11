import {
    onAuthStateChanged, signInWithEmailAndPassword, signOut, updateEmail
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaCheck, FaCircleExclamation, FaRightFromBracket, FaRightToBracket, FaUserPlus, FaXmark } from "react-icons/fa6";
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userIcon from '../../assets/imagens/user.png';
import { auth } from '../../firebaseConection';
import '../../style.css';
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

Modal.setAppElement('#root');

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [user, setUser] = useState(false);
    const [storageUser, setStorageUser] = useState(false);
    const [userDetail, setUserDetail] = useState({})
    const [IsButtonDisabled, setIsButtonDisabled] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const spinnerStyle = css`
  display: block;
  margin: 0 auto;
`;

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
                    });
                    localStorage.setItem('@ticketsPRO', JSON.stringify({
                        uid: user.uid,
                        email: user.email,
                    }));
                } else {
                    setUser(false);
                    setUserDetail({});
                    localStorage.removeItem('@ticketsPRO');
                }
            });
        }
        checkLogin();
    }, []);

    async function logarUsuario() {
        setIsLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, senha)
                .then((value) => {
                    setUserDetail({
                        uid: value.user.uid,
                        email: value.user.email,
                    });
                    setUser(true);
                    setEmail('');
                    setSenha('');
                    localStorage.setItem('@ticketsPRO', JSON.stringify({
                        uid: user.uid,
                        email: user.email,
                    }));
                    window.location.reload(true);
                })
                .catch(() => {
                    toast.error('Usuário ou senha inválidos');
                    setTimeout(() => {
                        setIsButtonDisabled(false);
                    }, 2000);
                });
        } finally {
            setIsLoading(false);
        }
    }

    async function salvar() {
        try {
            const user = auth.currentUser;
            console.log(email)

            if (user) {
                await updateEmail(user, email)
                toast.info("Perfil atualizado com sucesso!");
            }
        } catch (error) {
            toast.error("Não foi possível atualizar o perfil. Erro: " + error.message);
            console.error('Erro ao atualizar perfil do usuário:', error);
        }
    }


    async function fazerLogout() {
        setIsLoading(true);
        await signOut(auth)
        localStorage.removeItem('@ticketsPRO');
        setUser(false);
        setUserDetail({})
        window.location.reload(true);
        setIsLoading(false);
    }

    const excluirUsuario = () => {
        setModalIsOpen(true);
    };

    const confirmarExclusao = async () => {
        try {
            const user = auth.currentUser;
            if (user) {
                await user.delete();
                toast.success('Usuário excluído com sucesso');
            } else {
                toast.error('Você precisa estar autenticado para excluir sua conta');
            }
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
        }

        setModalIsOpen(false);
    };

    const cancelarExclusao = () => {
        setModalIsOpen(false);
    };

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
            {isLoading ? (
                // Tela de Loading
                <div className="loading-screen">
                    <div className="wave">
                        <div className="dot dot-1"></div>
                        <div className="dot dot-2"></div>
                        <div className="dot dot-3"></div>
                    </div>
                </div>
            ) : null
            }
            {
                user ? (
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
                            <input type="email" value={email} placeholder={userDetail.email} onChange={(e) => setEmail(e.target.value)} className="input-login" />
                        </div>
                        <div>
                            <Tooltip
                                title="Voltar"
                                position="bottom"
                                trigger="mouseenter"
                                className="tool"
                            >
                                <button className="botao button-dark espacamento" onClick={handleBack}>
                                    <FaAngleLeft size={20} className="icon" /> {/* Ícone de seta para trás */}
                                </button>
                            </Tooltip>
                            <Tooltip
                                title="Excluir usuário"
                                position="bottom"
                                trigger="mouseenter"
                                className="tool"
                            >
                                <button className='botao button-dark home espacamento cancelar' onClick={excluirUsuario}> <FaXmark size={20} className="icon" /></button>
                            </Tooltip>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={() => setModalIsOpen(false)}
                                contentLabel="Modal de Confirmação"
                                className="login-container"
                            >
                                <div className="login-card" style={{ marginBottom: "40px" }}>
                                    <FaCircleExclamation size={80} className="icon excluir margens" />
                                    <span>Tem certeza de que deseja excluir o usuário?</span>
                                    <div style={{ marginTop: "20px" }}>
                                        <button className='button-dark espacamento cancelar' onClick={confirmarExclusao}>Sim</button>
                                        <button className='button-dark espacamento' onClick={cancelarExclusao}>Não</button>
                                    </div>
                                </div>
                            </Modal>
                            <Tooltip
                                title="Logout"
                                position="bottom"
                                trigger="mouseenter"
                                className="tool"
                            >
                                <button className='botao button-dark espacamento' onClick={fazerLogout}> <FaRightToBracket size={20} className="icon" /></button>
                            </Tooltip>
                            <Tooltip
                                title="Salvar"
                                position="bottom"
                                trigger="mouseenter"
                                className="tool"
                            >
                                <button className='botao button-dark cadastrar espacamento' onClick={salvar}> <FaCheck size={20} className="icon" /></button>
                            </Tooltip>
                        </div>
                    </div>
                ) : (
                    <div className="login-container">
                        <div className="login-card">
                            <h2 style={{ marginBottom: '13%' }}><strong>Login</strong></h2>
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
                            <div style={{ marginTop: '8%' }}>
                                <Tooltip
                                    title="Voltar"
                                    position="bottom"
                                    trigger="mouseenter"
                                    className="tool"
                                >
                                    <button className="botao button-dark espacamento" onClick={handleBack}>
                                        <FaAngleLeft size={20} className="icon" />
                                    </button>
                                </Tooltip>

                                <Tooltip
                                    title="Cadastrar"
                                    position="bottom"
                                    trigger="mouseenter"
                                    className="tool"
                                >
                                    <Link to="/auto-cadastro" className='link-invisivel'>
                                        <button className="botao button-dark espacamento">
                                            <FaUserPlus size={20} className="icon" />
                                        </button>
                                    </Link>
                                </Tooltip>

                                <Tooltip
                                    title="Login"
                                    position="bottom"
                                    trigger="mouseenter"
                                    className="tool"
                                >
                                    <button className="botao button-dark espacamento cadastrar" onClick={logarUsuario}>
                                        <FaRightFromBracket size={20} className="icon" />
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                )
            }
            <ToastContainer />
        </body >
    );
}
