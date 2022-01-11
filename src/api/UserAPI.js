import axios from "axios";

export const createUser = async (data) => {
  let url = "https://final-dbapi-1101.herokuapp.com/users/create";

  await axios
    .post(url, data)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

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
