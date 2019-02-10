import { combineReducers } from "redux";
import postReducer from "./postReducer";
import chatkitReducer from "./chatkitReducer";
import cardGameReducer from "./cardGameReducer";

export default combineReducers({
  posts: postReducer,
  chatkit: chatkitReducer,
  cardgame: cardGameReducer
});
