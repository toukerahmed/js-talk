import React from "react";
import { useState, useEffect } from "react";
import { POST_API_URL, USER_API_URL } from "../constant";
import { fetchApi } from "../actions/fetchApi";
import BlogContext from "./BlogContext";

const BlogProvider = (props) => {
  const [blogList, setBlog] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [fetched, setFetch] = useState(false);

  /**
   * Fetch users and blogs asyn
   */
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

  /**
   * Check if users and blogList fetched, then we set fetched = true
   */
  useEffect(() => {
    if (users.length && blogList.length && fetched === false) {
      setFetch(true);
    }
  }, [users, blogList, fetched]);

  /**
   * If fetched is equal true then mapping blogs with their user
   */
  useEffect(() => {
    if (blogList.length) {
      const _withUser = blogList.map((blog) => {
        const _user = users.find((u) => u.id === blog.userId);
        return { ...blog, user: _user };
      });
      setBlog(_withUser);
    }
  }, [fetched]);

  /**
   * Select current user and set in state
   * @param {object} _user
   */
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
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
