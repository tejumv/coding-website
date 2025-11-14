import React from "react";
import "../styles/Home.css";

export default function Home() {
  return (
    <section className="home-hero">
      <div className="stars" aria-hidden />
      <div className="hero-inner container">
        <div className="hero-left">
          <h1>Welcome, Cadet.</h1>
          <p className="subtitle">Learn to code like you're navigating a galaxy.</p>

          <div className="hero-actions">
            <a className="btn" href="/courses">Start Mission 🚀</a>
            <a className="btn btn-ghost" href="/practice">Try Practice</a>
          </div>

          <div className="meta-cards">
            <div className="meta">
              <div className="meta-title">Rocket Fuel</div>
              <div className="fuel-bar">
                <div className="fuel-fill" style={{width: "46%"}} />
              </div>
            </div>

            <div className="meta">
              <div className="meta-title">Current Mission</div>
              <div className="meta-value">Intro to JavaScript</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="ship-card card">
            <div className="ship-title">Star Map</div>
            <div className="ship-visual">
              <div className="planet planet-1">JS</div>
              <div className="planet planet-2">Py</div>
              <div className="planet planet-3">Web</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
