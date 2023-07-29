import React, { Component} from 'react';
import './style.css';
import BibliotecaSelect from './components/BibliotecaSelect';

/* componentes */
class Input extends Component {
    render() {
        return (
            <div>
                <input class="barra_pesquisa" maxlength="30" placeholder="Pesquisar" />
            </div>
        );
    }
};

export default function app() {

    return (
        <div>
            <body>
                <header>
                    <div class="container">
                        <div class="row">
                            <div class="col-3">
                                <span>Logo</span>
                            </div>
                            <div class="col-5">
                                <Input />
                            </div>
                            <div class="col-1">
                                <button>
                                    Login
                                </button>
                            </div>
                            <div class="col-2">
                                <BibliotecaSelect />
                            </div>
                            <div class="col-1">
                                <button>
                                    Blog
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </body>
        </div>

    );
}