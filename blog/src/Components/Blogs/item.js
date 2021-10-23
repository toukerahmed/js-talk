import React from "react";

const Item = (props) => {
    const { blog: { title, body, user = {} } } = props
  return (
    <div className="blog-list">
      <h1 className="title">{title}</h1>
      <div className="content">
        <p>{body}</p>
      </div>
      <div className="meta-data">
          <span> <strong>Author: </strong> {user?.name}</span>
          <span> <strong>Company: </strong> {user?.company?.name}</span>
      </div>
    </div>
  );
};

export default Item;