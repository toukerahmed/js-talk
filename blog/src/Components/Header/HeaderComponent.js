import React, { memo } from "react";
import "./header.css";

const compare = (prevState, nextState) => {
  console.log("prev: ", prevState.title, " next: ", nextState.title);
  return prevState.title === nextState.title;
};

const HeaderComponent = (props) => {
  const { title, children } = props;
  console.log("render header");
  return (
    <div className="header">
      <h3 className="title">{title}</h3>
      {children}
    </div>
  );
};

export default memo(HeaderComponent, compare);
