import React from 'react'; 
import UserBio from "./userBio";

const UserDetails = (props) => {
    const { users, user, onChangeUser } = props;
    return (
        <div className="user-information">
        <div className="user-list">
          <span className="user-label">Users: </span>
          <select name="user" onChange={onChangeUser}>
            <option key={0} value="-1">All</option>
            {users.map( user => {
              return <option key={user.id} value={user.id}>{user.name}</option>
            })}
          </select>
        </div>

        {user &&  <UserBio user={user}/>}

      </div>
    )
}

export default UserDetails;