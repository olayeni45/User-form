import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const { type, onClick, children } = props;
  return (
    <button
      className={`${styles.button}`}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
