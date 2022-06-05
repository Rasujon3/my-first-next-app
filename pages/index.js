import React, { Component } from "react";
import Menu from "./menu";

export async function getStaticProps() {
  return {
    props: {
      API_KEY: process.env.API_KEY,
    },
  };
}

class index extends Component {
  render() {
    return (
      <div>
        <Menu />
        <h2>Index Page</h2>
        <h2>API KEY: {this.props.API_KEY}</h2>
      </div>
    );
  }
}

export default index;
