import React, { Component } from "react";
import Link from "next/link";

export default class contact extends Component {
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
        <h1>THis is contact page</h1>
      </div>
    );
  }
}
