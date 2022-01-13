# 登入註冊功能

檢查是否登入狀態，是的話呼叫登入的 API 不是的話呼叫註冊的 API

```
function submit() {
    if (isSignIn) {
      loginUser({ account, password }).then((data) => {
        if (data.account) {
          setCurrentUser(data);
          alert("Login Successful");
          setSignOpen(false);
        } else {
          alert(data.msg);
        }
        setAccount("");
        setPassword("");
      });
    } else {
      createUser({ account, password });
    }
  }
```

呼叫 API 如下

```
export const loginUser = async (data) => {
  let url = "https://final-dbapi-1101.herokuapp.com/login";
  let user = {};

  await axios
    .post(url, data)
    .then((res) => {
      user = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(user);
  return user;
};

export const createUser = async (data) => {
  let url = "https://final-dbapi-1101.herokuapp.com/users/create";

  await axios
    .post(url, data)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};
```

# 讀取文章

呼叫的 API

```
export const getAllPosts = async () => {
  let url = "https://final-dbapi-1101.herokuapp.com/posts";
  let data = [];
  await axios
    .get(url)
    .then((res) => {
      data = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};
```

使用 API 取得資料，再將資料作為 Prop 傳給 Component 渲染出來

```
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
```

# 新增貼文

呼叫 API

```
export const newPost = async (data) => {
  let url = "https://final-dbapi-1101.herokuapp.com/posts/create";

  await axios
    .post(url, data)
    .then((res) => {
      console.log(res.ok);
    })
    .catch((err) => {
      console.log(err);
    });
};
```

將 input 的 data 傳給 state，當 submit 時會傳送資料給 API，假設現在不是登入狀態，則會要求登入，無法新增貼文

```
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
              setPostOpen(false);
            }}
          >
            新增貼文
          </button>
        </div>
      </div>
    </div>
  );
}
```

# 登出

將 USER STATE 設為 Null

```
export default function Header({
  currentUser,
  setCurrentUser,
  setPostOpen,
  setSignOpen,
}) {
  return (
    <div className="header">
      <div className="header_left">
        <img className="header_logo" src={logo} alt="" />
        <h2 className="header_title">Personal Blog</h2>
      </div>
      <div className="header_right">
        <Link className="header_navItem" to="/">
          Home
        </Link>
        <Link className="header_navItem" to="/about">
          About
        </Link>
        <Link
          className="header_navItem"
          to="/"
          onClick={() => {
            if (currentUser) {
              setPostOpen(true);
            } else {
              alert("Not Login Yet");
            }
          }}
        >
          New Post
        </Link>
        {currentUser ? (
          <Link
            className="header_navItem"
            to="/"
            onClick={() => {
              setCurrentUser(null);
            }}
          >
            Log out
          </Link>
        ) : (
          <Link
            className="header_navItem"
            to="/"
            onClick={() => {
              setSignOpen(true);
            }}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
```
