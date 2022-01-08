import React, { useState } from "react";
import Backdrop from "../components/Backdrop";
import Header from "../components/Header";
import NewPost from "../components/NewPost";
import PersonInfo from "../components/PersonInfo";
import SinglePost from "../components/SinglePost";
import "../styles/HomePage.scss";

export default function HomePage() {
  const [postOpen, setPostOpen] = useState(false);

  const testData = [
    {
      id: 1,
      title: "Test Post",
      content:
        "2008年12月26日，瑞雪兆豐年，加拿大溫哥華菩提禪堂的二級班上同樣是一派喜慶。剛剛風塵僕僕遠道歸來的金菩提宗師未及休息，就和來自世界各地的學員們歡聚一堂，談法論道。宗師以自己滑雪的親身經歷，幽默地告訴大家，要以快樂的心跨越自己心裡的障礙，向更高、更新的境界邁進。本片幽默風趣，和家人朋友一同觀看，可以在笑聲中感受到一份超越困難的信心。",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/10/c4/23/16/highland-view-bed-and.jpg",
      date: "2022/01/05",
    },
    {
      id: 2,
      title: "Test Post",
      content:
        "2008年12月26日，瑞雪兆豐年，加拿大溫哥華菩提禪堂的二級班上同樣是一派喜慶。剛剛風塵僕僕遠道歸來的金菩提宗師未及休息，就和來自世界各地的學員們歡聚一堂，談法論道。宗師以自己滑雪的親身經歷，幽默地告訴大家，要以快樂的心跨越自己心裡的障礙，向更高、更新的境界邁進。本片幽默風趣，和家人朋友一同觀看，可以在笑聲中感受到一份超越困難的信心。",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/10/c4/23/16/highland-view-bed-and.jpg",
      date: "2022/01/05",
    },
    {
      id: 3,
      title: "Test Post",
      content:
        "2008年12月26日，瑞雪兆豐年，加拿大溫哥華菩提禪堂的二級班上同樣是一派喜慶。剛剛風塵僕僕遠道歸來的金菩提宗師未及休息，就和來自世界各地的學員們歡聚一堂，談法論道。宗師以自己滑雪的親身經歷，幽默地告訴大家，要以快樂的心跨越自己心裡的障礙，向更高、更新的境界邁進。本片幽默風趣，和家人朋友一同觀看，可以在笑聲中感受到一份超越困難的信心。",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/10/c4/23/16/highland-view-bed-and.jpg",
      date: "2022/01/05",
    },
    {
      id: 4,
      title: "Test Post",
      content:
        "2008年12月26日，瑞雪兆豐年，加拿大溫哥華菩提禪堂的二級班上同樣是一派喜慶。剛剛風塵僕僕遠道歸來的金菩提宗師未及休息，就和來自世界各地的學員們歡聚一堂，談法論道。宗師以自己滑雪的親身經歷，幽默地告訴大家，要以快樂的心跨越自己心裡的障礙，向更高、更新的境界邁進。本片幽默風趣，和家人朋友一同觀看，可以在笑聲中感受到一份超越困難的信心。",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/10/c4/23/16/highland-view-bed-and.jpg",
      date: "2022/01/05",
    },
  ];

  return (
    <div>
      <div className="homepage_header">
        <Header setPostOpen={setPostOpen} />
      </div>
      <div className="homepage_content">
        <div className="homepage_person">
          <PersonInfo />
        </div>
        <div className="homepage_post">
          {testData.map((post) => {
            return (
              <SinglePost
                className="post"
                key={post.id}
                title={post.title}
                content={post.content}
                img={post.img}
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
    </div>
  );
}
