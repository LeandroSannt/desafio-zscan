import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/estados",
});

export default api;
