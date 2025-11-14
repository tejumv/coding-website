import React from "react";
import "../styles/CodePlayground.css";

export default function Practice() {
  return (
    <section className="practice-page container">
      <h2>Practice Sandbox</h2>
      <div className="playground card">
        <div className="editor">
          <textarea className="code" defaultValue={`// try console.log('hello cadet')`} />
        </div>
        <div className="output">
          <div className="output-title">Console</div>
          <pre className="console">No output yet — connect Judge0 to run</pre>
        </div>
      </div>
    </section>
  );
}
