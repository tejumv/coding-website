import React from "react";
import Navbar from "../components/Navbar";
import "./ChooseFlow.css";

function ChooseFlow() {
  const courses = [
    { name: "Python Basics", desc: "Start your coding journey" },
    { name: "JavaScript", desc: "For web and logic lovers" },
    { name: "C++", desc: "For problem solvers" },
  ];

  return (
    <>
      <Navbar />
      <div className="choose-container">
        <h2>Choose Your Learning Path</h2>
        <div className="course-grid">
          {courses.map((c) => (
            <div key={c.name} className="course-card">
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
              <button>Start</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ChooseFlow;
