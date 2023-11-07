const express = require("express");
const fsPromisse = require("fs/promises");
const fs = require("fs");
const { getApps, initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");
const appe = express();
const port = 8080;
const bodyParser = require("body-parser");

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

appe.get("/", (req, res) => {
  res.render("index");
});

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

appe.get("/dados-do-servidor", (req, res) => {
  const data = {
    nodeVersion: process.versions.node,
  };
  res.json(data);
});

appe.listen(port, () => {
  console.log(`Rodando em: http://localhost:${port}`);
});
