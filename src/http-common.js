import axios from "axios";

//
export default axios.create({
  // base url
  // origional url
  // baseURL: "https://king-prawn-app-3rw3o.ondigitalocean.app/api",
  // for development purpose
  baseURL: "https://king-prawn-app-3rw3o.ondigitalocean.app/api",
  // adding header
  // rejectUnauthorized: false,
  headers: {
    "Content-type": "application/json",
    Accept: "*/*",
  },
});
