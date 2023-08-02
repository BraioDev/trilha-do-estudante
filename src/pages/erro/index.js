import React from 'react';
import '../../style.css';
import { Link } from 'react-router-dom';

export default function Erro() {
  return (
    <body>
      <div className="container">
        <div className="row">
          <span>Ops! Parece que essa página não foi encontrada</span>
          <br></br>
          <span>Encontramos essas páginas no lugar:</span>
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/back">Back</Link>
          <br></br>
          <Link to="/front">Front</Link>
          <br></br>
          <Link to="/mobile">Mobile</Link>
          <br></br>
          <Link to="/ux">Ui/Ux</Link>
        </div>
      </div>
    </body>
  );
}