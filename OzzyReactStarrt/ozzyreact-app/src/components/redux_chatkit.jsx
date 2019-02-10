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
import UsersList from "./chakit_components/online_users_list";
import MessageList from "./chakit_components/message_list";
import SendMessageForm from "./chakit_components/send_message_form";
import NewRoomForm from "./chakit_components/new_room_form";
import Chatkit from "@pusher/chatkit-client";
import { tokenUrl, instanceLocator } from "./chakit_components/chatkit_config";
import NewUserForm from "./chakit_components/new_user_form";
import { ChatKitInit } from "./../Redux/Actions/chatkitActions";

class ReduxChatKit extends Component {
  state = {};
  chat_kit_user;

  componentDidMount() {
    const chatkit = Chatkit;
    this.props.ChatKitInit(chatkit, tokenUrl, instanceLocator);
  }

  render() {
    return (
      <div className="container">
        <div className="row align-items-start">
          <div className="col-12">
            <NewUserForm />
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col">
            <div className="row align-items-start">
              <RoomList />
            </div>
            <div className="row align-items-end">
              <UsersList />
            </div>
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
  ChatKitSubscribeRoom: PropTypes.func.isRequired,
  ChatKitInit: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    ChatKitNewMessage,
    ChatKitGetRooms,
    ChatKitCreateUser,
    ChatKitSubscribeRoom,
    ChatKitInit
  }
)(ReduxChatKit);
