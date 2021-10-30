import { FETCHED_BLOGS } from "../../constant";

const initialBlogState = {
  blogList: [],
  fetched: false,
};

const BlogReducer = (state = initialBlogState, action) => {
  switch (action.type) {
    case FETCHED_BLOGS: {
      const { payload } = action;
      return { ...state, blogList: payload };
    }
    default:
      return state;
  }
};

export default BlogReducer;
