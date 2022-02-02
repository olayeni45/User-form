import React, { useState } from "react";
import styles from "./UserItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const UserItem = (props) => {
  const { id, username, age, onDeleteUser } = props;
  const [hover, setHover] = useState(false);

  const hoverHandler = (state) => {
    setHover(state);
  };

  return (
    <div
      className={styles.list}
      onMouseEnter={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}
    >
      <div className={styles.flex}>
        <div className={styles.name}>{username}</div>
        <div>{` (${age} years old)`}</div>
      </div>

      <div>
        {hover && (
          <FontAwesomeIcon icon={faTrashAlt} onClick={() => onDeleteUser(id)} />
        )}
      </div>
    </div>
  );
};

export default UserItem;
