const chai = require('chai');
const expect = chai.expect;
const dataSave = require('../api/dataSave');

describe('Função de Form', () => {
    it('Deve salvar um dado corretamente', () => {
        const dataToSave = {
            nome: "teste",
            email: "teste@gmail.com",
            senha: "123456",
            idade: "20",
            genero: "Rock",
        };

        const resultado = dataSave(dataToSave);
        expect(resultado).to.equal(true);
    });

});