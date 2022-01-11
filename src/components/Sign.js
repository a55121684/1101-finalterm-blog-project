import React, { useState } from "react";
import "../styles/components/Sign.scss";

export default function Sign({ setSignOpen }) {
  const [isSignIn, setIsSignIn] = useState(true);

  function toggleSignState() {
    setIsSignIn(!isSignIn);
  }

  return (
    <div className="sign">
      <h3 className="sign_title">{isSignIn ? "登入" : "註冊"}</h3>
      <div>
        <form className="sign_form">
          <div className="sign_inputBox">
            <label>帳號 :</label>
            <input className="sign_inputText" type="text" />
          </div>
          <div className="sign_inputBox">
            <label>密碼 :</label>
            <input className="sign_inputText" type="password" />
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
        <button className="btn">{isSignIn ? "登入" : "註冊"}</button>
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
