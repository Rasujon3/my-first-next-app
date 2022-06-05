import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";

import Style from "../css/Style.module.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
          <meta charset="UTF-8" />
          <meta
            name="description"
            content="ঘরে বসে স্কিল ডেভেলপ করুন নিজের সময় মত । সঠিক দিকনির্দেশনা সহ থাকছে প্রোগ্রামিং এবং সফটওয়্যার ডেভেলপমেন্ট এর উপরে প্রফেশনাল কোর্স "
          />
          <meta
            name="keywords"
            content="Rabbil Hasan,Learn With Rabbil Hasan,Mobile App Development Tutorial Bangla, Web Development Tutorial Bangla, Software Development Tutorial Bangla,Laravel Tutorial bangla, React Tutorial Bangla, Android Tutorial Bangla, React Native Tutorial Bangla, Programming Tutorial Bangla, JavaScript Tutorial Bangla"
          />
          <meta name="author" content="Rabbil Hasan"></meta>
        </Head>
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
        <h1 className={Style.myText}>This is Home Page</h1>
        <img src="images/sujon.png" alt="sujon" />
      </div>
    );
  }
}
