import { fetchApi } from "./fetchApi";
import {
  POST_API_URL,
  USER_API_URL,
  FETCHED_BLOGS,
  FETCHED_USERS,
} from "../constant";

export const fetchBlogs = () => async (dispatch) => {
  const res = await fetchApi(POST_API_URL);
  dispatch({ type: FETCHED_BLOGS, payload: res });
};

export const fetchUsers = () => async (dispatch) => {
  const res = await fetchApi(USER_API_URL);
  dispatch({ type: FETCHED_USERS, payload: res });
};
