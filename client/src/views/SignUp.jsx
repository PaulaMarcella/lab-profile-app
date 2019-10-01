import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { signUp as signUpService } from "../services/auth-api";

export default class SignUp extends Component {
  state = {
    username: "",
    password: "",
    campus: "",
    course: "",
    courseOptions: ["WebDev", "UX/UI", "Data Analytics"],
    campusOptions: [
      "Madrid",
      "Barcelona",
      "Miami",
      "Paris",
      "Berlin",
      "Amsterdam",
      "México",
      "Sao Paulo"
    ]
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

  signUp = event => {
    event.preventDefault();
    const { username, password, campus, course } = this.state;
    signUpService({ username, password, campus, course })
      .then(user => {
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
          <Form onSubmit={this.signUp}>
            <Form.Group>
              <Form.Label htmlFor="sign-up-username">Username: </Form.Label>
              <Form.Control
                placeholder="Username"
                type="text"
                name="username"
                id="sign-up-username"
                onChange={this.onValueChange}
                value={this.state.username}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="sign-up-password">Password: </Form.Label>
              <Form.Control
                placeholder="password"
                type="password"
                name="password"
                id="sign-up-password"
                onChange={this.onValueChange}
                value={this.state.password}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="sign-up-campus">Campus: </Form.Label>
              <Form.Control
                as="select"
                placeholder="Choose a Campus"
                type="text"
                name="campus"
                id="sign-up-campus"
                onChange={this.onValueChange}
                value={this.state.campus}
              >
                {this.state.campusOptions.map(campus => (
                  <option key={campus} value={campus}>
                    {campus}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="sign-up-course">Course: </Form.Label>
              <Form.Control
                as="select"
                placeholder="Choose a Course"
                type="text"
                name="course"
                id="sign-up-course"
                onChange={this.onValueChange}
                value={this.state.course}
              >
                {this.state.courseOptions.map(course => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Button type="submit">Sign Up</Button>
          </Form>
        </Container>
      </div>
    );
  }
}
