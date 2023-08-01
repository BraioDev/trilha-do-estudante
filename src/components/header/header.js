import React, { Component } from 'react';
import BibliotecaSelect from '../select/bibliotecaSelect';
import '../style.css';
import './header.css';

export default class Header extends Component {

    render() {
        return (
            <header>
                <div class="container">
                    <div class="row">
                        <div class="col-3">
                            <span>Logo</span>
                        </div>
                        <div class="col-5">
                            <input></input>
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
        );
    }
}