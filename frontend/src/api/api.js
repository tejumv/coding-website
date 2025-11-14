// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend base URL (Rakshita’s)
});

export const runCode = (code) => API.post("/code/run", { code });
export const getAllSubmissions = () => API.get("/code/submissions");
