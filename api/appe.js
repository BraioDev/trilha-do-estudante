const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const fsPromisse = require("fs/promises");
const fs = require("fs");
const { getApps, initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");

const port = 8080;
const appe = express();
const bodyParser = require("body-parser");
const produtos = [
  { id: 1, nome: "Arroz", preco: 25 },
  {
    id: 2,
    nome: "Feijão",
    preco: 15,
  },
  {
    id: 3,
    nome: "Bife",
    preco: 40,
  },
];

appe.use(cookieParser());
appe.use(
  session({
    secret: "minhachave",
    resave: false,
    saveUninitialized: true,
  })
);

//Configuração do ejs para carregar as views
appe.set("view engine", "ejs");
appe.set("views", __dirname + "/views");

var firebaseConfig = {
  apiKey: "AIzaSyC8zv9RH-Aetxl7cfm1wxmVLIYYUuqohu4",
  authDomain: "trilhadoestudante-23b83.firebaseapp.com",
  projectId: "trilhadoestudante-23b83",
  storageBucket: "trilhadoestudante-23b83.appspot.com",
  messagingSenderId: "113199600295",
  appId: "1:113199600295:web:2101ee3dac696589108182",
  measurementId: "G-S76DRY10EH",
};

appe.use(express.json());
appe.use(express.urlencoded({ extended: false }));
const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0];
var auth = getAuth(firebaseApp);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Configurar o body-parser, para processar os dados do form
appe.use(bodyParser.urlencoded({ extended: true }));

/* appe.get("/", (req, res) => {
  res.render("index");
}); */

appe.post("/salvar", async (req, res) => {
  try {
    const dataToSave = {
      nome: req.body.nome,
      assunto: req.body.assunto,
      texto: req.body.texto,
    };

    let existingData = [];
    try {
      const data = fs.readFileSync("dados.json", "utf-8");
      existingData = JSON.parse(data);
    } catch (error) {
      console.error("Erro ao ler dados do arquivo JSON:", error);
    }

    existingData.push(dataToSave);

    fs.writeFileSync("dados.json", JSON.stringify(existingData));
    res.send("Dados salvos com sucesso!");
  } catch (error) {
    res.send("Erro ao tentar salvar suas informações: " + error);
  }
});

appe.get("/salvar", async (req, res) => {
  try {
    const data = await fsPromisse.readFile("dados.json", "utf-8");
    const jsonData = JSON.parse(data);
    const randomIndex = Math.floor(Math.random() * jsonData.length);
    const randomItem = jsonData[randomIndex];
    res.json(randomItem);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao Obter dados" });
  }
});

appe.post("/login", async (req, res) => {
  try {
    await signInWithEmailAndPassword(auth, req.body.email, req.body.password);
    res.redirect("/home");
  } catch (error) {
    res.send(error.message);
  }
});

appe.get("/home", (req, res) => {
  const user = auth.currentUser;

  if (user) {
    res.render("home", { user: user });
  } else {
    res.redirect("/");
  }
});

/*Session e cookie*/
//Rota para exibir produtos
appe.get("/", (req, res) => {
  res.cookie("usuario_logado", {
    nome: "Jão",
    email: "bryan@example.com",
    url: "https://a.imagem.app/oqijzN.png",
  });
  res.send(`
  <div style="font-family: 'Cera Round Pro', sans-serif; text-transform: uppercase;">
  <h1 style="text-align: center; margin-top: 80px;">Lista de produtos</h1>
  <ul style="text-align: center; margin-left: 530px; margin-top:50px;">
  ${produtos
    .map(
      (produto) =>
        `<li style="list-style-type: none; text-align: left; margin-top: 20px; text-transform: uppercase;">${produto.nome} - ${produto.preco} <a href="/adicionar/${produto.id}" style="display: inline-block; background-color: #007bff; color: #fff; padding: 10px 20px; text-align: center; text-decoration: none; border: none; border-radius: 5px;">Adicionar</a></li>`
    )
    .join("")}
</ul>
<div style="display: flex; justify-content: center;  margin-top:50px;">
<a href="/carrinho" style="display: inline-block; background-color: #007bff; color: #fff; padding: 10px 20px; text-align: center; text-decoration: none; border: none; border-radius: 5px; margin-right: 10px;">Ver carrinho</a>
<a href="/perfil" style="display: inline-block; background-color: #007bff; color: #fff; padding: 10px 20px; text-align: center; text-decoration: none; border: none; border-radius: 5px;"> Seu perfil </a>
</div>
</div>
  `);
});

appe.get("/adicionar/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find((p) => p.id === id);

  if (produto) {
    if (!req.session.carrinho) {
      req.session.carrinho = [];
    }
    req.session.carrinho.push(produto);
  }

  res.redirect("/");
});

appe.get("/carrinho", (req, res) => {
  const carrinho = req.session.carrinho || [];
  const total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);

  res.send(`
  <h1>Carrinho de compras</h1>
  <ul>
  ${carrinho
    .map((produto) => `<li>${produto.nome} - ${produto.preco}<li>`)
    .join("")}
  </ul>

  <p>Total: ${total}</p>
  <a href="/">Continuar comprando<a/>
  `);
});

appe.get("/perfil", (req, res) => {
  const usuarioLogado = req.cookies.usuario_logado;
  res.send(`
  <h1>Seu perfil</h1>
  <ul>
  <img src=${usuarioLogado.url} alt="foto" border="0" />
  <li>Nome: ${usuarioLogado.nome}</li>
  <li>Email: ${usuarioLogado.email}</li>
  </ul>
  
  <a href="/">Voltar as compras<a/>
  `);
});

appe.listen(port, () => {
  console.log(`Rodando em: http://localhost:${port}`);
});
