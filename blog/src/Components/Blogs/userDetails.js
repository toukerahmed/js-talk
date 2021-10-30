import React from "react";
import { useSelector } from "react-redux";

import UserBio from "./userBio";

const UserDetails = () => {
  const user = useSelector((store) => store.userStore.user);
  return (
    <div className="user-information">{user && <UserBio user={user} />}</div>
  );
};

export default UserDetails;
