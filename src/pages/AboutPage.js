import React from "react";
import "../styles/pages/AboutPage.scss";
import python from "../assets/python_vertical_logo_icon_168039.png";
import c from "../assets/c_original_logo_icon_146611.png";
import cpp from "../assets/c_icon_132529.png";
import person from "../assets/messageImage_1641875497650.jpg";

export default function About() {
  return (
    <div className="resume">
      <div className="resume_header">
        <div className="resume_imgBox">
          <img src={person} alt="" />
        </div>
        <div className="resume_personInfo">
          <h3 className="resume_personName">黃致瑋</h3>
          <div className="resume_personData">淡江大學 資訊工程學系</div>
          <div className="resume_personData">台北市 大安區</div>
          <div className="resume_personData">jack71628@gmail.com</div>
        </div>
      </div>
      <div className="resume_main">
        <div className="resume_skillBox">
          <h2>技能</h2>
          <hr />
          <div>
            程式語言 : <img className="langIcon" src={c} alt="" /> C語言 、
            <img className="langIcon" src={cpp} alt="" /> C++ 、
            <img className="langIcon" src={python} alt="" /> Python
          </div>
          <div>WEB : HTML 、 CSS 、 JS</div>
        </div>
        <div className="resume_introBox">
          <h2>自傳</h2>
          <hr />
          <div>[我的技能]</div>
          <div>
            ⽬前學習方式以學校課業為主，⾃學為輔。修Python、JavaScript、C/C++、HTML、CSS、SQL其中練習的專案都是獨立完成，除了學校的課業另外還有在家⾃學JAVA。
          </div>
          <div>[個人特質]</div>
          <div>
            專注的態度 :
            小時候很喜歡拼拼圖，一坐就是整個下午，卻不會因為苦惱而放棄，反而練就了專注在一件事情上，而且建立在樂觀開朗的的性格上，讓我能專心的寫程式也能在遇到問題，甚至自己遇到挫折時，有耐心地找出問題點，無論是程式的準確度或是搜尋所需的資料，都能最大限度地發揮。
          </div>
          <div>[自我期許]</div>
          <div>
            希望透過專案執行，讓自己認識到哪裡需要補強，雖然現在可能不是即戰力能為貴公司帶來最高的貢獻及效益。
          </div>
        </div>
      </div>
    </div>
  );
}
