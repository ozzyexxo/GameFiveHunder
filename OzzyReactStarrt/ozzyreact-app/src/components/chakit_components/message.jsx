import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ListGroupItem } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class Chatkit_message extends Component {
  state = {};

  render() {
    if (this.props.chatkit_user === null) {
      return <h1 />;
    }
    const select_color =
      this.props.chatkit_user.id !== this.props.msg.senderId
        ? "success"
        : "warning";
    return (
      <ListGroupItem>
        <Card color={select_color}>
          <CardBody>
            <CardTitle style={{ fontWeight: "bold", color: "blue" }}>
              {this.props.msg.senderId}
            </CardTitle>
            <CardText>{this.props.msg.text}</CardText>
          </CardBody>
        </Card>
      </ListGroupItem>
    );
  }
}

Chatkit_message.propTypes = {
  chatkit_user: PropTypes.object.isRequired
};

/* to get state from redux we need to to map state to props */

const mapStateToProps = state => ({
  chatkit_user: state.chatkit.chatkit_user
});

export default connect(
  mapStateToProps,
  {}
)(Chatkit_message);
