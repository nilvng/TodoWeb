import React, { Component } from "react";
import { Link } from "@reach/router";
import Background from "./todoBG.jpg";
// import '../../src/FrontPage.css'
export default class FrontPage extends Component {
  render() {
    return (
      <div style={imageStyle}>
        <div className="text-light" style={textStyle}>
          <h3>Here's your favorite Todo Website amirite?</h3>
          <p>my first website ever *padding myself*</p>
          <Link className="btn btn-primary mx-1" to="/register">
            Register
          </Link>
          <Link className="btn btn-outline-primary mx-1" to="/login">
            Log in
          </Link>
        </div>
      </div>
    );
  }
}
const textStyle = {
  position: "absolute",
  left: "0",
  top: "30%",
  width: "100%",
  textAlign: "center"
};
const imageStyle = {
  backgroundImage: `url(https://wallpaperaccess.com/full/660691.jpg)`,
  position: "fixed",
  zIndex: "0",
  top: "0px",
  left: "0px",
  right: "0px",
  bottom: "0px",
  padding: "0px",
  margin: "0px",
  borderStyle: "none",
  borderWidth: "0px",
  backgroundSize: "cover",
  overflow: "hidden",
  backgroundRepeat: "no-repeat",
  backgroundSttachment: "fixed",
  backgroundClip: "content-box",
  backgroundOrigin: "border-box"
};
