import React, { Component } from "react";
import Axios from 'axios'
import Login from "../Components/forms/Login";
import { Link,navigate } from "@reach/router";
import ErrorMsg from "../Components/forms/errorMsg";
// let userURL = "http://localhost:5000/users"
let userURL = "/users"
export default class LoginPage extends Component {
constructor(props) {
  super(props)

  this.state = {
     msg: ''
  }
}


  loginUser = (user) => {
    Axios
    .post(userURL + "/signin",user)
    .then(res => {
      this.props.receiveToken(res.headers.authtoken)
      navigate("/home")
    })
    .catch(err => {if (err.response) this.setState({msg: err.response.data})})
  }

  render() {
    return (
      <div className="d-flex flex-column text-center">
        <h3 className="font-weight-normal" >
          Welcome back! please sign in
        </h3>
        { this.state.msg !== '' && ErrorMsg(this.state.msg) }
        <Login loginUser = {this.loginUser}/>
        <Link to="/register">
          Register for an account?
        </Link>
      </div>
    );
  }
}
