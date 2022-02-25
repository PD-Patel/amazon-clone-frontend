import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-backend-app.herokuapp.com",
});

export default instance;
