import axios from "axios";

export default axios.create({
  // to be changed with the proper server ip from environement variables
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json"
  }
});
