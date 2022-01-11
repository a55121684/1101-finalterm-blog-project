import React, { useState } from "react";
import "../styles/components/Sign.scss";
import { loginUser, createUser } from "../api/UserAPI";

export default function Sign({ setSignOpen, setCurrentUser }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  function toggleSignState() {
    setIsSignIn(!isSignIn);
  }

  function submit() {
    if (isSignIn) {
      loginUser({ account, password }).then((data) => {
        if (data.account) {
          setCurrentUser(data);
          alert("Login Successful");
          setSignOpen(false);
        } else {
          alert(data.msg);
        }
        setAccount("");
        setPassword("");
      });
    } else {
      createUser({ account, password });
    }
  }

  return (
    <div className="sign">
      <h3 className="sign_title">{isSignIn ? "登入" : "註冊"}</h3>
      <div>
        <form className="sign_form">
          <div className="sign_inputBox">
            <label>帳號 :</label>
            <input
              className="sign_inputText"
              type="text"
              value={account}
              onChange={(e) => {
                setAccount(e.target.value);
              }}
            />
          </div>
          <div className="sign_inputBox">
            <label>密碼 :</label>
            <input
              className="sign_inputText"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
      <div className="sign_btnBox">
        <button
          className="btn"
          onClick={() => {
            setSignOpen(false);
          }}
        >
          離開
        </button>
        <button
          className="btn"
          onClick={() => {
            submit();
          }}
        >
          {isSignIn ? "登入" : "註冊"}
        </button>
      </div>
      <div>
        <button
          className="signChange_btn"
          onClick={() => {
            toggleSignState();
          }}
        >
          {isSignIn ? "切換註冊" : "切換登入"}
        </button>
      </div>
    </div>
  );
}
