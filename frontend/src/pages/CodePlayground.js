// src/pages/CodePlayground.js
import React, { useState } from "react";
import { runCode } from "../api/api";

function CodePlayground() {
  const [code, setCode] = useState(`#include <stdio.h>\nint main() { printf("Hello, World!"); return 0; }`);
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    try {
      const res = await runCode(code);
      setOutput(res.data.output || res.data.stdout || "No output received");
    } catch (error) {
      console.error(error);
      setOutput("Error running code");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧠 Code Playground</h2>
      <textarea
        rows={10}
        cols={80}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <br />
      <button onClick={handleRun}>Run Code</button>
      <pre>Output: {output}</pre>
    </div>
  );
}

export default CodePlayground;
