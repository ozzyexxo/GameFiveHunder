import {
  CHATKIT_NEW_MESSAGE,
  CHATKIT_GET_ROOMS,
  CHATKIT_SUBSCRIBE_ROOM,
  CHATKIT_CREATE_USER,
  CHATKIT_HANDLE_MESSAGE,
  CHATKIT_CLEAR_MESSAGES
} from "../Actions/types";

export const ChatKitCreateUser = chatkit_user => dispatch => {
  dispatch({
    type: CHATKIT_CREATE_USER,
    payload: chatkit_user
  });
};

export const ChatKitNewMessage = chatkit_new_message => dispatch => {
  dispatch({
    type: CHATKIT_NEW_MESSAGE,
    payload: chatkit_new_message
  });
};

export const ChatKitSendMessage = (
  chatkit_user,
  chatkit_room_id,
  chatkit_send_message
) => dispatch => {
  chatkit_user.sendMessage({
    text: chatkit_send_message,
    roomId: chatkit_room_id
  });
};

export const ChatKitGetRooms = chatkit_user => dispatch => {
  chatkit_user.getJoinableRooms().then(joinableRooms => {
    const room_info = {
      joinable_rooms: joinableRooms,
      joined_rooms: chatkit_user.rooms
    };
    dispatch({
      type: CHATKIT_GET_ROOMS,
      payload: room_info
    });
  });
};

export const ChatKitSubscribeRoom = (
  chatkit_user,
  chatkit_room_id
) => dispatch => {
  dispatch(ChatKitClearMessages());

  chatkit_user
    .subscribeToRoom({
      roomId: chatkit_room_id,
      hooks: {
        onMessage: message => dispatch(ChatKitHandleMessage(message))
      }
    })
    .then(room => {
      dispatch({
        type: CHATKIT_SUBSCRIBE_ROOM,
        payload: room.id
      });

      dispatch(ChatKitGetRooms(chatkit_user));
    })
    .catch(err => console.log("error on subscribing to room: ", err));
};

export const ChatKitHandleMessage = chatkit_message => dispatch => {
  dispatch({
    type: CHATKIT_HANDLE_MESSAGE,
    payload: chatkit_message
  });
};

export const ChatKitCreateRoom = (
  chatkit_user,
  chatkit_room_name,
  if_subscribe
) => dispatch => {
  chatkit_user
    .createRoom({
      name: chatkit_room_name
    })
    .then(room =>
      if_subscribe ? dispatch(ChatKitSubscribeRoom(chatkit_user, room.id)) : {}
    )
    .catch(err => console.log("error with createRoom: ", err));
};

export const ChatKitClearMessages = () => dispatch => {
  dispatch({
    type: CHATKIT_CLEAR_MESSAGES,
    payload: null
  });
};
