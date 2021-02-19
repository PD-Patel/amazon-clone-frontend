import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:8001",
});

export default server;
