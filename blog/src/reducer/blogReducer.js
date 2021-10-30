import {
  SELECTED_USER,
  FETCHED_BLOGS,
  FETCHED_USERS,
  UPDATE_FETCHED,
} from "../constant";

const BlogReducer = (state, action) => {
  switch (action.type) {
    case FETCHED_BLOGS: {
      const { payload } = action;
      return { ...state, blogList: payload };
    }
    case FETCHED_USERS: {
      const { payload } = action;
      return { ...state, users: payload };
    }
    case UPDATE_FETCHED: {
      const { fetched } = action;
      return { ...state, fetched };
    }
    case SELECTED_USER: {
      const { payload } = action;
      return { ...state, user: payload };
    }
    default:
      return state;
  }
};

export const initialBlogState = {
  blogList: [],
  users: [],
  user: null,
  fetched: false,
};

export default BlogReducer;
