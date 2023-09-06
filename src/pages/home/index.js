import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import back from '../../assets/imagens/csharp.png';
import front from '../../assets/imagens/ts_icon.png';
import mobile from '../../assets/imagens/android_icon.png';
import design from '../../assets/imagens/ux.png';
import banco from '../../assets/imagens/banco_icon.png';
import '../../style.css';
import './home.css';
import { connect } from 'react-redux';
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa6";

function Home(props) {
  // Definir o estado inicial para a cor do body
  const [bodyColor, setBodyColor] = useState('var(--cinza)');

  // Função para atualizar a cor do body com base na cor do box em destaque
  const handleBoxHover = (color) => {
    setBodyColor(color);
  };

  return (
    <body style={{ backgroundColor: bodyColor }}>
      <div className='container'>

        <div className="row">
          <div
            className="col-3 box box_claro"
            onMouseEnter={() => handleBoxHover('var(--azul-base)')}
            onMouseLeave={() => handleBoxHover('var(--cinza)')}
          >
            {props.languages.includes('FRONTEND') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('FRONTEND') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/front" className='link-invisivel' onClick={props.front}>
              <div class="col-12">
                <img src={front} alt="back"></img>
              </div>
              <div class="col-12">
                <h3>Front end</h3>
              </div>
            </Link>
          </div>


          <div
            className="col-3 box box_escuro"
            onMouseEnter={() => handleBoxHover('var(--preto-cinza)')}
            onMouseLeave={() => handleBoxHover('var(--cinza)')}
          >
            {props.languages.includes('BACKEND') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('BACKEND') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/back" className="link-invisivel" onClick={props.back}>
              <div className="col-12">
                <img src={back} alt="back"></img>
              </div>
              <div className="col-12">
                <h3>Back end</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_verde"
            onMouseEnter={() => handleBoxHover('var(--verde-claro)')}
            onMouseLeave={() => handleBoxHover('var(--cinza)')}
          >
            {props.languages.includes('MOBILE') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('MOBILE') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/mobile" className='link-invisivel' onClick={props.mobile}>
              <div class="col-12">
                <img src={mobile} alt="mobile"></img>
              </div>
              <div class="col-12">
                <h3>Mobile</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_cinza"
            onMouseEnter={() => handleBoxHover('var(--cinza-escuro)')}
            onMouseLeave={() => handleBoxHover('var(--cinza)')}
          >
            {props.languages.includes('BANCODADOS') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('BANCODADOS') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/banco" className='link-invisivel' onClick={props.banco}>
              <div class="col-12">
                <img src={banco} alt="Bd"></img>
              </div>
              <div class="col-12">
                <h3>Banco de dados</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_roxo"
            onMouseEnter={() => handleBoxHover('var(--azul-roxo)')}
            onMouseLeave={() => handleBoxHover('var(--cinza)')}
          >
             {props.languages.includes('DESIGN') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('DESIGN') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/design" className='link-invisivel' onClick={props.design}>
              <div class="col-12">
                <img src={design} alt="design"></img>
              </div>
              <div class="col-12">
                <h3>Design</h3>
              </div>
            </Link>
          </div>
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
    front: () => dispatch({ type: 'FRONTEND' }),
    back: () => dispatch({ type: 'BACKEND' }),
    mobile: () => dispatch({ type: 'MOBILE' }),
    banco: () => dispatch({ type: 'BANCODADOS' }),
    design: () => dispatch({ type: 'DESIGN' }),
  };
}
export default connect(mapState, mapAssociate)(Home)