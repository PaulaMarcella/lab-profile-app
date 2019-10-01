import React, { Component } from "react";
import Form from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(event) {
    console.dir(event.target);
    const data = new window.FormData();
    data.append("image", event.taget.files);
  }
  render() {
    console.log(this.state);
    console.log(this.props);

    const user = this.state.user;

    return (
      <div>
        <h1>profile</h1>
        <p>username</p>

        <Form>
          <Form.Label>Upload Photo</Form.Label>
          <Form.Control type="file" name="image" onChange={this.onFileChange} />
          <Button>Edit Photo</Button>
        </Form>
      </div>
    );
  }
}
