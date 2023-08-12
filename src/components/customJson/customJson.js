import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../style.css'

export default function CustomComponent() {
    const [jsonData, setJsonData] = useState({ front: [], back: [] });
    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/data.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setJsonData(data);
            })
            .catch(error => console.error('Erro ao buscar dados JSON:', error));
    }, []);

    const scrollToSection = (event, targetId, offset = 0) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    };

    const typeScriptData = jsonData.front.find(item => item.nome === "TypeScript");

    if (!typeScriptData) {
        return null;
    }

    return (
        <div className="container">
            <div className="conteudo">
                <div className="row">
                    <div className='topo'>
                        <input
                            className='espacamento input-pesquisa'
                            type="text"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            placeholder="Pesquisar"
                        />
                        {searchKeyword && (
                            <button className="espacamento botao-limpar" onClick={() => setSearchKeyword("")}>
                                X
                            </button>
                        )}
                        <Link to="/" className='espacamento link-invisivel home'>
                            <button className='button-dark'>Voltar</button>
                        </Link>
                    </div>
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
                    <div className="col-11">
                        {typeScriptData.topicos.map(topico => {
                            const lowerCaseTitulo = topico.Titulo.toLowerCase();
                            if (lowerCaseTitulo.includes(searchKeyword.toLowerCase())) {
                                return (
                                    <div key={topico.id} id={topico.id} className="box-conteudo">
                                        <h2>{topico.Titulo}</h2>
                                        <img src={topico.conteudo} alt={topico.Titulo} />
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}