import React from 'react';
import '../../style.css';
import './erro.css';
import notFound from '../../assets/imagens/404.png';
import { Link } from 'react-router-dom';

export default function Erro() {
  return (
    <body style={{ background: 'var(--cinza)' }}>
      <div className="container">
        <div className="row erro">
          <div class="col-12">
            <img src={notFound} alt="back"></img>
            <h1>
              Desculpe, parece que a página que você está procurando não foi encontrada. Talvez seja necessário fazer login para acessá-la. 😥</h1>
            <h1>Tente algumas destas</h1>
            <br></br>
            <Link to="/" className='link-invisivel'><b>Home</b></Link>
            <br></br>
            <Link to="/login" className='link-invisivel'><b>Login</b></Link>
            <br></br>
            <Link to="/front" className='link-invisivel'><b>Front</b></Link>
            <br></br>
            <Link to="/back" className='link-invisivel'><b>Back</b></Link>
            <br></br>
            <Link to="/mobile" className='link-invisivel'><b>Mobile</b></Link>
            <br></br>
            <Link to="/banco" className='link-invisivel'><b>Banco</b></Link>
            <br></br>
            <Link to="/desing" className='link-invisivel'><b>Design</b></Link>
          </div>
        </div>
      </div>
    </body>
  );
}