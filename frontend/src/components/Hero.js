import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <h1>Learn to Code Like a Game</h1>
      <p>Interactive, fun, and beginner-friendly lessons.</p>
      <Link to="/register" className="btn">Start Learning</Link>
    </div>
  );
}

export default Hero;
