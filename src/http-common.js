import axios from "axios";

export default axios.create({
  baseURL: "https://squid-app-yq2ph.ondigitalocean.app/api",
  headers: {
    "Content-type": "application/json",
  },
});
