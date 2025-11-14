import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${email}! (Temporary — backend later)`);
  };

  return (
    <>
      <Navbar />
      <div className="register-container">
        <h2>Register / Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Register;
