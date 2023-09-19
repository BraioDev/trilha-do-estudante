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
import LoginButton from "../../components/loginButton";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { FaCalendar, FaCircleCheck, FaRegCircle } from "react-icons/fa6";
import { connect } from 'react-redux';

function Design(props) {

    return (
        <body style={{ backgroundColor: 'var(--azul-roxo)' }}>
            <div className="container">
                <div className="row">
                    <div className="w-100 alinhar-fim">
                        <BackButton />
                        <Tooltip
                            title="Calendário"
                            position="bottom"
                            trigger="mouseenter"
                            className="tool"
                        >
                            <Link to="/historico" className='link-invisivel'>
                                <button className="botao button-dark espacamento">
                                    <FaCalendar size={20} className="icon" />
                                </button>
                            </Link>
                        </Tooltip>
                        <LoginButton />
                    </div>
                    {/* -------------------Inicio dos cards----------------------- */}
                    <div
                        className="col-3 box box_figma"
                    >
                        {props.languages.includes('FIGMA') &&
                            <div className='iconCheck'><FaCircleCheck /></div>
                        }
                        {!props.languages.includes('FIGMA') &&
                            <div className='iconDontCheck'><FaRegCircle /></div>
                        }
                        <Link to="/figma" className='link-invisivel' onClick={props.figma}>
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
                        {props.languages.includes('CANVA') &&
                            <div className='iconCheck'><FaCircleCheck /></div>
                        }
                        {!props.languages.includes('CANVA') &&
                            <div className='iconDontCheck'><FaRegCircle /></div>
                        }
                        <Link to="/canva" className="link-invisivel" onClick={props.canva}>
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
                        {props.languages.includes('ILLUSTRATOR') &&
                            <div className='iconCheck'><FaCircleCheck /></div>
                        }
                        {!props.languages.includes('ILLUSTRATOR') &&
                            <div className='iconDontCheck'><FaRegCircle /></div>
                        }
                        <Link to="/illustrator" className='link-invisivel' onClick={props.illustrator}>
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
                        {props.languages.includes('INVISION') &&
                            <div className='iconCheck'><FaCircleCheck /></div>
                        }
                        {!props.languages.includes('INVISION') &&
                            <div className='iconDontCheck'><FaRegCircle /></div>
                        }
                        <Link to="/invision" className='link-invisivel' onClick={props.invision}>
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
                        {props.languages.includes('SKETCH') &&
                            <div className='iconCheck'><FaCircleCheck /></div>
                        }
                        {!props.languages.includes('SKETCH') &&
                            <div className='iconDontCheck'><FaRegCircle /></div>
                        }
                        <Link to="/sketch" className='link-invisivel' onClick={props.sketch}>
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
                        {props.languages.includes('ADOBEPH') &&
                            <div className='iconCheck'><FaCircleCheck /></div>
                        }
                        {!props.languages.includes('ADOBEPH') &&
                            <div className='iconDontCheck'><FaRegCircle /></div>
                        }
                        <Link to="/adobephotoshop" className='link-invisivel' onClick={props.adobeph}>
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

const mapState = (state) => {
    return {
        languages: state.languages,
    };
}

const mapAssociate = (dispatch) => {
    return {
        figma: () => dispatch({ type: 'FIGMA' }),
        canva: () => dispatch({ type: 'CANVA' }),
        illustrator: () => dispatch({ type: 'ILLUSTRATOR' }),
        invision: () => dispatch({ type: 'INVISION' }),
        sketch: () => dispatch({ type: 'SKETCH' }),
        adobeph: () => dispatch({ type: 'ADOBEPH' }),
    };
}
export default connect(mapState, mapAssociate)(Design)