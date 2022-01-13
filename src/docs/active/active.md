# 主動學習

## 1.

React component props
[Doc](https://zh-hant.reactjs.org/docs/react-component.html)
定義 component 最簡單的方法即是撰寫一個 Javascript function
此 function 是一個符合規範的 React component，因為它接受一個「props」（指屬性 properties）物件並回傳一個 React element。我們稱之為 function component，因為它本身就是一個 JavaScript function。

```
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

```

## 2.

SCSS，使用@media query 來設定寬度要呈現的樣式來實作 RWD
設定 viewport
決定 RWD 設計模式
套用 CSS media query
使用相對單位設定寬高、大小
[Doc](https://tw.alphacamp.co/blog/rwd-responsive-web-design-introduction)

```
@media (max-width: 980px) {
  .header {
    padding: 10px;
    .header_right {
      width: 50%;
    }
  }
}

@media (max-width: 500px) {
  .header {
    flex-direction: column;
    height: 120px;
    .header_right {
      margin: 10px 0;
      width: 100%;
    }
  }
}
```

## 3.

HTTP Request
[Doc](https://yakimhsu.com/project/project_w4_Network_http.html)
瀏覽器發送 HTTP request 到 Server
request 包含 head 跟 body
Server 回傳 response 到瀏覽器
response 包含 head 跟 body
瀏覽器進行解析 html、css、js、圖片檔案…等等，渲染成可讀性高的網頁內容

## 4.

JS ES6 特性
[Doc](https://kknews.cc/zh-tw/code/5vevvp8.html)
Block Scope - let, const
在 ES6 之前，JavaScript 用 var 關鍵字來宣告一個變數，其作用範圍是 function scope
let 關鍵字用來宣告一個 block scope 變數、const 宣告變數的同時就需要指定且值不能被更改

JavaScript ES6 Arrow Functions 箭頭函數
ES6 允許我們用箭頭 => 來更方便簡短的定義一個函數

## 5.

React 資料流
[Doc](https://ithelp.ithome.com.tw/articles/10225179)
React 屬於單向資料流，所有的資料都是從父層往子層傳遞
React 的畫面是由許多元件組合建構而成，因此元件算是 React 的核心靈魂
在介紹 Components 之前先介紹 Components 裡的靈魂人物：Props and State
Components 裡最重要的資料來源就是利用 Props and State 傳遞

Props(由父層傳遞下來的不可變資料型態)
State(只存在於當下所聲明的組件內部的可變資料型態、組件內的元件可透過使用 state 進行資料傳遞、更新 state 時，需使用 setState())
