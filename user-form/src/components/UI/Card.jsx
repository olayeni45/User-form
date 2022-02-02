import React from "react";
import styles from "./css/card.module.css";

const Card = (props) => {
  const { children, className } = props;
  const classes = `${styles.card} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
