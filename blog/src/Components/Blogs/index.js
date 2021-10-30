import React, { useContext } from "react";
import { BlogContext } from "../../context";
import Item from "./item";
import { filterBlogByUser } from "../../utils";
import UserDetails from "./userDetails";
import "./blog.css";

const Blogs = () => {
  const { blogs: blogList, fetched, user } = useContext(BlogContext);

  let _blogList = filterBlogByUser(user, blogList);

  if (!fetched) {
    return <div className="loader">loading...</div>;
  }
  console.log("rendered blog");
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
