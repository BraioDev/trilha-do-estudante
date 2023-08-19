import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../firebaseConection';
import {
    createUserWithEmailAndPassword
} from 'firebase/auth';
import InputMask from "react-input-mask";
import 'react-tippy/dist/tippy.css';

export default function AutoCadastro() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [telefone, setTelefone] = useState('');

    async function novoUsuario() {
        await createUserWithEmailAndPassword(auth, email, senha, nome, idade, telefone)
            .then(() => {
                setEmail('');
                setSenha('');
                setNome('');
                setIdade('');
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
                        type="password"
                        placeholder="Informe sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
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
                        type="idade"
                        placeholder="Informe sua idade"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        className="input-login"
                        maxLength={3}
                    />

                    <InputMask
                        type="telefone"
                        mask="+55 (99) 99999-9999"
                        placeholder="Informe seu telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        className="input-login"
                    />
                    <button className="button-dark espacamento" onClick={novoUsuario}>Cadastrar</button>
                    <button className="button-dark espacamento" onClick={handleBack}>Voltar</button>
                </div>
            </div>
            <ToastContainer />
        </body>
    );
}