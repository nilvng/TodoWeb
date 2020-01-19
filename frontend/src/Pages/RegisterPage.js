import React, { Component } from "react";
import Register from "../Components/forms/Register";
import { Link,navigate } from "@reach/router";
import Axios from 'axios'
import ErrorMsg from "../Components/forms/errorMsg";
// let userURL = "http://localhost:5000/users"
let userURL = '/users'
export default class RegisterPage extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       msg: ''
    }
  }
  

  registerUser = ( {username, password, confirmPass }) => {
    if (password !== confirmPass){
      this.setState({msg: "passwords don't match"})
    }else{
    Axios
      .post(userURL + "/signup",{username,password})
      .then(res => navigate('/login') )
      .catch(err => this.setState({msg: err.response.data}))
    }
  }

  render() {
    return (
      <div className="d-flex flex-column text-center">
        <h3 className="font-weight-normal">
          Create an account
        </h3>
        { this.state.msg !== '' && ErrorMsg(this.state.msg) }
        <Register registerUser={this.registerUser} />
        <Link to="/login" >
          Already have an account?
        </Link>
      </div>
    );
  }
}
