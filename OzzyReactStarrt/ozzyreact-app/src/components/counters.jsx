import React, { Component } from "react";
import Counter from "./ozzyapp";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button className="btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h1>Counter # {counter.id}</h1>{" "}
            {/* this becomes children in the porps property of component */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
