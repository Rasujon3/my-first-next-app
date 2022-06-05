import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/about",
                query: { firstName: "Rabbil", lastName: "Hasan" },
              }}
            >
              About
            </Link>
          </li>
          <li>
            {/* <Link href="/contact">Contact</Link> */}
            <button onClick={() => Router.push("/contact")}>Contact</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
