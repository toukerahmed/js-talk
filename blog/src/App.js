import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_FETCHED, FETCHED_BLOGS } from "./constant";
import { fetchBlogs, fetchUsers } from "./actions";
import { Header, Sidebar, Blogs } from "./Components";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const { fetched, users, blogList } = useSelector((store) => {
    return {
      users: store.userStore.users,
      fetched: store.userStore.fetched,
      blogList: store.blogStore.blogList,
    };
  });

  useEffect(() => {
    dispatch(fetchBlogs());
    dispatch(fetchUsers());
  }, [dispatch]);

  /**
   * Check if users and blogList fetched, then we set fetched = true
   */
  useEffect(() => {
    if (users.length && blogList.length && fetched === false) {
      dispatch({ type: UPDATE_FETCHED, fetched: true });
    }
  }, [users, blogList, fetched, dispatch]);

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
  }, [fetched, dispatch]);

  return (
    <>
      <Header title="Blog Header">
        <span className="sub-header">
          <i className="fa"> {"&"} </i> Sub Header
        </span>
      </Header>
      <div className="container-full-width">
        <Sidebar />
        <Blogs />
      </div>
    </>
  );
};

export default App;
