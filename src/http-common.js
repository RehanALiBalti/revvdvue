import axios from "axios";

export default axios.create({
  baseURL: "http://52.59.240.119/api",
  headers: {
    "Content-type": "application/json",
  },
});
