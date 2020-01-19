import React, { Component } from "react";
import { FaSignInAlt } from "react-icons/fa";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
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
          <button className="btn btn-success btn-block mb-4 mt-3" type="submit">
            <FaSignInAlt /> Login
          </button>
        </form>
      </div>
    );
  }
}
