import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ChatKitConnectUser } from "../../Redux/Actions/chatkitActions";

class NewUserForm extends Component {
  state = {
    new_user: "ozzy"
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log("Submit pressed text send: " + this.state.new_user);
    /* create a message here */
    this.props.ChatKitConnectUser(
      this.props.chatkit_params,
      this.state.new_user
    );
    this.setState({ new_user: "" });
  };
  get_chat_message_area() {
    const button_color =
      this.props.chatkit_user === null ? "btn btn-danger" : "btn btn-secondary";
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input
          type="text"
          onChange={this.handleChange}
          name={"new_user"}
          placeholder="Type user name"
          value={this.state.new_user}
        />
        <button className={button_color}>Connect</button>
      </form>
    );
  }

  render() {
    return this.get_chat_message_area();
  }
}
/* to get state from redux we need to to map state to props */
NewUserForm.propTypes = {
  ChatKitConnectUser: PropTypes.func.isRequired,
  chatkit_params: PropTypes.object.isRequired,
  chatkit_user: PropTypes.object.isRequired
};

/* to get state from redux we need to to map state to props */
const mapStateToProps = state => ({
  chatkit_params: state.chatkit.chatkit_params,
  chatkit_user: state.chatkit.chatkit_user
});

export default connect(
  mapStateToProps,
  { ChatKitConnectUser }
)(NewUserForm);
