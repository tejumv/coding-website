// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // backend base URL (confirm port with Soujanya)
  timeout: 20000,
});

export default api;
