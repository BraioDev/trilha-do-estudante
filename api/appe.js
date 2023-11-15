const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const fsPromisse = require("fs/promises");
const fs = require("fs");
const { getApps, initializeApp } = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");
const { Translate } = require("@google-cloud/translate").v2;
const translate = new Translate();

const port = 8080;
const app = express();
const bodyParser = require("body-parser");

app.use(cookieParser());
app.use(
  session({
    secret: "minhachave",
    resave: false,
    saveUninitialized: true,
  })
);

//Configuração do ejs para carregar as views
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

var firebaseConfig = {
  apiKey: "AIzaSyC8zv9RH-Aetxl7cfm1wxmVLIYYUuqohu4",
  authDomain: "trilhadoestudante-23b83.firebaseapp.com",
  projectId: "trilhadoestudante-23b83",
  storageBucket: "trilhadoestudante-23b83.appspot.com",
  messagingSenderId: "113199600295",
  appId: "1:113199600295:web:2101ee3dac696589108182",
  measurementId: "G-S76DRY10EH",
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0];
var auth = getAuth(firebaseApp);
let isBase = false;
let isTranslationToEnglish = true;
//Configurar o body-parser, para processar os dados do form
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
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

async function translateValues(data, sourceLang, targetLang) {
  const translations = await translate.translate(data, {
    from: sourceLang,
    to: targetLang,
  });

  return translations[0];
}

app.post("/salvar", async (req, res) => {
  const like = req.body.like;
  console.log("🚀 ~ file: appe.js:102 ~ app.post ~ like:", like);

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
    console.log("Salvo em dados.json com sucesso!");

    if (like === true) {
      try {
        const dataToSave = {
          nome: req.body.nome,
          assunto: req.body.assunto,
          texto: req.body.texto,
          like: req.body.like,
        };

        let existingData = [];
        try {
          const data = fs.readFileSync("fav.json", "utf-8");
          existingData = JSON.parse(data);
        } catch (error) {
          console.error("Erro ao ler dados do arquivo JSON:", error);
        }

        existingData.push(dataToSave);

        fs.writeFileSync("fav.json", JSON.stringify(existingData));
        console.log("Salvo em fav.json com sucesso!");
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Erro ao tentar salvar suas informações: " + error,
        });
      }
    }
    res
      .status(200)
      .json({ success: true, message: "Dados salvos com sucesso!" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro ao tentar salvar suas informações: " + error,
    });
  }
});

app.get("/salvar", async (req, res) => {
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

app.post("/excluir", async (req, res) => {
  try {
    const dataToExclude = {
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

    existingData = existingData.filter((item) => {
      return !(
        item.nome === dataToExclude.nome &&
        item.assunto === dataToExclude.assunto &&
        item.texto === dataToExclude.texto
      );
    });

    fs.writeFileSync("dados.json", JSON.stringify(existingData));
    res
      .status(200)
      .json({ success: true, message: "Dados excluídos com sucesso!" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erro ao tentar excluir suas informações: " + error,
    });
  }
});

app.post("/favoritar", async (req, res) => {});

app.post("/login", async (req, res) => {
  try {
    await signInWithEmailAndPassword(auth, req.body.email, req.body.password);
    res.redirect("/home");
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/home", (req, res) => {
  const user = auth.currentUser;

  if (user) {
    res.render("home", { user: user });
  } else {
    res.redirect("/");
  }
});

/*Session e cookie*/

app.get("/perfil", (req, res) => {
  const usuarioLogado = req.cookies.usuario_logado;
  res.render("perfil", { user: usuarioLogado });
});

app.get("/favorito", (req, res) => {
  const usuarioLogado = req.cookies.usuario_logado;

  fs.readFile("fav.json", "utf-8", (err, data) => {
    if (err) {
      console.error("Erro ao ler dados do arquivo fav.json:", err);
      res.status(500).send("Erro ao ler dados do arquivo fav.json");
      return;
    }
    const favorites = JSON.parse(data);
    res.render("favorito", { user: usuarioLogado, favorites: favorites });
  });
});

app.get("/codificar-decodificar", (req, res) => {
  let existingData = [];

  try {
    const data = fs.readFileSync("dados.json", "utf-8");
    existingData = JSON.parse(data);
  } catch (error) {
    console.error("Erro ao ler dados do arquivo JSON:", error);
  }

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
  res.redirect("/home");
});

app.get("/traduzir-alternar", async (req, res) => {
  let existingData = [];

  try {
    const data = fs.readFileSync("dados.json", "utf-8");
    existingData = JSON.parse(data);
  } catch (error) {
    console.error("Erro ao ler dados do arquivo JSON:", error);
  }

  // Traduzir os dados com base na flag isTranslationToEnglish
  existingData = await translateValues(
    existingData,
    isTranslationToEnglish ? "pt" : "en",
    isTranslationToEnglish ? "en" : "pt"
  );

  isTranslationToEnglish = !isTranslationToEnglish; // Alternar a flag

  try {
    fs.writeFileSync("dados.json", JSON.stringify(existingData), "utf-8");
    console.log(
      `Dados traduzidos e alternados ${
        isTranslationToEnglish ? "para inglês" : "para português"
      } e salvos com sucesso!`
    );
  } catch (error) {
    console.error(
      `Erro ao salvar dados traduzidos e alternados ${
        isTranslationToEnglish ? "para inglês" : "para português"
      }:`,
      error
    );
  }
  res.redirect("/home");
});

app.listen(port, () => {
  console.log(`Rodando em: http://localhost:${port}`);
});
