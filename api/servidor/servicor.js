const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);


    res.end("Meu Primeiro Servidor");
}

const server = http.createServer(requestListener);

server.listen(8000, 'localhost', () => {
    console.log("Servidor rodando em http://localhost:8000");
});
