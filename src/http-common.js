import axios from "axios";

//
export default axios.create({
  // base url
  // origional url
  // baseURL: "https://king-prawn-app-3rw3o.ondigitalocean.app/api",
  // for local
  baseURL: "https://king-prawn-app-3rw3o.ondigitalocean.app/api",
  // for live
  // baseURL: "https://backend.revvdout.com/api",
  // baseURL: "https://3.75.88.121/api",
  // adding header
  // rejectUnauthorized: false,
  headers: {
    "Content-type": "application/json",
    Accept: "*/*",
  },
});
