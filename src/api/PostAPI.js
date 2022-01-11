import axios from "axios";

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
