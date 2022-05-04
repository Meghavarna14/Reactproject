import React, { Component } from "react";
import axios from "axios";
class PostData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault(); //to avoid refresh
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div align="center">
        <form onSubmit={this.submitHandler}>
          <div>
            <br />
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            ></input>
          </div>
          <br />
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            ></input>
          </div>
          <br />
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            ></input>
          </div>
          <br />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}
export default PostData;
