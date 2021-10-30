import React, { useEffect, useReducer } from "react";
import { FETCHED_BLOGS, FETCHED_USERS, UPDATE_FETCHED } from "../constant";
import { BlogReducer, initialBlogState } from "../reducer";

import { POST_API_URL, USER_API_URL } from "../constant";
import { fetchApi } from "../actions/fetchApi";
import BlogContext from "./BlogContext";

const BlogProvider = (props) => {
  const [state, dispatch] = useReducer(BlogReducer, initialBlogState);

  const { blogList, fetched, users, user } = state;

  /**
   * Fetch users and blogs asyn
   */
  useEffect(() => {
    fetchApi(POST_API_URL).then((res) => {
      dispatch({ type: FETCHED_BLOGS, payload: res });
    });
    fetchApi(USER_API_URL).then((res) => {
      dispatch({ type: FETCHED_USERS, payload: res });
    });
  }, []);

  /**
   * Check if users and blogList fetched, then we set fetched = true
   */
  useEffect(() => {
    if (users.length && blogList.length && fetched === false) {
      dispatch({ type: UPDATE_FETCHED, fetched: true });
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
      dispatch({ type: FETCHED_BLOGS, payload: _withUser });
    }
  }, [fetched]);

  return (
    <BlogContext.Provider
      value={{
        blogs: blogList,
        users,
        fetched,
        user,
        dispatch,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
