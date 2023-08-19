import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseConection';
import {
    doc,
    collection,
    addDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    onSnapshot,
} from 'firebase/firestore';

export default function Comentarios() {
    const [titulo, setTitulo] = useState('');
    const [posts, setPosts] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [commentAuthor, setCommentAuthor] = useState('');

    useEffect(() => {
        async function loadPosts() {
            const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
                let listaPost = [];
                snapshot.forEach((doc) => {
                    listaPost.push({
                        id: doc.id,
                        titulo: doc.data().titulo,
                        comentarios: doc.data().comentarios || [],
                    })
                })
                setPosts(listaPost);
            })
        }
        loadPosts();
    }, []);

    async function handleAdd() {
        await setDoc(doc(db, "posts", "12345"), {
            titulo: titulo,
        })
            .then(() => {
                console.log("DADOS REGISTRADO NO BANCO!")
                setTitulo('');
            })
            .catch((error) => {
                console.log("GEROU ERRO" + error)
            });
    }

    async function adicionarComentario(postId) {
        const comentario = {
            texto: commentText[postId],   // Use o texto específico para o post
        };
        const postRef = doc(db, "posts", postId);
        await updateDoc(postRef, {
            comentarios: [...posts.find(post => post.id === postId).comentarios, comentario],
        });
        setCommentText({ ...commentText, [postId]: '' });
    }

    async function excluirPost(id) {
        const docRef = doc(db, "posts", id);
        await deleteDoc(docRef)
            .then(() => {
                console.log("POST DELETADO COM SUCESSO!")
            })
    }

    return (
        <div className="box-comentario">
            <h2>Dúvidas</h2>
            <br />
            <textarea
                type="text"
                placeholder='Digite o título'
                value={titulo}
                className="text-area"
                onChange={(e) => setTitulo(e.target.value)}
            />
            <br />
            <button onClick={handleAdd}>Cadastrar</button>
            <ul className='comentarios'>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <strong>Título: {post.titulo} </strong> <br />
                            <textarea
                                type="text"
                                placeholder="Seu comentário"
                                className="text-area"
                                value={commentText[post.id] || ''}
                                onChange={(e) => setCommentText({ ...commentText, [post.id]: e.target.value })}
                            />

                            <button onClick={() => adicionarComentario(post.id)}>Responder</button>
                            <ul>
                                {post.comentarios &&
                                    post.comentarios.map((comentario, index) => (
                                        <li key={index}>
                                            <p>{comentario.texto}</p>
                                        </li>
                                    ))}
                            </ul>
                            <button onClick={() => excluirPost(post.id)}>Excluir</button> <br /> <br />
                        </li>
                    )
                })}

            </ul>
        </div>
    );
}
