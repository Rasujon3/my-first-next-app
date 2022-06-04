import React, { Component } from "react";
import Link from "next/link";

export default class index extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <h1>This is Home Page</h1>
        <img src="images/sujon.png" alt="sujon" />
      </div>
    );
  }
}
