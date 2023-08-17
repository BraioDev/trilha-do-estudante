import React from "react";
import { FaUserAstronaut } from "react-icons/fa";
import "../../style.css";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { Link } from 'react-router-dom';

const LoginButton = () => {
    return (
        <Link to="/login" >
            <Tooltip
                title="Login"
                position="bottom"
                trigger="mouseenter"
                className="tool"
            >
                <button className="botao button-dark espacamento">
                    <FaUserAstronaut size={20} className="icon" /> {/* Ícone de seta para trás */}
                </button>
            </Tooltip>
        </Link>
    );
};

export default LoginButton;