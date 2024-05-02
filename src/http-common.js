import axios from "axios";

export default axios.create({
  baseURL: "https://clownfish-app-quehu.ondigitalocean.app/api",
  headers: {
    "Content-type": "application/json",
  },
});
