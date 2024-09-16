import axios from "axios";

export default axios.create({
  baseURL: "https://52.59.240.119/api",
  headers: {
    "Content-type": "application/json",
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  },
});
