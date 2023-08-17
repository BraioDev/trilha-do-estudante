import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import "../../style.css";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

const BackButton = () => {
    const handleBack = () => {
        window.history.back();
    };

    return (
        <Tooltip
            title="voltar"
            position="bottom"
            trigger="mouseenter"
            className="tool"
        >
            <button className="botao button-dark espacamento" onClick={handleBack}>
                <FaAngleLeft size={20} className="icon" /> {/* Ícone de seta para trás */}
            </button>
        </Tooltip>
    );
};

export default BackButton;