import { combineReducers } from "redux";
import postReducer from "./postReducer";
import chatkitReducer from "./chatkitReducer";

export default combineReducers({
  posts: postReducer,
  chatkit: chatkitReducer
});
