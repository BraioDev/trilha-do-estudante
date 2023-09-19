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
import BackButton from "../../components/backButton";
import LoginButton from "../../components/loginButton";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { FaCalendar, FaCircleCheck, FaRegCircle } from "react-icons/fa6";
import { connect } from 'react-redux';

function Mobile(props) {

  return (
    <body style={{ backgroundColor: 'var(--verde-claro)' }}>
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
            className="col-3 box box_android"
          >
            {props.languages.includes('ANDROID') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('ANDROID') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/android" className='link-invisivel' onClick={props.android}>
              <div class="col-12">
                <img src={android} alt="android"></img>
              </div>
              <div class="col-12">
                <h3>Android</h3>
              </div>
            </Link>
          </div>


          <div
            className="col-3 box box_flutter"
          >
            {props.languages.includes('FLUTER') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('FLUTER') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/flutter" className="link-invisivel" onClick={props.fluter}>
              <div className="col-12">
                <img src={flutter} alt="flutter"></img>
              </div>
              <div className="col-12">
                <h3>Flutter</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_ionic"
          >
            {props.languages.includes('IONIC') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('IONIC') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/ionic" className='link-invisivel' onClick={props.ionic}>
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
            className="col-3 box box_react"
          >
            {props.languages.includes('NATIVE') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('NATIVE') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/reactNative" className='link-invisivel' onClick={props.native}>
              <div class="col-12">
                <img src={reactNative} alt="reactNative"></img>
              </div>
              <div class="col-12">
                <h3>React Native</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_xamarin"
          >
            {props.languages.includes('XAMARIN') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('XAMARIN') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/xamarin" className='link-invisivel' onClick={props.xamarin}>
              <div class="col-12">
                <img src={xamarin} alt="xamarin"></img>
              </div>
              <div class="col-12">
                <h3>Xamarin</h3>
              </div>
            </Link>
          </div>

          <div
            className="col-3 box box_xcode"
          >
            {props.languages.includes('XCODE') &&
              <div className='iconCheck'><FaCircleCheck /></div>
            }
            {!props.languages.includes('XCODE') &&
              <div className='iconDontCheck'><FaRegCircle /></div>
            }
            <Link to="/xcode" className='link-invisivel' onClick={props.xcode}>
              <div class="col-12">
                <img src={xcode} alt="xcode"></img>
              </div>
              <div class="col-12">
                <h3>Xcode</h3>
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
    android: () => dispatch({ type: 'ANDROID' }),
    fluter: () => dispatch({ type: 'FLUTER' }),
    ionic: () => dispatch({ type: 'IONIC' }),
    native: () => dispatch({ type: 'NATIVE' }),
    xamarin: () => dispatch({ type: 'XAMARIN' }),
    xcode: () => dispatch({ type: 'XCODE' }),
  };
}
export default connect(mapState, mapAssociate)(Mobile)