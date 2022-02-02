import React, { useState } from "react";
import styles from "./App.module.css";
import UserInput from "./components/UserInput/UserInput";
import Modal from "./components/UI/Modal";
import UserList from "./components/UserList/UserList";
import { modalTypes } from "./types";

const App = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState({
    status: false,
    type: "",
  });

  const modalHandler = (type) => {
    setShowModal((prev) => {
      return {
        ...prev,
        status: true,
        type: modalTypes[type],
      };
    });
  };

  const closeModal = () => {
    setShowModal((prev) => {
      return {
        ...prev,
        status: false,
      };
    });
  };

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
  };

  const deleteUser = (id) => {
    setUsers((prev) => {
      const updated = prev.filter((user) => user.id !== id);
      return updated;
    });
  };

  return (
    <div className={`${styles.container}`}>
      <UserInput onAddUser={addUser} onShowModal={modalHandler} />
      {showModal.status && (
        <Modal type={showModal.type} onCloseModal={closeModal} />
      )}
      {users.length > 0 && !showModal.status && (
        <UserList users={users} onDeleteUser={deleteUser} />
      )}
    </div>
  );
};

export default App;
