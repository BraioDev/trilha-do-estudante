import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BibliotecaSelect from '../select/bibliotecaSelect';
import '../../style.css';
import './header.css';

export default class Header extends Component {

    render() {
        return (
            <header>
                <div class="container">
                    <div class="row">
                        <div className=''>
                            <Link to ="/">Home</Link>
                            <br></br>
                            <Link to ="/back">Back</Link>
                            <br></br>
                            <Link to ="/front">Front</Link>
                            <br></br>
                            <Link to ="*">Erro</Link>
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