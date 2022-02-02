import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const { onAddUser } = props;
  const [details, setDetails] = useState({
    username: "",
    age: "",
  });
  const [error, setError] = useState();

  const formHandler = (event) => {
    const { name, value } = event.target;

    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      details.username.trim().length === 0 ||
      details.age.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+details.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    onAddUser(details);
    setDetails({
      username: "",
      age: "",
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={`${styles.input}`}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={formHandler}
            name="username"
            value={details.username}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={formHandler}
            name="age"
            value={details.age}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
