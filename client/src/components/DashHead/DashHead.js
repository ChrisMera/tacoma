import React, { Component } from "react";

import "./DashHead.css";

class DashHead extends Component {
  state = {
    name: ""
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getBook(this.props.match.params.id)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <p className="user">
        Welcome User
      </p>
    );
  }
}

export default DashHead;
