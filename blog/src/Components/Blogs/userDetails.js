import React, { useContext } from "react";
import { BlogContext } from "../../context";
import UserBio from "./userBio";

const UserDetails = () => {
  const { user } = useContext(BlogContext);
  return (
    <div className="user-information">{user && <UserBio user={user} />}</div>
  );
};

export default UserDetails;
