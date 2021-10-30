import React, { useContext } from "react";
import { BlogContext } from "../../context";
import { SELECTED_USER } from "../../constant";

const Sidebar = ({ title }) => {
  const { users, fetched, user: userProps, dispatch } = useContext(BlogContext);

  const onSelectUser = (user) => (event) => {
    dispatch({ type: SELECTED_USER, payload: user });
  };

  console.log("rendered sidebar");

  return (
    <div className="sidebar">
      <h4>{title}</h4>
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
