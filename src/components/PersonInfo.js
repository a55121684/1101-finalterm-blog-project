import React from "react";
import person from "../assets/person_img.png";
import "../styles/PersonInfo.scss";

export default function PersonInfo() {
  return (
    <div className="person_card">
      <div className="person_imgBox">
        <img src={person} alt="" />
      </div>
      <div className="person_info">
        <h3 className="person_name">Shin.JS.You</h3>
        <div className="person_job">Front End Developer</div>
        <div className="person_edu">TKU CSIE</div>
        <div className="person_email">bear55121677@gmail.com</div>
      </div>
    </div>
  );
}
