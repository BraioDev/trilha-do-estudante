const express = require('express');
const appe = express();
const port = 8080;
const bodyParser = require('body-parser');

//Configuração do ejs para carregar as views
appe.set('view engine', 'ejs');
appe.set('views', __dirname + '/views');

//Configurar o body-parser, para processar os dados do form
appe.use(bodyParser.urlencoded({extended: true}));

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

//Rota princiapal
appe.get('/', (req, res) => {
    res.render('index', {posts} );
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
    posts.push({id, titulo, conteudo});
    res.redirect('/');
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

appe.listen(port, () => {
    console.log('Rodando em: http://localhost:8080');
})