import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  ChatKitNewMessage,
  ChatKitGetRooms,
  ChatKitCreateUser,
  ChatKitSubscribeRoom
} from "../Redux/Actions/chatkitActions";
import RoomList from "./chakit_components/room_list";
import MessageList from "./chakit_components/message_list";
import SendMessageForm from "./chakit_components/send_message_form";
import NewRoomForm from "./chakit_components/new_room_form";
import Chatkit from "@pusher/chatkit-client";
import { tokenUrl, instanceLocator } from "./chakit_components/chatkit_config";

class ReduxChatKit extends Component {
  state = {};
  chat_kit_user;

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: "Emzzi",
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });

    chatManager.connect().then(currentUser => {
      this.props.ChatKitCreateUser(currentUser);

      this.props.ChatKitGetRooms(currentUser);
      this.props.ChatKitSubscribeRoom(currentUser, "19380118");
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            <RoomList />
          </div>
          <div className="col-9">
            <MessageList />
          </div>
        </div>
        <div className="row align-items-end">
          <div className="col">
            <NewRoomForm />
          </div>
          <div className="col-9">
            <SendMessageForm />
          </div>
        </div>
      </div>
    );
  }
}
ReduxChatKit.propTypes = {
  ChatKitNewMessage: PropTypes.func.isRequired,
  ChatKitGetRooms: PropTypes.func.isRequired,
  ChatKitCreateUser: PropTypes.func.isRequired,
  ChatKitSubscribeRoom: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    ChatKitNewMessage,
    ChatKitGetRooms,
    ChatKitCreateUser,
    ChatKitSubscribeRoom
  }
)(ReduxChatKit);
