import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ListGroupItem } from "reactstrap";

class UserItem extends Component {
  state = {};

  render() {
    const user = this.props.user;
    console.log(user.id, "status : ");
    console.log(user.presenceStore[user.id]);
    const selected =
      user.presenceStore[user.id] === "online" ? "warning" : "success";

    return (
      <ListGroupItem key={this.props.user.id} color={selected}>
        <a
          /* onClick={() => {
            this.props.ChatKitSubscribeRoom(
              this.props.chatkit_user,
              this.props.room.id
            );
          }} */
          href="#"
        >
          # {this.props.user.name}
        </a>
      </ListGroupItem>
    );
  }
}

UserItem.propTypes = {
  chatkit_user: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

/* to get state from redux we need to to map state to props */

const mapStateToProps = state => ({
  chatkit_user: state.chatkit.chatkit_user
});

export default connect(
  mapStateToProps,
  {}
)(UserItem);
