import React from 'react';
import { useAccessibility } from './AccessibilityContext';
import { FaTextHeight } from "react-icons/fa6";
import { FaToggleOff } from "react-icons/fa6";
import "../../style.css";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

export default function AccessibilityButton() {
    const { toggleFontSize, toggleBackground, fontSize, background } = useAccessibility();

    return (
        <div>
            <Tooltip
                title="Tamanho do texto"
                position="bottom"
                trigger="mouseenter"
                className="tool"
            >
                <button
                    className={`botao button-dark espacamento ${fontSize}-font`}
                    onClick={toggleFontSize}
                >
                    <FaTextHeight size={20} className="icon" />
                </button>
            </Tooltip>
            <Tooltip
                title="Cor"
                position="bottom"
                trigger="mouseenter"
                className="tool"
            >
                <button
                    className={`botao button-dark espacamento ${background}`}
                    onClick={toggleBackground}
                >
                    <FaToggleOff size={20} className="icon" />
                </button>
            </Tooltip>
        </div>
    );
}