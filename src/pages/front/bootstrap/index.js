import { Link } from 'react-router-dom';
import '../../../style.css';
import '../front.css';

export default function Bootstrap() {
    return (
        <body style={{ backgroundColor: 'var(--azul-base)' }}>
            <div className="container">
                <div className="row">
                    <span>Bootstrap</span>
                </div>
            </div>
        </body>
    );
}