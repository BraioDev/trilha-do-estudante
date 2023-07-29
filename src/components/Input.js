import React, { Component } from 'react';
import '../style.css';

export default class Input extends Component {

    render() {
        return (
            <div>
                <input class="barra_pesquisa" maxlength="30" placeholder="Pesquisar" />
            </div>
        )
    };
}