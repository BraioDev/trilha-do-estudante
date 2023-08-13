/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';
import { FaHouse } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

export default function CustomComponent({ linguagem }) {
    /*Simula a chamada de api*/
    const [jsonData, setJsonData] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    /*Acessa a pasta data.json dentro do public */
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/data.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setJsonData(data);
            })
            .catch(error => console.error('Erro ao buscar dados JSON:', error));
    }, []);

    /*Procura dentro do json pelo termo*/
    const linguagemData = jsonData.find(item => item.nome === linguagem);

    /*Scrola até a parte clicada*/
    const scrollToSection = (event, targetId, offset = 0) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    };

    /*Pesquisa a palavra do input*/
    useEffect(() => {
        setShowAlert(
            searchKeyword.length > 0 &&
            !linguagemData.topicos.some(topico => topico.Titulo.toLowerCase().includes(searchKeyword.toLowerCase()))
        );
    }, [searchKeyword, linguagemData]);

    /*Retorna null caso não tenha nenhum dado*/
    if (!linguagemData) {
        return null;
    }

    const handleBack = () => {
        window.history.back(); // Volta para a página anterior na história de navegação
    };

    return (
        <div className="container">
            <div className="conteudo">
                <div className="row">
                    {/*Parte superior dentro está input, botão de lixeira e botão de home*/}
                    <div className='topo'>
                        <Link to="/" className='espacamento link-invisivel'>
                            <Tooltip
                                title="Home"
                                position="bottom"
                                trigger="mouseenter"
                                className="tool"
                            >
                                <button className='botao button-dark home'> <FaHouse size={20} className="icon" /></button>
                            </Tooltip>
                        </Link>
                        <input
                            className='espacamento input-pesquisa'
                            type="text"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            placeholder="Pesquisar"
                        />
                        {searchKeyword && (
                            <Tooltip
                                title="Limpar"
                                position="bottom"
                                trigger="mouseenter"
                                className="tool"
                            >
                                <button className="botao espacamento lixeira" onClick={() => setSearchKeyword("")}>
                                    <FaTrash size={20} className="icon" />
                                </button>
                            </Tooltip>
                        )}
                        <Tooltip
                            title="voltar"
                            position="bottom"
                            trigger="mouseenter"
                            className="tool"
                        >
                            <button className="botao espacamento" onClick={handleBack}>
                                <FaAngleLeft size={20} className="icon" /> {/* Ícone de seta para trás */}
                            </button>
                        </Tooltip>
                    </div>
                    {/*Barra lateral que pega o titulo de cada json para a pessoa clicar*/}
                    {!showAlert && (
                        <div className='barra-lateral col-1-meio'>
                            <ul>
                                {linguagemData.topicos.map(topico => {
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
                        {linguagemData.topicos.map(topico => {
                            const lowerCaseTitulo = topico.Titulo.toLowerCase();

                            if (lowerCaseTitulo.includes(searchKeyword.toLowerCase())) {
                                const conteudoComQuebrasDeLinha = topico.conteudo.replace(/\.\s/g, '.\n');
                                const conteudoArray = conteudoComQuebrasDeLinha.split('\n');

                                const marginTop = lowerCaseTitulo.includes("o que é") ? "50px" : "0"; // Adiciona a margem apenas se o título contiver "O que é"

                                return (
                                    <div key={topico.id} id={topico.id} className="box-conteudo" style={{ marginTop }}>
                                        <h2>{topico.Titulo}</h2>
                                        <span>
                                            {conteudoArray.map((linha, index) => {
                                                /* Caso o conteudo comece com https deixa com href*/
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
                                                    /* Se não aprensenta normamlmente*/
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
