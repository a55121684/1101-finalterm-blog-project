import React from "react";
import logo from "../assets/blog_logo.png";
import "../styles/components/Header.scss";
import { Link } from "react-router-dom";

export default function Header({
  currentUser,
  setCurrentUser,
  setPostOpen,
  setSignOpen,
}) {
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
            if (currentUser) {
              setPostOpen(true);
            } else {
              alert("Not Login Yet");
            }
          }}
        >
          New Post
        </Link>
        {currentUser ? (
          <Link
            className="header_navItem"
            to="/"
            onClick={() => {
              setCurrentUser(null);
            }}
          >
            Log out
          </Link>
        ) : (
          <Link
            className="header_navItem"
            to="/"
            onClick={() => {
              setSignOpen(true);
            }}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
