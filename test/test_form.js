const chai = require("chai");
const expect = chai.expect;
const salvarColaboracao = require("../api/colaboracao");

describe("Função salvar uma colaboração", () => {
  it("Deve salvar um dado corretamente", () => {
    const dataToSave = {
      nome: "TESTE",
      assunto: "TESTE",
      texto: "TESTE",
    };

    const resultado = salvarColaboracao(dataToSave);
    expect(resultado).to.equal(true);
  });
});

describe("Função não salvar uma colaboração", () => {
  it("Deve Negar o salvamento se não tiver algum dado", () => {
    const dataToSave = {
      assunto: "TESTE",
      texto: "TESTE",
    };

    const resultado = salvarColaboracao(dataToSave);
    expect(resultado).to.equal(false);
  });
});

describe("Função sobreescrever uma colaboração", () => {
    it("Deve sobreescrever o salvamento se ja existir o dado com o mesmo nome", () => {
      const dataToSave = {
        nome: "TESTE",
        texto: "TESTE",
        assunto: "TESTE",
      };
  
      const resultado = salvarColaboracao(dataToSave);
      expect(resultado).to.equal(true);
    });
  });