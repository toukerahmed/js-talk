import React, { useContext } from "react";
import { BlogContext } from "../../context";

const Sidebar = () => {
  const {
    users,
    fetched,
    selectUser,
    user: userProps,
  } = useContext(BlogContext);

  const onSelectUser = (user) => (event) => {
    selectUser(user);
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className={userProps === null ? "selected" : ""}>All</li>
        {fetched &&
          users.map((user) => {
            const selectedClass =
              userProps && userProps.id === user.id ? "selected" : "";
            return (
              <li
                key={user.id}
                className={selectedClass}
                onClick={onSelectUser(user)}
              >
                {user.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
