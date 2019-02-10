import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ChatKitSendMessage } from "../../Redux/Actions/chatkitActions";

class SendMessageForm extends Component {
  state = {
    chat_msg: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log("Submit pressed text send: " + this.state.chat_msg);
    /* create a message here */
    this.props.ChatKitSendMessage(
      this.props.chatkit_user,
      this.props.chatkit_current_room_id,
      this.state.chat_msg
    );
    this.setState({ chat_msg: "" });
  };
  get_chat_message_area() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input
          type="text"
          onChange={this.handleChange}
          name={"chat_msg"}
          placeholder="Type the text message here"
          value={this.state.chat_msg}
        />
        <button className="btn btn-secondary">Send</button>
      </form>
    );
  }

  render() {
    return this.get_chat_message_area();
  }
}
/* to get state from redux we need to to map state to props */
SendMessageForm.propTypes = {
  ChatKitSendMessage: PropTypes.func.isRequired,
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
  { ChatKitSendMessage }
)(SendMessageForm);
