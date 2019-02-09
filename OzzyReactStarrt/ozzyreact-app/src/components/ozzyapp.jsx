import React, { Component } from "react";

class Counter extends Component {
  /* Now we need to make controlled components - so no state */
  /* state = {
    value: this.props.counter.id,
    tags: ["tag1", "tag2", "tag3", "tag4"]
    //tags: []
  }; */ /* Property that enables any data the component may need */
  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("counter has updated");
    console.log("prev props", prevProps);
    console.log("prev state", prevState);
  }

  componentWillUnmount() {
    console.log("counter unmounted");
    /* goood cleanup oppurtunity */
  }
  /*   constructor() {
    super();
    this.handle_btnclick = this.handle_btnclick.bind(this);
  } */
  /* rendertags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags</p>;
    }
    return (
      <ul>
        <li>
          {" "}
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </li>
      </ul>
    );
  } */
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {this.props.children}
        <span style={this.styles} className={this.get_classes()}>
          {this.get_value()} {/* any valid js code here */}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          {" "}
          inc{" "}
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          {" "}
          del{" "}
        </button>
        {/* this.state.tags.length === 0 && "Please add a tag"}
        {this.rendertags() */}
      </React.Fragment>
    );
  }
  get_classes() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  get_value() {
    if (this.props.counter.value === 0) {
      return "Zero";
    }
    return this.props.counter.value;
  }

  handle_delbtnclick = prod => {
    console.log(prod);
    /* Event handlers do not have access to this - Put arrow so this is inherited */
    this.setState({ value: this.props.counter.value + 1 });
  };
}
export default Counter;
