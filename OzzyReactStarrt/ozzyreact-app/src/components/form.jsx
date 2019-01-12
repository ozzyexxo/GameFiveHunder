import React, { Component } from "react";

class Form extends Component {
  state = {
    FirstName: "",
    LastName: "",
    Age: "",
    gender: "male",
    location: ""
  };
  handleSubmit = () => {};
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <main>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            name={"FirstName"}
            placeholder="First Name"
            value={this.state.FirstName}
          />
          <br />
          <input
            type="text"
            onChange={this.handleChange}
            name={"LastName"}
            placeholder="Last Name"
            value={this.state.LastName}
          />
          <br />
          <input
            type="text"
            onChange={this.handleChange}
            name={"Age"}
            placeholder="Age"
            value={this.state.Age}
          />
          <br />

          {/* Create radio buttons for gender here */}
          <br />
          <label>
            <input
              type="radio"
              onChange={this.handleChange}
              name={"gender"}
              value="male"
              checked={this.state.gender === "male"}
            />{" "}
            Male
          </label>
          <br />

          <br />
          <label>
            <input
              type="radio"
              onChange={this.handleChange}
              name={"gender"}
              value="female"
              checked={this.state.gender === "female"}
            />{" "}
            Female
          </label>
          <br />

          {/* Create select box for location here */}
          <br />
          <select
            type="select"
            value={this.state.location}
            onChange={this.handleChange}
            name="location"
          >
            <option value={"lahore"}>Lahore</option>
            <option value={"Helsinki"}>Helsinki</option>
            <option value={"Turku"}>Turku</option>
            <option value={"Tampere"}>Tampere</option>
          </select>
          <br />
          {/* Create check boxes for dietary restrictions here */}
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.FirstName} {this.state.LastName}
        </p>
        <p>Your age: {this.state.Age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>
          Your dietary restrictions:
          {/* Dietary restrictions here, comma separated */}
        </p>
      </main>
    );
  }
}

export default Form;
