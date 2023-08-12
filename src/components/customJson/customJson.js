import React, { useState, useEffect } from 'react';
import '../../style.css'

export default function CustomComponent() {
    const [jsonData, setJsonData] = useState([]);

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

    return (
        <div className="container-direita">
            <div className="conteudo">
                <div className="row">
                    <div className='barra-lateral col-1-meio'>
                        <ul>
                            {jsonData.map(item => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)}>
                                        {item.nome}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-11">
                        {jsonData.map(item => (
                            <div key={item.id} id={item.id} className="box-conteudo">
                                <h2>{item.nome}</h2>
                                <img src={item.conteudo} alt={item.nome} />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nulla volutpat auctor ante, eu pretium libero venenatis id.
                                    Nullam euismod feugiat dolor, eget dignissim neque consectetur a.
                                    Pellentesque nec nunc a arcu hendrerit condimentum.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}