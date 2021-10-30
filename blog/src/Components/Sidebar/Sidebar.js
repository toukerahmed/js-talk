import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SELECTED_USER } from "../../constant";

const Sidebar = () => {
  const dispatch = useDispatch();

  const {
    users,
    fetched,
    user: userProps,
  } = useSelector((store) => {
    return {
      users: store.userStore.users,
      fetched: store.userStore.fetched,
      user: store.userStore.user,
    };
  });

  const onSelectUser = (user) => (event) => {
    dispatch({ type: SELECTED_USER, payload: user });
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
