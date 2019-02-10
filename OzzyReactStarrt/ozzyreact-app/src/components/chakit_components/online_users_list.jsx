import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserItem from "./user_item";
import { ListGroup } from "reactstrap";

class UsersList extends Component {
  state = {};

  users = [];
  componentWillReceiveProps(nextprops) {
    if (nextprops.chatkit_user) {
      this.users = Object.values(nextprops.chatkit_user.userStore.users);
    }
    console.log("Why not receive props ???");
  }
  get_users_list() {
    console.log(this.users);
    return (
      <div>
        <ListGroup>
          <h3>User List</h3>
          {this.users.map(user => {
            return <UserItem key={user.id} user={user} />;
          })}
        </ListGroup>
      </div>
    );
  }
  render() {
    console.log("Why not render ???");
    return this.get_users_list();
  }
}
UsersList.propTypes = {
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
  {}
)(UsersList);
