import React from "react";
import logo from "../assets/blog_logo.png";
import "../styles/Header.scss";
import { Link } from "react-router-dom";

export default function Header({ setPostOpen }) {
  return (
    <div className="header">
      <div className="header_left">
        <img className="header_logo" src={logo} alt="" />
        <h2 className="header_title">Personal Blog</h2>
      </div>
      <div className="header_right">
        <Link className="header_navItem" to="/">
          Home
        </Link>
        <Link className="header_navItem" to="/about">
          About
        </Link>
        <Link
          className="header_navItem"
          to="/"
          onClick={() => {
            setPostOpen(true);
          }}
        >
          New Post
        </Link>
        <Link className="header_navItem" to="/">
          Login
        </Link>
      </div>
    </div>
  );
}
