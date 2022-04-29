import React, { useState } from "react";
import "./FileNamer.css";

export default function FileNamer() {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState("");
  const validate = (event) => {
    if (/\*/.test(name)) {
      event.preventDefault();
      setAlert(true);
      return;
    }
    setAlert(false);
  };
  return (
    <div className="wrapper">
      <div className="preview">
        <h2>Preview: {name}.js</h2>
      </div>
      <form>
        <label>
          <p>Name:</p>
          <input
            autoComplete="off"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        {alert && <div>Forbidden Character: *</div>}
        <div>
          <button onClick={validate}>Save</button>
        </div>
      </form>
    </div>
  );
}
