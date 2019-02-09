import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../Redux/Actions/postActions";

class ReduxForm extends Component {
  state = {
    title: "",
    body: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);

    /*
    fetch("https://jsonplaceholder.typicode.com/posts", {
      /* This is an additinla parameter for spefiying method */
    /*       method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data)); */
  };

  get_form() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input
          type="text"
          onChange={this.handleChange}
          name={"title"}
          placeholder="Title"
          value={this.state.title}
        />
        <br />
        <textarea
          type="textarea"
          onChange={this.handleChange}
          name={"body"}
          placeholder="Body"
        />
        <br />
        <button>Submit</button>
      </form>
    );
  }

  render() {
    return this.get_form();
  }
}

ReduxForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(ReduxForm);
