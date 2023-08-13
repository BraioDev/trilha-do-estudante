/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';
import { FaHouse } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";

export default function CustomComponent() {
    /*Simula a chamada de api*/
    const [jsonData, setJsonData] = useState({ front: [], back: [] });
    const [searchKeyword, setSearchKeyword] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    /*Acessa a pasta data.json dentro do public */
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/data.json')
            .then(response => response.json())
            .then(data => {
                setJsonData(data);
            })
            .catch(error => console.error('Erro ao buscar dados JSON:', error));
    }, []);

    /*Procura dentro do json pelo termo*/
    const typeScriptData = jsonData.front.find(item => item.nome === "TypeScript");

    /*Scrola até a parte clicada*/
    const scrollToSection = (event, targetId, offset = 0) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    };

    /*Mostra o alert caso a palavra pesquisada não seja encontrada*/
    useEffect(() => {
        setShowAlert(
            searchKeyword.length > 0 &&
            !typeScriptData.topicos.some(topico => topico.Titulo.toLowerCase().includes(searchKeyword.toLowerCase()))
        );
    }, [searchKeyword, typeScriptData]);

    /*Retorna null caso não tenha nenhum dado*/
    if (!typeScriptData) {
        return null;
    }

    return (
        <div className="container">
            <div className="conteudo">
                <div className="row">
                    {/*Parte superior dentro está input, botão de lixeira e botão de home*/}
                    <div className='topo'>
                        <input
                            className='espacamento input-pesquisa'
                            type="text"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            placeholder="Pesquisar"
                        />
                        {searchKeyword && (
                            <button className="botao espacamento lixeira" onClick={() => setSearchKeyword("")}>
                                <FaTrash size={20} />
                            </button>
                        )}
                        <Link to="/" className='espacamento link-invisivel'>
                            <button className='botao button-dark home'> <FaHouse size={20} /></button>
                        </Link>
                    </div>
                    {/*Barra lateral que pega o titulo de cada json para a pessoa clicar*/}
                    {!showAlert && (
                        <div className='barra-lateral col-1-meio'>
                            <ul>
                                {typeScriptData.topicos.map(topico => {
                                    const lowerCaseTitulo = topico.Titulo.toLowerCase();
                                    if (lowerCaseTitulo.includes(searchKeyword.toLowerCase())) {
                                        return (
                                            <li key={topico.id}>
                                                <a href={`#${topico.id}`} onClick={(e) => scrollToSection(e, topico.id)}>
                                                    {topico.Titulo}
                                                </a>
                                            </li>
                                        );
                                    }
                                    return null;
                                })}
                            </ul>
                        </div>
                    )}
                    {/*Alert de pesquisa caso não encontre o que a pessoa pesquisar*/}
                    {showAlert && (
                        <div id="custom-alert" className="custom-alert">
                            <p>Desculpe não encontrei nada relacionado 😥</p>
                        </div>
                    )}
                    {/*Renderiza o conteudo dentro da tela*/}
                    <div className="col-11">
                        {typeScriptData.topicos.map(topico => {
                            const lowerCaseTitulo = topico.Titulo.toLowerCase();
                            {/*Mostra o que foi pesquisado, fazendo ele ficar tudo em minusculo*/ }
                            if (lowerCaseTitulo.includes(searchKeyword.toLowerCase())) {
                                {/*Validação para que ao começar com http ele não quebre no . trocando para \n*/ }
                                const conteudoComQuebrasDeLinha = topico.conteudo.replace(/\.\s/g, '.\n');
                                const conteudoArray = conteudoComQuebrasDeLinha.split('\n');

                                return (
                                    <div key={topico.id} id={topico.id} className="box-conteudo">
                                        <h2>{topico.Titulo}</h2>
                                        <span>
                                            {conteudoArray.map((linha, index) => {
                                                {/*Caso comece com https ele gera um href para a pesoa clicar*/ }
                                                if (linha.trim().startsWith("https:")) {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            <a href={linha} target="_blank" rel="noopener noreferrer">
                                                                Saiba mais em: {linha}
                                                                <br />
                                                            </a>
                                                        </React.Fragment>
                                                    );
                                                } else {
                                                    {/*Caso não mostra normalmente*/ }
                                                    return (
                                                        <React.Fragment key={index}>
                                                            {linha}
                                                            <br />
                                                        </React.Fragment>
                                                    );
                                                }
                                            })}
                                        </span>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
        </div >
    );
}
