import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Chatkit_message from "./message";
import { ListGroup } from "reactstrap";
class MessageList extends Component {
  render() {
    const scrollclass = {
      height: "600px",
      overflowY: "scroll"
    };
    /* max-height="300px" margin-bottom="10px" overflow="scroll" */
    return (
      <div style={scrollclass}>
        <ListGroup>
          {this.props.chatkit_messages.map((message, index) => {
            return <Chatkit_message key={index} msg={message} />;
          })}
        </ListGroup>
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
