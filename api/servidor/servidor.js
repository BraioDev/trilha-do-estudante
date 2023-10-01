const http = require('http');
const fs = require('fs');

const requestListener = function (req, res) {
    if (req.url === "/api/salvar" && req.method === "POST") { // Método para acessar via postman em: http://localhost:8080/api/salvar
        console.log("Recebida solicitação para /api/salvar");
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const data = JSON.parse(body);
                if (data && data.texto) {
                    const texto = data.texto;
                    fs.writeFile("c:\\temp\\dados.txt", texto, (err) => {
                        if (err) {
                            res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                            res.end("Erro ao salvar os dados");
                        } else {
                            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                            res.end("Dados salvos com sucesso");
                        }
                    });
                } else {
                    res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end("Solicitação inválida: o corpo da solicitação deve conter uma propriedade 'texto' em formato JSON");
                }
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end("Solicitação inválida: o corpo da solicitação deve ser um JSON válido");
            }
        });

    } else if (req.url === "/api/ler" && req.method === "GET") { // Método para acessar via postman em: http://localhost:8080/api/ler
        console.log("Recebida solicitação para /api/ler");
        fs.readFile("c:\\temp\\dados.txt", "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
                res.end("Erro ao ler os dados");
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                const responseData = JSON.stringify({ texto: data });
                res.end(responseData);
            }
        });

    } else { //Caso não encontre nada
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end("Página não encontrada");
    }
};

const server = http.createServer(requestListener);
server.listen(8080, 'localhost', () => {
    console.log("Servidor está rodando em http://localhost:8080");
});
