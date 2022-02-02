import React from "react";
import UserItem from "../UserItem/UserItem";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  const { users, onDeleteUser } = props;

  return (
    <Card className={styles.userList}>
      {users.map((user) => (
        <div className={styles.listItem} key={user.id}>
          <UserItem
            id={user.id}
            username={user.username}
            age={user.age}
            onDeleteUser={onDeleteUser}
          />
        </div>
      ))}
    </Card>
  );
};

export default UserList;
