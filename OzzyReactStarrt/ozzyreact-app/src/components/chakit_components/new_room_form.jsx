import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  ChatKitSendMessage,
  ChatKitCreateRoom
} from "../../Redux/Actions/chatkitActions";

class NewRoomForm extends Component {
  state = {
    chatroom_name: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log("Submit pressed text send: " + this.state.chat_msg);
    /* create a message here */
    this.props.ChatKitCreateRoom(
      this.props.chatkit_user,
      this.state.chatroom_name,
      true
    );
    this.setState({ chatroom_name: "" });
  };
  get_room_name_area() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input
          type="text"
          onChange={this.handleChange}
          name={"chatroom_name"}
          placeholder="Type room name"
          value={this.state.chatroom_name}
        />
        <button>Create</button>
      </form>
    );
  }

  render() {
    return this.get_room_name_area();
  }
}
/* to get state from redux we need to to map state to props */
NewRoomForm.propTypes = {
  ChatKitSendMessage: PropTypes.func.isRequired,
  ChatKitCreateRoom: PropTypes.func.isRequired,
  chatkit_user: PropTypes.object.isRequired,
  chatkit_current_room_id: PropTypes.string.isRequired
};

/* to get state from redux we need to to map state to props */
const mapStateToProps = state => ({
  chatkit_user: state.chatkit.chatkit_user,
  chatkit_current_room_id: state.chatkit.chatkit_current_room_id
});

export default connect(
  mapStateToProps,
  { ChatKitSendMessage, ChatKitCreateRoom }
)(NewRoomForm);
