import React from "react";
import styles from "./css/button.module.css";

const Button = (props) => {
  const { type, onClick, children, className } = props;
  const classes = `${styles.button} ${className}`;
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
