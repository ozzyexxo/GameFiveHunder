import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Chatkit_message from "./message";

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        {this.props.chatkit_messages.map((message, index) => {
          return <Chatkit_message key={index} msg={message} />;
        })}
      </div>
    );
  }
}

MessageList.propTypes = {
  chatkit_messages: PropTypes.array.isRequired
};

/* to get state from redux we need to to map state to props */

const mapStateToProps = state => ({
  chatkit_messages: state.chatkit.chatkit_messages
});

export default connect(
  mapStateToProps,
  {}
)(MessageList);
