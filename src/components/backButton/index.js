import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import "../../style.css";

const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <button className="botao button-dark espacamento" onClick={handleBack}>
      <FaAngleLeft size={20} className="icon" />
    </button>
  );
};

export default BackButton;