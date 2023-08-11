import React, { useState, useEffect } from 'react';
import '../../../style.css';
import '../front.css';

export default function TypeScript() {
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

    const filteredItem = jsonData.find(item => item.id === 1);

    console.log(jsonData); // Verifique o valor de jsonData
    return (
        <body style={{ backgroundColor: 'var(--azul-base)' }}>
            <div className="container">
                <div className="row">
                    <div>
                        {filteredItem && (
                            <div key={filteredItem.id}>
                                <h2>{filteredItem.nome}</h2>
                                <img src={filteredItem.conteudo} alt={filteredItem.nome} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </body>
    );
}