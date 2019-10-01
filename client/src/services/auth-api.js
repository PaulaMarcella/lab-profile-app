import axios from "axios";

const authApi = axios.create({
  baseURL: "/auth"
});

export const signUp = ({ username, password, campus, course }) => {
  return new Promise((resolve, refect) => {
    authApi
      .post("/signup", { username, password, campus, course })
      .then(response => {
        resolve(response.data.data.user);
      })
      .catch(error => {
        refect(error);
      });
  });
};
export const signIn = ({ username, password }) => {
  return new Promise((resolve, refect) => {
    authApi
      .post("/signin", { username, password })
      .then(response => {
        console.log(response);
        resolve(response.data.data.user);
      })
      .catch(error => {
        refect(error);
      });
  });
};

export const loggedIn = () => {
  return new Promise((resolve, reject) => {
    authApi
      .get("/loggedin")
      .then(response => {
        resolve(response.data.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};
