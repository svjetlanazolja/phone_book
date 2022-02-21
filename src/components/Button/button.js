import React from "react";
import "./button.css";

const Button = ({ action, text }) => {
  return (
    <button type="button" className="customButton" onClick={action}>
      {text}
    </button>
  );
};

export default Button;
