import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeView extends Component {
  render() {
    return (
      <div>
        <h1>Nothing is working!</h1>
        <Link className="btn" to="/signup">
          Sign up
        </Link>
        <Link className="btn" to="/signin">
          Login up
        </Link>
      </div>
    );
  }
}
