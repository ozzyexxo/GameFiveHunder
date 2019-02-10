import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ChatKitSubscribeRoom } from "../../Redux/Actions/chatkitActions";
import { ListGroupItem } from "reactstrap";

class RoomItem extends Component {
  state = {};
  render() {
    const selected =
      this.props.room.id === this.props.chatkit_current_room_id
        ? "warning"
        : "success";

    return (
      <ListGroupItem key={this.props.room.id} color={selected}>
        <a
          onClick={() => {
            this.props.ChatKitSubscribeRoom(
              this.props.chatkit_user,
              this.props.room.id
            );
          }}
          href="#"
        >
          # {this.props.room.name}
        </a>
      </ListGroupItem>
    );
  }
}

RoomItem.propTypes = {
  ChatKitSubscribeRoom: PropTypes.func.isRequired,
  chatkit_user: PropTypes.object.isRequired,
  chatkit_current_room_id: PropTypes.string.isRequired,
  room: PropTypes.object.isRequired
};

/* to get state from redux we need to to map state to props */

const mapStateToProps = state => ({
  chatkit_user: state.chatkit.chatkit_user,
  chatkit_current_room_id: state.chatkit.chatkit_current_room_id
});

export default connect(
  mapStateToProps,
  { ChatKitSubscribeRoom }
)(RoomItem);
