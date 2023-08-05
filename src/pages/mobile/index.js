import React from 'react';
import { Link } from 'react-router-dom';
import '../../style.css';
import './mobile.css';

import android from '../../assets/imagens/android_icon.png';
import flutter from '../../assets/imagens/flutter.png';
import ionic from '../../assets/imagens/ionic.png';
import reactNative from '../../assets/imagens/react.png';
import xamarin from '../../assets/imagens/xamarin.png';
import xcode from '../../assets/imagens/xcode.png';

export default function Mobile() {

  return (
    <body style={{ backgroundColor: 'var(--verde-claro)' }}>
      <div className="container">
        <div className="row">

          {/* -------------------Inicio dos cards----------------------- */}
          <div
            className="col-3 box box_java"
          >
            <Link to="/android" className='link-invisivel'>
              <div class="col-12">
                <img src={android} alt="android"></img>
              </div>
              <div class="col-12">
                <h3>Android</h3>
              </div>
            </Link>
          </div>


          <div
            className="col-3 box box_python"
          >
            <Link to="/flutter" className="link-invisivel">
              <div className="col-12">
                <img src={flutter} alt="flutter"></img>
              </div>
              <div className="col-12">
                <h3>Flutter</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_roxo"
          >
            <Link to="/ionic" className='link-invisivel'>
              <div class="col-12">
                <img src={ionic} alt="ionic"></img>
              </div>
              <div class="col-12">
                <h3>Ionic</h3>
              </div>
            </Link>
          </div>
          {/* -------------------metade dos cards----------------------- */}
          <div
            className="col-3 box box_postman"
          >
            <Link to="/reactNative" className='link-invisivel'>
              <div class="col-12">
                <img src={reactNative} alt="reactNative"></img>
              </div>
              <div class="col-12">
                <h3>React Native</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_verde"
          >
            <Link to="/xamarin" className='link-invisivel'>
              <div class="col-12">
                <img src={xamarin} alt="xamarin"></img>
              </div>
              <div class="col-12">
                <h3>Xamarin</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_verde"
          >
            <Link to="/xcode" className='link-invisivel'>
              <div class="col-12">
                <img src={xcode} alt="xcode"></img>
              </div>
              <div class="col-12">
                <h3>Xcode</h3>
              </div>
            </Link>
          </div>

          <div className="col-1 posicao-botao">
            <Link to="/" className='link-invisivel'>
              <button className='button-dark'>Voltar</button>
            </Link>
          </div>
          {/* -------------------Fim dos cards----------------------- */}
        </div>
      </div>
    </body>
  );
}