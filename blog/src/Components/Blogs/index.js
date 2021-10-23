import React, { useEffect, useState } from "react";
import { POST_API_URL, USER_API_URL } from "../../constant";
import Item from "./item";
import { fetchApi  } from "../../actions/fetchApi";
import { filterBlogByUser } from "../../utils";
import UserDetails from "./userDetails";
import "./blog.css";

const Blogs = () => {
    const [blogList, setBlog] = useState([])
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    const [fetched, setFetch] = useState(false);
    
    useEffect(() => {
        fetchApi(POST_API_URL).then( res => {
          setBlog(res);
        })
        fetchApi(USER_API_URL).then( res => {
          setUsers(res);
        }); 
    },[]) 

    useEffect(() => {
      if(users.length && blogList.length && fetched === false) {
        setFetch(true);
      }
    },[users, blogList, fetched])

    useEffect(() => {
      if (blogList.length) {
        const _withUser = blogList.map( blog => {
          const _user = users.find( u => u.id === blog.userId);
          return {...blog, user: _user}
        })
        setBlog(_withUser)
      }
    },[fetched])

    const onChangeHandler = (event) => {
      const value = event.target.value;
      if (value === '-1') {
        setUser(null);
      } else { 
        const _user = users.find( item => item.id === Number(value));
        setUser(_user);
      }
    }

    let _blogList = filterBlogByUser(user, blogList)
    
  return (
    <div className="container">
      <UserDetails onChangeUser={onChangeHandler} users={users} user={user} />
      <div className="blog-container">
        {blogList.length === 0 && <div className="empty-title">Blog List Empty!</div>}
        {_blogList.map((blog, index) => {
          return <Item blog={blog} key={index}/>;
        })}
      </div>
    </div>
  );
};

export default Blogs;
