import axios from "axios";

export default axios.create({
  baseURL: "https://steps-counter-backend.herokuapp.com",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
