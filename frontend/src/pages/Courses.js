import React from "react";
import "../styles/Courses.css";

const COURSES = [
  { id: "js", title: "JavaScript Galaxy", level: "Beginner" },
  { id: "py", title: "Python Nebula", level: "Beginner" },
  { id: "web", title: "Web Systems", level: "Intermediate" },
  { id: "ds", title: "Data Science Orbit", level: "Advanced" },
];

export default function Courses() {
  return (
    <section className="courses-page">
      <div className="container">
        <h2>Available Missions</h2>
        <div className="courses-grid">
          {COURSES.map(c => (
            <article className="planet-card card" key={c.id}>
              <div className="planet-visual">{c.title.split(" ")[0].slice(0,2)}</div>
              <h3>{c.title}</h3>
              <p className="muted">Difficulty: {c.level}</p>
              <div className="card-actions">
                <a className="btn" href={`/course/${c.id}`}>Launch</a>
                <button className="btn-ghost">Preview</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
