import React, { Component } from "react";
import Menu from "./menu";

class about extends Component {
  static getInitialProps({ query }) {
    return { query };
  }
  render() {
    return (
      <div>
        <Menu />
        <h2>About Page {JSON.stringify(this.props.query)} </h2>
      </div>
    );
  }
}

export default about;
