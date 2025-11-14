import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <div className="nav-inner container">
        <Link to="/" className="brand">
          <span className="rocket">🚀</span>
          <span className="brand-text">SpaceLearn</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" className={({isActive})=>isActive?'active':''}>Home</NavLink>
          <NavLink to="/courses" className={({isActive})=>isActive?'active':''}>Courses</NavLink>
          <NavLink to="/practice" className={({isActive})=>isActive?'active':''}>Practice</NavLink>
          <NavLink to="/signup" className={({isActive})=>isActive?'active':''}>Sign Up</NavLink>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
