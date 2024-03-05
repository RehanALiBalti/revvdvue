import axios from "axios";

export default axios.create({
  baseURL: "http://137.184.111.69:5000/api",
  headers: {
    "Content-type": "application/json",
  },
});
