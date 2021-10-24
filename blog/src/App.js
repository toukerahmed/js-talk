import { useState, useEffect } from "react";
import { POST_API_URL, USER_API_URL } from "./constant";
import { fetchApi } from "./actions/fetchApi";

import { Header, Sidebar, Blogs } from "./Components";
import { BlogContext } from "./context";
import "./App.css";

const App = () => {
  const [blogList, setBlog] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [fetched, setFetch] = useState(false);

  useEffect(() => {
    fetchApi(POST_API_URL).then((res) => {
      setBlog(res);
    });
    fetchApi(USER_API_URL).then((res) => {
      setTimeout(() => {
        setUsers(res);
      }, 1000);
    });
  }, []);

  useEffect(() => {
    if (users.length && blogList.length && fetched === false) {
      setFetch(true);
    }
  }, [users, blogList, fetched]);

  useEffect(() => {
    if (blogList.length) {
      const _withUser = blogList.map((blog) => {
        const _user = users.find((u) => u.id === blog.userId);
        return { ...blog, user: _user };
      });
      setBlog(_withUser);
    }
  }, [fetched]);

  const onSelectUser = (_user) => {
    setUser(_user);
  };

  return (
    <BlogContext.Provider
      value={{
        blogs: blogList,
        users,
        fetched,
        user,
        selectUser: onSelectUser,
      }}
    >
      <Header title="Blog Header" />
      <div className="container-full-width">
        <Sidebar />
        <Blogs />
      </div>
    </BlogContext.Provider>
  );
};

export default App;
