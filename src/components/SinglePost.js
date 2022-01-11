import React from "react";
import "../styles/components/SinglePost.scss";

export default function SinglePost({ title, content, img, date }) {
  return (
    <div className="post">
      <h5 className="post_title">{title}</h5>
      <div className="post_imgBox">
        <img className="post_img" src={img} alt="" />
      </div>
      <div className="post_contentBox">
        <div className="post_content">{content}</div>
      </div>
      <div className="post_dateBox">
        <div className="post_date">{date}</div>
      </div>
    </div>
  );
}
