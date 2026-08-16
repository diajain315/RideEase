// import axios from "axios";

// const Http = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
// });

// Http.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("userToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default Http;

// import Axios from "axios";
// const userToken = localStorage.getItem("userToken")
//   ? localStorage.getItem("userToken")
//   : null;

// console.log(userToken, "=====================================after login");

// let urls = {
//   test: `http://localhost:5001/`,
//   development: "http://localhost:5001/",
// };
// const Http = Axios.create({
//   baseURL: process.env.NODE_ENV,
//   headers: {
//     Authorization: `${userToken}`,
//   },
// });

// export default Http;
// import axios from "axios";
import axios from "axios";

// Create axios instance with base URL
const Http = axios.create({
  baseURL: "http://localhost:5001",
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

// Add token to every request
Http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
Http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userId");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default Http;