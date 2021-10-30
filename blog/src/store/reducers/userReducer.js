import { SELECTED_USER, FETCHED_USERS, UPDATE_FETCHED } from "../../constant";

const initialState = {
  users: [],
  user: null,
  fetched: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default UserReducer;
