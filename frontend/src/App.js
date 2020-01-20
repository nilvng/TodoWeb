import React, { Component } from "react";
// import '../Style/App.css';
import { Router, Redirect } from "@reach/router";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFoundPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import FrontPage from "./Pages/FrontPage";
// let todoURL = "http://localhost:5000/todos"
// let userURL = "http://localhost:5000/users"
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authToken: ""
    };
  }
  logout = ()=>{
    this.setState({authToken: ''})
  }
  render() {
    const ProtectedRoute = ({ component: Component, ...rest }) =>
      this.state.authToken !== "" ? (
        <Component {...rest} />
      ) : (
        <Redirect from="" to="/" noThrow />
      );
    return (
      <div>
        {this.state.authToken ===''? '':<button className = 'btn btn-danger float-right' onClick = {this.logout}>Log Out</button>}
        <Router>
          <FrontPage path="/" />
          <LoginPage
            path="/login"
            receiveToken={authToken => this.setState({ authToken })}
          />
          <RegisterPage path="/register" />
          <ProtectedRoute
            path="/home"
            component={HomePage}
            authToken={this.state.authToken}
          />
          <NotFound default />
        </Router>
      </div>
    );
  }
}
