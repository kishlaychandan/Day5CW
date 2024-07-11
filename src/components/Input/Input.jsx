import React, { useState } from "react";
import './Input.css'

function Input({ setRoutine }) {
  const [hour, setHour] = useState("");
  const [subject, setSubject] = useState("");

  function setOut() {
    // Create the timing object with key-value pairs
    const timing = { hour: hour, subject: subject };
    setRoutine(timing); // Pass the timing object to the setRoutine function
    // Clear the input fields after setting the routine
    setHour("");
    setSubject("");
  }

  return (
    <>
      <div className="input">
        <h1 className="heading">Geekster Education Planner</h1>
        <div className="inputData">
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Enter subject" />
          <input type="number" value={hour} onChange={(e) => setHour(e.target.value)} placeholder="Hours" />
          <button onClick={setOut}>Add</button>
        </div>
      </div>
    </>
  );
}

export default Input;
