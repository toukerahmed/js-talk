import { combineReducers } from "redux";

import BlogReducer from "./blogReducer";
import UserReducer from "./userReducer";

export default combineReducers({
  blogStore: BlogReducer,
  userStore: UserReducer,
});
