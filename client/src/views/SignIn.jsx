import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signIn as signInService } from "../services/auth-api";

export default class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };

  onValueChange = event => {
    console.log(event);
    const name = event.target.name;
    const value =
      event.target.type === "number"
        ? event.target.valueAsNumber
        : event.target.value;
    this.setState({
      [name]: value
    });
  };

  signIn = event => {
    event.preventDefault();
    const { username, password } = this.state;
    signInService({ username, password })
      .then(user => {
        console.log(this.props);
        this.props.loadUser(user);
        this.props.history.push("/profile");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.signIn}>
            <Form.Group>
              <Form.Label htmlFor="sign-in-username">Username:</Form.Label>
              <Form.Control
                id="sign-in-username"
                placeholder="Username"
                type="text"
                name="username"
                onChange={this.onValueChange}
                value={this.state.username}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="sign-in-password">Password:</Form.Label>
              <Form.Control
                id="sign-in-password"
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.onValueChange}
                value={this.state.password}
              ></Form.Control>
            </Form.Group>
            <Button type="submit">Log In</Button>
          </Form>
        </Container>
      </div>
    );
  }
}
