import {
    createUserWithEmailAndPassword
} from 'firebase/auth';
import React, { useState } from 'react';
import { FaAngleLeft, FaUserPlus } from "react-icons/fa6";
import InputMask from "react-input-mask";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../firebaseConection';

export default function AutoCadastro() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaconf, setSenhaconf] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');

    async function novoUsuario() {
        if (senha === senhaconf) {
            await createUserWithEmailAndPassword(auth, email, senha, nome, senhaconf, telefone)
                .then(() => {
                    setEmail('');
                    setSenha('');
                    setSenhaconf('');
                    setNome('');
                    setTelefone('');
                    toast.success('Cadastro realizado com sucesso');
                    window.setTimeout(function () {
                        window.history.back();
                    }, 1000);
                })
                .catch((error) => {
                    if (error.code === 'auth/weak-password') {
                        toast.error('Senha muito fraca, por favor insira outra');
                    } else if (error.code === 'auth/email-already-in-use') {
                        toast.error('Email já existente');
                    }

                })
        } else {
            toast.error("Senhas não coincidem!")
        }

    }

    const handleBack = () => {
        window.history.back();
    };

    return (
        <body style={{ backgroundColor: 'var(--branco-cinza)' }}>
            <div className="login-container">
                <div className="login-card">
                    <h2>Cadastro</h2>
                    <input
                        type="nome"
                        placeholder="Informe seu nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="input-login"
                    />

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

                    <input
                        type="password"
                        placeholder="Informe sua senha novamente"
                        value={senhaconf}
                        onChange={(e) => setSenhaconf(e.target.value)}
                        className="input-login"
                    />

                    <InputMask
                        type="telefone"
                        mask="+55 (99) 99999-9999"
                        placeholder="Informe seu telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        className="input-login"
                    />
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
                    <Tooltip
                        title="Cadastrar"
                        position="bottom"
                        trigger="mouseenter"
                        className="tool"
                    >
                        <button className="botao button-dark espacamento cadastrar" onClick={novoUsuario}>
                            <FaUserPlus size={20} className="icon" />
                        </button>
                    </Tooltip>

                </div>
            </div>
            <ToastContainer />
        </body>
    );
}