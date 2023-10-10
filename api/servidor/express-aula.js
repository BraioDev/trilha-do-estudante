const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('Olá, mudo!');
});

app.get('/ler-dados:id', (req, res, next) => {
    const parametro = req.query.parametro;
    if (parametro) {
        next();
    } else {
        res.status(401).send("Não Autorizado")
    }
});

app.post('/salvar-dados', (req, res) => {
    const dados = req.body;
    console.log("dados: ", dados)
    res.send("Dado salvo com sucesso!")
})



app.listen(8080, () => {
    console.log('Rodando em: http://localhost:8080');
})