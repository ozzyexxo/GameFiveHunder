import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RoomItem from "./room_item";
import { ListGroup } from "reactstrap";

class RoomList extends Component {
  state = {};

  get_room_list() {
    const chat_rooms = [
      ...this.props.chatkit_joinable_rooms,
      ...this.props.chatkit_joined_rooms
    ];
    return (
      <div>
        <ListGroup>
          <h3>Room List</h3>
          {chat_rooms.map(room => {
            return <RoomItem key={room.id} room={room} />;
          })}
        </ListGroup>
      </div>
    );
  }
  render() {
    return this.get_room_list();
  }
}
RoomList.propTypes = {
  chatkit_joinable_rooms: PropTypes.array.isRequired,
  chatkit_joined_rooms: PropTypes.array.isRequired
};

/* to get state from redux we need to to map state to props */

const mapStateToProps = state => ({
  chatkit_joinable_rooms: state.chatkit.chatkit_joinable_rooms,
  chatkit_joined_rooms: state.chatkit.chatkit_joined_rooms
});

export default connect(
  mapStateToProps,
  {}
)(RoomList);
