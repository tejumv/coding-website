// src/api/codeService.js
import api from "./axios";

// expected backend routes: POST /code/run  and GET /code/submissions
export const runCode = (payload) => api.post("/code/run", payload);
export const getSubmissions = () => api.get("/code/submissions");
