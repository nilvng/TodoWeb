import React, { Component } from "react";
import { FaUserPlus } from "react-icons/fa";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirmPass: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.registerUser(this.state);
  };

  render() {
    return (
      <div style={{ width: "30rem" }} className="mx-auto">
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
            required
            autoFocus
          />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
            required
          />
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            name="confirmPass"
            value={this.state.confirmPass}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
            required
          />
          <button
            className="btn btn-primary btn-block mb-4 mt-3"
            type="submit"
          >
            <FaUserPlus /> Register
          </button>
        </form>
      </div>
    );
  }
}
