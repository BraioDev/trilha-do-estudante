const fs = require("fs");

function salvarColaboracao(req) {
  if (!req.nome || !req.assunto || !req.texto) {
    return false;
  }

  const dataToSave = {
    nome: req.nome,
    assunto: req.assunto,
    texto: req.texto,
  };

  try {
    let existingData = [];
    try {
      const data = fs.readFileSync("data.json", "utf-8");
      existingData = JSON.parse(data);
    } catch (error) {
      return false;
    }

    const existingIndex = existingData.findIndex(
      (item) => item.nome === dataToSave.nome
    );

    if (existingIndex !== -1) {
      existingData[existingIndex] = dataToSave;
    } else {
      existingData.push(dataToSave);
    }

    fs.writeFileSync("data.json", JSON.stringify(existingData));
    return true;
  } catch (error) {
    return false;
  }
}

module.exports = salvarColaboracao;
