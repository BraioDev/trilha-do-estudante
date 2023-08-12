import React, { useState, useEffect } from 'react';
import '../../style.css'

export default function CustomComponent({ type, id }) {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/data.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setJsonData(data)
            })
            .catch(error => console.error('Erro ao buscar dados JSON:', error));
    }, []);

    const filteredItems = jsonData.filter(item => item.type === type && item.id === id);

    return (
        <body style={{ backgroundColor: 'var(--azul-base)' }}>
                <div className="row">
                    <div className='barra-lateral'>
                        <h2>Links</h2>
                        <ul>
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                            {/* Adicione mais links aqui */}
                        </ul>
                    </div>
                    <div>
                        {filteredItems.map(item => (
                            <div key={item.id}>
                                <h2>{item.nome}</h2>
                                <img src={item.conteudo} alt={item.nome} />

                                <h2>{item.nome}</h2>
                                <img src={item.conteudo} alt={item.nome} />

                                <h2>{item.nome}</h2>
                                <img src={item.conteudo} alt={item.nome} />

                                <h2>{item.nome}</h2>
                                <img src={item.conteudo} alt={item.nome} />

                                <h2>{item.nome}</h2>
                                <img src={item.conteudo} alt={item.nome} />
                            </div>
                        ))}
                    </div>
                </div>
        </body>
    );
}