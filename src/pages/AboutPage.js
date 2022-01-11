import React from "react";
import "../styles/pages/AboutPage.scss";

export default function About() {
  return (
    <div className="resume">
      <div className="resume_header">
        <div className="resume_imgBox">
          <img
            src="https://www.actphoto.org.tw/themes/zh-tw/assets/images/default_member.jpg"
            alt=""
          />
        </div>
        <div resume_personInfo>
          <h3>黃致瑋</h3>
          <div>淡江大學 資訊工程學系</div>
          <div>台北市 大安區</div>
          <div>jack71628@gmail.com</div>
        </div>
      </div>
      <div className="resume_main"></div>
    </div>
  );
}
