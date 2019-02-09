import {
  CHATKIT_CREATE_USER,
  CHATKIT_GET_ROOMS,
  CHATKIT_SUBSCRIBE_ROOM,
  CHATKIT_HANDLE_MESSAGE,
  CHATKIT_CLEAR_MESSAGES
} from "../Actions/types";

const initialState = {
  chatkit_user: null,
  chatkit_messages: [],
  chatkit_current_room_id: "",
  chatkit_joinable_rooms: [],
  chatkit_joined_rooms: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHATKIT_CREATE_USER:
      return {
        ...state,
        chatkit_user: action.payload
      };
    case CHATKIT_HANDLE_MESSAGE:
      let message_list = [...state.chatkit_messages, action.payload];
      return {
        ...state,
        chatkit_messages: message_list
      };

    case CHATKIT_GET_ROOMS:
      return {
        ...state,
        chatkit_joinable_rooms: action.payload.joinable_rooms,
        chatkit_joined_rooms: action.payload.joined_rooms
      };

    case CHATKIT_SUBSCRIBE_ROOM:
      return {
        ...state,
        chatkit_current_room_id: action.payload
      };

    case CHATKIT_CLEAR_MESSAGES:
      return {
        ...state,
        chatkit_messages: []
      };

    default:
      return state;
  }
}
