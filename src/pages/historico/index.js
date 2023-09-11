import '../../style.css';
import Calendar from '../../components/calendar'
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaHouse } from "react-icons/fa6";
import LoginButton from "../../components/loginButton";

export default function Historico() {
    const handleBack = () => {
        window.history.back();
    };

    return (
        <body style={{ backgroundColor: 'var(--cinza)' }}>
            <div className='login-container'>
                <div className='calendar-card'>
                    <h2>Dias de estudo</h2>
                    <Calendar />
                </div>
                <div>
                    <Tooltip
                        title="Voltar"
                        position="bottom"
                        trigger="mouseenter"
                        className="tool"
                    >
                        <button className="botao button-dark espacamento" onClick={handleBack}>
                            <FaAngleLeft size={20} className="icon" /> {/* Ícone de seta para trás */}
                        </button>
                    </Tooltip>
                    <Link to="/" className='espacamento link-invisivel'>
                        <Tooltip
                            title="Home"
                            position="bottom"
                            trigger="mouseenter"
                            className="tool"
                        >
                            <button className='botao button-dark home'> <FaHouse size={20} className="icon" /></button>
                        </Tooltip>
                    </Link>
                    <LoginButton />
                </div>
            </div>
        </body>
    );
}