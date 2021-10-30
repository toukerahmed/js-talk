import { Header, Sidebar, Blogs } from "./Components";
import { BlogProvider } from "./context";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("Blog Header");

  const changeHeader = () => {
    setTitle("New Header");
  };
  return (
    <BlogProvider>
      <Header title={title}>
        <span className="sub-header" onClick={changeHeader}>
          <i className="fa"> {"&"} </i> Sub Header
        </span>
      </Header>
      <div className="container-full-width">
        <Sidebar title={title} />
        <Blogs />
      </div>
    </BlogProvider>
  );
};

export default App;
