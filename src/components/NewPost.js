import React, { useState } from "react";
import axios from "axios";
import "../styles/components/NewPost.scss";
import { newPost } from "../api/PostAPI";

export default function NewPost({ setPostOpen }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  async function submit() {
    let data = { title, content, image };
    await newPost(data);
  }

  return (
    <div>
      <div className="newPost">
        <h3 className="newPost_title">New Post</h3>
        <form className="newPost_form">
          <div className="newPost_inputBox">
            <label>請輸入文章標題 : </label>
            <input
              type="text"
              className="newPost_inputText"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="newPost_inputBox">
            <label>請上傳文章圖片 :</label>
            <input
              className="newPost_inputFile"
              type="file"
              onChange={async (e) => {
                let body = new FormData();
                body.set("key", "cb5a47f73fb1180bbb9ec2962aa93b1b");
                body.append("image", e.target.files[0]);

                await axios({
                  method: "post",
                  url: "https://api.imgbb.com/1/upload",
                  data: body,
                })
                  .then((res) => {
                    setImage(res.data.data.display_url);
                  })
                  .catch((err) => {
                    this.imgUploading = false;

                    console.log(err);
                  });
              }}
            />
          </div>
          <div className="newPost_inputBox">
            <label>請輸入文章內容 : </label>
            <textarea
              rows="10"
              className="newPost_inputText"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
          </div>
        </form>
        <div className="newPost_btnBox">
          <button
            className="btn"
            onClick={() => {
              setPostOpen(false);
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
            新增貼文
          </button>
        </div>
      </div>
    </div>
  );
}
