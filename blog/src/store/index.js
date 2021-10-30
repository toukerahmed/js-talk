import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Reducers from "./reducers";

const middlewares = applyMiddleware(thunkMiddleware);
const enhancers = [middlewares];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(Reducers, undefined, composedEnhancers);

export default store;
