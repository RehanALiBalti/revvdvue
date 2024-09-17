import axios from "axios";

//
export default axios.create({
  // base url
  baseURL: "https://52.59.240.119/api",
  // adding header
  headers: {
    "Content-type": "application/json",
    Accept: "*/*",
  },
});
