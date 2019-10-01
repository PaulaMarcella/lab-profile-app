import React, { Component } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "./views/Home";
import ErrorView from "./views/Error";
import CatchAllView from "./views/CatchAll";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Navbar from "./components/Navbar";
import Profile from "./views/Profile";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.loadUser = this.loadUser.bind(this);
  }

  loadUser(user) {
    this.setState({
      user
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route
              path="/signup"
              render={props => (
                <SignUp {...props} exact loadUser={this.loadUser} />
              )}
            />
            <Route
              path="/signin"
              render={props => (
                <SignIn {...props} exact loadUser={this.loadUser} />
              )}
            />
            <Route
              path="/profile"
              render={props => (
                <Profile {...props} exact loadUser={this.loadUser} />
              )}
            />

            <Route path="/error/:code" component={ErrorView} />
            <Route path="/" component={CatchAllView} />
          </Switch>
        </Router>
      </div>
    );
  }
}
