import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, storage, db } from '../../firebaseConection';
import {
    signInWithEmailAndPassword,
    signOut, onAuthStateChanged
} from 'firebase/auth';
import userIcon from '../../assets/imagens/user.png';
import { Link } from 'react-router-dom';
import 'react-tippy/dist/tippy.css';
import '../../style.css';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaRightToBracket } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [user, setUser] = useState(false);
    const [storageUser, setStorageUser] = useState(false);
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

    async function salvar() {
        if (!user || !user.uid) {
            console.error("User or user's uid is undefined");
            return;
        }

        const currentUid = user.uid;

        const uploadRef = ref(storage, `images/${currentUid}/${imagePreview}`);

        const uploadTask = uploadBytes(uploadRef, imagePreview)
            .then((snapshot) => {

                getDownloadURL(snapshot.ref).then(async (downloadURL) => {
                    let urlFoto = downloadURL;

                    const docRef = doc(db, "usuários", user.uid)
                    await updateDoc(docRef, {
                        avatarUrl: urlFoto,
                        email: email,
                    })
                        .then(() => {
                            let data = {
                                ...user,
                                email: email,
                                avatarUrl: urlFoto,
                            }

                            setUser(data);
                            storageUser(data);
                            toast.success("Atualizado com sucesso!")

                        }).catch((error) => {
                            toast.error("Não foi possível finalizar a edição");
                            console.log("GEROU ERRO" + error)
                        });

                })

            })
    }


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
                        <input type="email" value={email} placeholder={userDetail.email} onChange={(e) => setEmail(e.target.value)} className="input-login" />
                    </div>
                    <div>
                        <Tooltip
                            title="voltar"
                            position="bottom"
                            trigger="mouseenter"
                            className="tool"
                        >
                            <button className="botao button-dark espacamento" onClick={handleBack}>
                                <FaAngleLeft size={20} className="icon" /> {/* Ícone de seta para trás */}
                            </button>
                        </Tooltip>
                        <Link to="/historico" className='espacamento link-invisivel'>
                            <Tooltip
                                title="histórico"
                                position="bottom"
                                trigger="mouseenter"
                                className="tool"
                            >
                                <button className='botao button-dark home'> <FaClockRotateLeft size={20} className="icon" /></button>
                            </Tooltip>
                        </Link>
                        <Tooltip
                            title="logout"
                            position="bottom"
                            trigger="mouseenter"
                            className="tool"
                        >
                            <button className='botao button-dark cancelar espacamento' onClick={fazerLogout}> <FaRightToBracket size={20} className="icon" /></button>
                        </Tooltip>
                        <Tooltip
                            title="salvar"
                            position="bottom"
                            trigger="mouseenter"
                            className="tool"
                        >
                            <button className='botao button-dark cadastrar espacamento' onClick={fazerLogout}> <FaCheck size={20} className="icon" /></button>
                        </Tooltip>
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
                        <button className="button-dark espacamento cadastrar" onClick={logarUsuario}>Login</button>
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
