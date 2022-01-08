import React from "react";
import "../styles/NewPost.scss";

export default function NewPost({ setPostOpen }) {
  return (
    <div>
      <div class="newPost">
        <h3>New Post</h3>
        <form className="newPost_form">
          <div className="newPost_inputBox">
            <label>請輸入文章標題 : </label>
            <input type="text" className="newPost_inputText" />
          </div>
          <div className="newPost_inputBox">
            <label>請上傳文章圖片 :</label>
            <input className="newPost_inputFile" type="file" />
          </div>
          <div className="newPost_inputBox">
            <label>請輸入文章內容 : </label>
            <textarea className="newPost_inputText"></textarea>
          </div>
        </form>
        <div className="newPost_btnBox">
          <button
            class="btn"
            onClick={() => {
              setPostOpen(false);
            }}
          >
            離開
          </button>
          <button class="btn">新增貼文</button>
        </div>
      </div>
    </div>
  );
}
