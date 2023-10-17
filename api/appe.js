const express = require('express');
const { getApps, initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
const appe = express();
const port = 8000;
const bodyParser = require('body-parser');
const { redirect } = require('react-router-dom');

//Configuração do ejs para carregar as views
appe.set('view engine', 'ejs');
appe.set('views', __dirname + '/views');

var firebaseConfig = {
    apiKey: "AIzaSyC8zv9RH-Aetxl7cfm1wxmVLIYYUuqohu4",
    authDomain: "trilhadoestudante-23b83.firebaseapp.com",
    projectId: "trilhadoestudante-23b83",
    storageBucket: "trilhadoestudante-23b83.appspot.com",
    messagingSenderId: "113199600295",
    appId: "1:113199600295:web:2101ee3dac696589108182",
    measurementId: "G-S76DRY10EH"
};

appe.use(express.json());
appe.use(express.urlencoded({ extended: false }));
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
var auth = getAuth(firebaseApp);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//public
appe.use(express.static('public'))

//Configurar o body-parser, para processar os dados do form
appe.use(bodyParser.urlencoded({ extended: true }));

//Blog
const posts = [
    {
        id: 1,
        titulo: 'Primeira postagem',
        conteudo: 'Este é o conteúdo da primeira postagem'
    },
    {
        id: 2,
        titulo: 'Segunda postagem',
        conteudo: 'Este é o conteúdo da segunda postagem'
    }
];

appe.get('/', (req, res) => {
    res.render('index');
});

appe.post('/login', async (req, res) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, req.body.email, req.body.password);
        res.redirect('/home');
    } catch (error) {
        res.send(error.message);
    }
});


appe.get('/home', (req, res) => {
    const user = auth.currentUser;
    if (user) {
        res.render('home', { user: user });
    } else {
        res.redirect('/');
    }
});

//Rota para exibir uma postagem individual
appe.get('/post/:id', (req, res) => {
    const id = req.params.id;
    const post = posts.find(post => post.id === parseInt(id));
    res.render("post", { post });
})

// Rota para exibir o formulario de adição
appe.get('/add', (req, res,) => {
    res.render('add');
});

//Rota para processar a adição da postagem
appe.post('/add', (req, res) => {
    const { titulo, conteudo } = req.body;
    const id = posts.length + 1;
    posts.push({ id, titulo, conteudo });
    res.redirect('/');
});

appe.post('/salvar', async (req, res) => {
    if (req.body.senha === req.body.senhaConfirmada) {
        try {
            const dataToSave = {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                idade: req.body.idade,
                genero: req.body.genero,
            };

            await addDoc(collection(db, 'informacoes'), dataToSave);
            res.send('Informações salvas com sucesso.');
        } catch (error) {
            res.send('Erro ao tentar salvar suas informações: ' + error);
        }
    } else {
        res.send('Erro ao tentar salvar suas informações: As senhas não coincidem.');
    }
});

appe.get('/ler-dados:id', (req, res, next) => {
    const parametro = req.query.parametro;
    if (parametro) {
        next();
    } else {
        res.status(401).send("Não Autorizado")
    }
});

appe.post('/salvar-dados', (req, res) => {
    const dados = req.body;
    console.log("dados: ", dados)
    res.send("Dado salvo com sucesso!")
})

appe.post('/login', async (req, res) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, req.body.email, req.body.password);
        console.log(userCredential); // Adicione esta linha
        res.redirect('/home');
    } catch (error) {
        res.send(error.message);
    }
});


appe.get('/home', (req, res) => {
    const user = auth.currentUser;
    console.log(user); // Adicione esta linha
    if (user) {
        res.render('home', { user: user });
    } else {
        res.redirect('/');
    }
});

appe.listen(port, () => {
    console.log(`Rodando em: http://localhost:${port}`);
})