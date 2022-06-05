import React, { Component } from "react";

export async function getServerSideProps() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const json = await res.json();
  return {
    props: { countryList: JSON.stringify(json) },
  };
}

class index extends Component {
  render() {
    return <div>{this.props.countryList}</div>;
  }
}

export default index;
