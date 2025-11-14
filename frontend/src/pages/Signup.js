import React, { useState } from "react";
import "../styles/Signup.css";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim()) return setError("Name is required");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError("Enter valid email");
    if (form.password.length < 6) return setError("Password must be 6+ chars");

    // TODO: call backend /auth/signup
    alert("Signed up (mock). Connect backend to complete.");
  };

  return (
    <section className="signup-page">
      <div className="container card signup-card">
        <h2>Create your Cadet Account</h2>
        {error && <div className="form-error">{error}</div>}

        <form onSubmit={submit} className="signup-form">
          <input name="name" value={form.name} onChange={change} placeholder="Full name" />
          <input name="email" value={form.email} onChange={change} placeholder="Email address" />
          <input name="password" value={form.password} onChange={change} type="password" placeholder="Password" />
          <button className="btn" type="submit">Sign Up</button>
        </form>
      </div>
    </section>
  );
}
