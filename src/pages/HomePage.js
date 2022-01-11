import React, { useState, useEffect } from "react";
import Backdrop from "../components/Backdrop";
import Header from "../components/Header";
import Sign from "../components/Sign";
import NewPost from "../components/NewPost";
import PersonInfo from "../components/PersonInfo";
import SinglePost from "../components/SinglePost";
import "../styles/pages/HomePage.scss";
import { getAllPosts } from "../api/PostAPI";

export default function HomePage() {
  const [postOpen, setPostOpen] = useState(false);
  const [signOpen, setSignOpen] = useState(false);
  const [postsData, setPostsData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getAllPosts().then((data) => {
      setPostsData(data);
    });
  }, []);

  return (
    <div>
      <div className="homepage_header">
        <Header
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          setPostOpen={setPostOpen}
          setSignOpen={setSignOpen}
        />
      </div>
      <div className="homepage_content">
        <div className="homepage_person">
          <PersonInfo />
        </div>
        <div className="homepage_post">
          {postsData.map((post) => {
            return (
              <SinglePost
                className="post"
                key={post.id}
                title={post.title}
                content={post.content}
                img={post.image}
                date={post.date}
              />
            );
          })}
        </div>
      </div>
      {postOpen ? (
        <div>
          <NewPost setPostOpen={setPostOpen} />
          <Backdrop />
        </div>
      ) : null}
      {signOpen ? (
        <div>
          <Sign setSignOpen={setSignOpen} setCurrentUser={setCurrentUser} />
          <Backdrop />
        </div>
      ) : null}
    </div>
  );
}
