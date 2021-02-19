import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-c649d/us-central1/api", // api url (cloud function)
});

export default instance;

// http://localhost:5001/clone-c649d/us-central1/api
