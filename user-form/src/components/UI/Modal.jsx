import React from "react";
import styles from "./css/modal.module.css";
import Button from "./Button";
import { modalMessages, modalTypes } from "../../types";

const Modal = (props) => {
  const { type, onCloseModal } = props;

  return (
    <div>
      <div className={styles.backdrop} onClick={() => onCloseModal()} />
      <div className={`${styles.container}`} onClick={() => onCloseModal()}>
        <div className={styles.invalid}>
          <div className={styles.text}>
            {type === modalTypes.empty ? "Invalid input" : "Invalid age"}
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.error}>{modalMessages[type]}</div>
          <div className={styles.buttonDiv}>
            <Button
              type="button"
              className={styles.btn}
              onClick={() => onCloseModal()}
            >
              Okay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
