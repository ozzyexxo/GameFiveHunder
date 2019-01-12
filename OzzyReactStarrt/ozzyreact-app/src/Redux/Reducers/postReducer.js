import { FETCH_POSTS, NEW_POST } from "../Actions/types";

const initialState = {
  items: [],
  custom_item_list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("action reponse dispatched to reducer");
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      let new_item_list = [...state.custom_item_list];
      new_item_list.unshift(action.payload);
      return {
        ...state,
        custom_item_list: new_item_list /* THis is one single post */
      };
    default:
      return state;
  }
}
