import { Header, Sidebar, Blogs } from "./Components";
import { BlogProvider } from "./context";
import "./App.css";

const App = () => {
  return (
    <BlogProvider>
      <Header title="Blog Header">
        <span className="sub-header">
          <i className="fa"> {"&"} </i> Sub Header
        </span>
      </Header>
      <div className="container-full-width">
        <Sidebar />
        <Blogs />
      </div>
    </BlogProvider>
  );
};

export default App;
