import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';
import './banco.css';

import oracle from '../../assets/imagens/banco_icon.png';
import heid from '../../assets/imagens/heid.png';
import pgadmin from '../../assets/imagens/pgadmin.png';
import mongodb from '../../assets/imagens/mongodb.png';
import mysql from '../../assets/imagens/mysql.png';
import sqlite from '../../assets/imagens/sqlite.png';
import BackButton from "../../components/backButton";
import LoginButton from "../../components/loginButton";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { FaCalendar, FaCircleCheck, FaRegCircle } from "react-icons/fa6";
import { connect } from 'react-redux';

function Banco(props) {

  return (
    <body style={{ backgroundColor: 'var(--cinza-escuro)' }}>
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
            className="col-3 box box_cinza"
          >
            {props.languages.includes('ORACLE') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('ORACLE') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/oracle" className='link-invisivel' onClick={props.oracle}>
              <div class="col-12">
                <img src={oracle} alt="oracle"></img>
              </div>
              <div class="col-12">
                <h3>Oracle</h3>
              </div>
            </Link>
          </div>


          <div
            className="col-3 box box_heid"
          >
            {props.languages.includes('HEID') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('HEID') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/heid" className="link-invisivel" onClick={props.heid}>
              <div className="col-12">
                <img src={heid} alt="heid"></img>
              </div>
              <div className="col-12">
                <h3>HeidSql</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_pgadmin"
          >
            {props.languages.includes('PGADMIN') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('PGADMIN') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/pgadmin" className='link-invisivel' onClick={props.pgadmin}>
              <div class="col-12">
                <img src={pgadmin} alt="pgadmin"></img>
              </div>
              <div class="col-12">
                <h3>PgAdmin</h3>
              </div>
            </Link>
          </div>
          {/* -------------------metade dos cards----------------------- */}
          <div
            className="col-3 box box_mongodb"
          >
            {props.languages.includes('MONGODB') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('MONGODB') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/mongodb" className='link-invisivel' onClick={props.mongodb}>
              <div class="col-12">
                <img src={mongodb} alt="mongodb"></img>
              </div>
              <div class="col-12">
                <h3>MongoDB</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_mysql"
          >
            {props.languages.includes('MYSQL') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('MYSQL') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/mysql" className='link-invisivel' onClick={props.mysql}>
              <div class="col-12">
                <img src={mysql} alt="mysql"></img>
              </div>
              <div class="col-12">
                <h3>MySql</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_sqlite"
          >
            {props.languages.includes('SQLITE') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('SQLITE') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/sqlite" className='link-invisivel' onClick={props.mysql}>
              <div class="col-12">
                <img src={sqlite} alt="sqlite"></img>
              </div>
              <div class="col-12">
                <h3>SqLite</h3>
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
    oracle: () => dispatch({ type: 'ORACLE' }),
    heid: () => dispatch({ type: 'HEID' }),
    pgadmin: () => dispatch({ type: 'PGADMIN' }),
    mongodb: () => dispatch({ type: 'MONGODB' }),
    mysql: () => dispatch({ type: 'MYSQL' }),
    sqlite: () => dispatch({ type: 'SQLITE' }),
  };
}
export default connect(mapState, mapAssociate)(Banco)