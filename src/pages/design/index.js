import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';
import './design.css';

import figma from '../../assets/imagens/ux.png';
import canva from '../../assets/imagens/canva.png';
import illustrator from '../../assets/imagens/illustrator.png';
import invision from '../../assets/imagens/invision.png';
import sketch from '../../assets/imagens/sketch.png';
import adobephotoshop from '../../assets/imagens/adobephotoshop.png';
import BackButton from "../../components/backButton";

export default function Design() {

    return (
        <body style={{ backgroundColor: 'var(--azul-roxo)' }}>
            <div className="container">
                <div className="row">
                    <div className="w-100 alinhar-fim">
                        <BackButton />
                    </div>
                    {/* -------------------Inicio dos cards----------------------- */}
                    <div
                        className="col-3 box box_figma"
                    >
                        <Link to="/figma" className='link-invisivel'>
                            <div class="col-12">
                                <img src={figma} alt="figma"></img>
                            </div>
                            <div class="col-12">
                                <h3>Figma</h3>
                            </div>
                        </Link>
                    </div>


                    <div
                        className="col-3 box box_canva"
                    >
                        <Link to="/canva" className="link-invisivel">
                            <div className="col-12">
                                <img src={canva} alt="canva"></img>
                            </div>
                            <div className="col-12">
                                <h3>Canva</h3>
                            </div>
                        </Link>
                    </div>

                    <div
                        className="col-3 box box_illustrator"
                    >
                        <Link to="/illustrator" className='link-invisivel'>
                            <div class="col-12">
                                <img src={illustrator} alt="illustrator"></img>
                            </div>
                            <div class="col-12">
                                <h3>Illustrator</h3>
                            </div>
                        </Link>
                    </div>
                    {/* -------------------metade dos cards----------------------- */}
                    <div
                        className="col-3 box box_invision"
                    >
                        <Link to="/invision" className='link-invisivel'>
                            <div class="col-12">
                                <img src={invision} alt="invision"></img>
                            </div>
                            <div class="col-12">
                                <h3>Invision</h3>
                            </div>
                        </Link>
                    </div>

                    <div
                        className="col-3 box box_sketch"
                    >
                        <Link to="/sketch" className='link-invisivel'>
                            <div class="col-12">
                                <img src={sketch} alt="sketch"></img>
                            </div>
                            <div class="col-12">
                                <h3>Sketch</h3>
                            </div>
                        </Link>
                    </div>

                    <div
                        className="col-3 box box_adobephotoshop"
                    >
                        <Link to="/adobephotoshop" className='link-invisivel'>
                            <div class="col-12">
                                <img src={adobephotoshop} alt="adobephotoshop"></img>
                            </div>
                            <div class="col-12">
                                <h3>Adobe Photoshop</h3>
                            </div>
                        </Link>
                    </div>
                    {/* -------------------Fim dos cards----------------------- */}
                </div>
            </div>
        </body>
    );
}