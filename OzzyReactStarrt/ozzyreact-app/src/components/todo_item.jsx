import React, { Component } from "react";

class TodoItem extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className="form-group">
        <input
          className="form-control"
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.props.onChange(this.props.item)}
        />
        <p>{this.props.item.text}</p>
      </div>
    );
  }
}

export default TodoItem;
