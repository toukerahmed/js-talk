import React from 'react'; 

const UserBio = (props) => {
    const { user } = props
    return (
        <div className="user-bio">
            <span> <strong>User Name:</strong> {user.name}</span>
            <span> <strong>Phone:</strong> {user.phone}</span>
            <span> <strong>Email:</strong> {user.email}</span>
          </div>
    )
}

export default UserBio;