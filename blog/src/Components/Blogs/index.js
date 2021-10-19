import React, { useEffect, useState } from "react";
import { POST_API_URL } from "../../constant";
import "./blog.css";

const Blogs = () => {
    const [blogList, setBlog] = useState([])
    

    const fetchPosts = async () => {
        return await fetch(POST_API_URL)
		.then((response) => response.json())
		.then((data) => data);
    }

    useEffect(() => {
       (async () => {
            const posts = await fetchPosts();
            setBlog(posts)
        })()
    },[])  
 

  return (
    <div className="container blog-container">

      {blogList.length === 0 && <div className="empty-title">Blog List Empty!</div>}

      {blogList.map((blog, index) => {
        return (
          <div className="blog-list" key={index}>
            <h1 className="title">{blog.title}</h1>
            <div className="content">
              <p>
                {blog.body}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
