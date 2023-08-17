import RoutesApp from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/* import { useState, useEffect } from 'react';
import { db, auth } from './firebaseConection';
import {
  doc,
  setDoc,
  collection,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged
} from 'firebase/auth'; */

function App() {
 /*  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [idPost, setIdPost] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [post, setPosts] = useState([]);

  useEffect(() => {
    async function consultarPosts() {
      const dados = onSnapshot(collection(db, "post"), (snapshot) => {
        let listaPost = [];
        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          })
        })
        setPosts(listaPost);
      })
    }
    consultarPosts();
  }, [])

  async function adicionarPost() {
    await addDoc(collection(db, "post"), {
      titulo: titulo,
      autor: autor,
    }).then(() => {
      setIdPost("")
      setTitulo("")
      setAutor("")
    }).catch((error) => {
      console.log(error)
    })
  }
  async function buscarPost() {
    const postsReferencia = collection(db, "posts");
    await getDocs(postsReferencia).then(
      (snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          })
        })
        setPosts(lista);
      }).catch((error) => {
        console.log(error);
      })

  }
  async function editarPost() {
    const dados = doc(db, "post", idPost);
    await updateDoc(dados, {
      titulo: titulo,
      autor: autor,
    }).then(() => {
      setIdPost("");
      setTitulo("");
      setAutor("");
    }).catch((error) => {
      console.log(error)
    })
  }

  async function excluirPost(id) {
    const dados = doc(db, "post", idPost);
    await deleteDoc(dados).then(() => {
      alert("POST DELETADO COM SUCESSO")
    })
  } */

  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </div>
  );
}

export default App;
