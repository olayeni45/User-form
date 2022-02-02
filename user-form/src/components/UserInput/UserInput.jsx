import React, { useState } from "react";
import styles from "./userInput.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { modalTypes } from "../../types";

const UserInput = (props) => {
  const { onAddUser, onShowModal } = props;
  const [userDetails, setUserDetails] = useState({
    username: "",
    age: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setUserDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const nameLength = userDetails.username.length;
    const ageLength = userDetails.age.length;

    if (nameLength === 0 || ageLength === 0) {
      onShowModal(modalTypes.empty);
      return;
    } else if (+userDetails.age < 0) {
      onShowModal(modalTypes.negative);
      return;
    } else {
      userDetails.id = Math.random().toString();
      onAddUser(userDetails);
      setUserDetails({
        username: "",
        age: "",
      });
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.inputDiv}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={userDetails.username}
            onChange={inputHandler}
          />
        </div>

        <div className={styles.inputDiv}>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            name="age"
            id="age"
            step="1"
            value={userDetails.age}
            onChange={inputHandler}
          />
        </div>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserInput;
