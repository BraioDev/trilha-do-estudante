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
let isBase = false;

//Configurar o body-parser, para processar os dados do form
appe.use(bodyParser.urlencoded({ extended: true }));

appe.get("/", (req, res) => {
  res.cookie("usuario_logado", {
    nome: "Daniel Orivaldo da Silva",
    email: "galocego@gmail.com",
    idade: "18",
    instagram: "@galo_cego",
    genero: "Nada haver",
    identifica: "Trabalhador",
    url: "https://a.imagem.app/olY5kv.jpeg",
  });
  res.render("index");
});

function encodeValues(data) {
  return data.map((item) => {
    const encodedItem = {};
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        encodedItem[key] = Buffer.from(item[key]).toString("base64");
      }
    }
    return encodedItem;
  });
}

function decodeValues(data) {
  return data.map((item) => {
    const decodedItem = {};
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        try {
          decodedItem[key] = Buffer.from(item[key], "base64").toString("utf-8");
        } catch (error) {
          decodedItem[key] = item[key];
        }
      }
    }
    return decodedItem;
  });
}

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

appe.get("/perfil", (req, res) => {
  const usuarioLogado = req.cookies.usuario_logado;
  res.render("perfil", { user: usuarioLogado });
});

appe.get("/codificar-decodificar", (req, res) => {
  let existingData = [];

  try {
    const data = fs.readFileSync("dados.json", "utf-8");
    existingData = JSON.parse(data);
  } catch (error) {
    console.error("Erro ao ler dados do arquivo JSON:", error);
  }
  console.log("🚀 ~ file: appe.js:167 ~ appe.get ~ isBase:", isBase);

  // Decodificar os dados se estiverem em base64
  if (isBase) {
    isBase = false;
    existingData = decodeValues(existingData);
  } else {
    isBase = true;
    // Codificar os dados em base64 se não estiverem codificados
    existingData = encodeValues(existingData);
  }

  try {
    fs.writeFileSync("dados.json", JSON.stringify(existingData), "utf-8");
    console.log(
      "Dados manipulados e codificados ou decodificados em base64 salvos com sucesso!"
    );
  } catch (error) {
    console.error(
      "Erro ao salvar dados manipulados e codificados ou decodificados em base64:",
      error
    );
  }
});

appe.listen(port, () => {
  console.log(`Rodando em: http://localhost:${port}`);
});
