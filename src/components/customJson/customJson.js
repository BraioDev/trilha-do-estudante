import React, { useState, useEffect } from 'react';
import '../../style.css'

export default function CustomComponent() {
    const [jsonData, setJsonData] = useState({ front: [], back: [] });

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/data.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setJsonData(data);
            })
            .catch(error => console.error('Erro ao buscar dados JSON:', error));
    }, []);

    const scrollToSection = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
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
                    <div className='barra-lateral col-1-meio'>
                        <ul>
                            {typeScriptData.topicos.map(topico => (
                                <li key={topico.id}>
                                    <a href={`#${topico.id}`} onClick={(e) => scrollToSection(e, topico.id)}>
                                        {topico.nome}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-11">
                        {typeScriptData.topicos.map(topico => (
                            <div key={topico.id} id={topico.id} className="box-conteudo">
                                <h2>{topico.nome}</h2>
                                <img src={topico.conteudo} alt={topico.nome} />
                                {/* Adicione mais conteúdo conforme necessário */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}