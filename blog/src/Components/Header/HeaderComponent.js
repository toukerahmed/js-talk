import React from "react";
import "./header.css";

const HeaderComponent = (props) => {
  const { title, children } = props;
  return (
    <div className="header">
      <h3 className="title">{title}</h3>
      {children}
    </div>
  );
};

export default HeaderComponent;
