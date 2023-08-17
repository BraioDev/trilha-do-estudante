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

export default function Banco() {

  return (
    <body style={{ backgroundColor: 'var(--cinza-escuro)' }}>
      <div className="container">
        <div className="row">
          <div className="w-100 alinhar-fim">
            <BackButton />
          </div>
          {/* -------------------Inicio dos cards----------------------- */}
          <div
            className="col-3 box box_cinza"
          >
            <Link to="/oracle" className='link-invisivel'>
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
            <Link to="/heid" className="link-invisivel">
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
            <Link to="/pgadmin" className='link-invisivel'>
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
            <Link to="/mongodb" className='link-invisivel'>
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
            <Link to="/mysql" className='link-invisivel'>
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
            <Link to="/sqlite" className='link-invisivel'>
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