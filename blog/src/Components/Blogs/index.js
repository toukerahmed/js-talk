import React from "react";
import { useSelector } from "react-redux";
import Item from "./item";
import { filterBlogByUser } from "../../utils";
import UserDetails from "./userDetails";
import "./blog.css";

const Blogs = () => {
  const { fetched, user, blogList } = useSelector((store) => {
    return {
      user: store.userStore.user,
      fetched: store.userStore.fetched,
      blogList: store.blogStore.blogList,
    };
  });

  let _blogList = filterBlogByUser(user, blogList);

  if (!fetched) {
    return <div className="loader">loading...</div>;
  }

  return (
    <div className="container">
      <UserDetails />
      <div className="blog-container">
        {blogList.length === 0 && (
          <div className="empty-title">Blog List Empty!</div>
        )}
        {_blogList.map((blog, index) => {
          return <Item blog={blog} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
