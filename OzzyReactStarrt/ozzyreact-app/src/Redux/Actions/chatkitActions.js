import {
  CHATKIT_NEW_MESSAGE,
  CHATKIT_GET_ROOMS,
  CHATKIT_SUBSCRIBE_ROOM,
  CHATKIT_CREATE_USER,
  CHATKIT_HANDLE_MESSAGE,
  CHATKIT_CLEAR_MESSAGES,
  CHATKIT_USER_CONNECT,
  CHATKIT_INIT
} from "../Actions/types";

export const ChatKitInit = (ChatKit, tokenUrl, instanceLocator) => dispatch => {
  dispatch({
    type: CHATKIT_INIT,
    payload: {
      chatkit: ChatKit,
      token_url: tokenUrl,
      instance_locator: instanceLocator
    }
  });
};

export const ChatKitConnectUser = (chatkit_params, user_name) => dispatch => {
  const chatManager = new chatkit_params.chatkit.ChatManager({
    instanceLocator: chatkit_params.instance_locator,
    userId: user_name,
    tokenProvider: new chatkit_params.chatkit.TokenProvider({
      url: chatkit_params.token_url
    })
  });
  dispatch(ChatKitCreateUser(null));
  chatManager.connect().then(currentUser => {
    dispatch(ChatKitCreateUser(currentUser));
    dispatch(ChatKitGetRooms(currentUser));
  });
};

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
