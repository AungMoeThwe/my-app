import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleEquals = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (e) {
      setDisplay("Error");
    }
  };

  return (
    <div id="calculator">
      <input
        id="display"
        type="text"
        value={display}
        readOnly
        style={{ width: "200px", marginBottom: "10px" }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 50px)", gap: "5px" }}>
        
        {/* Digit Buttons */}
        {[1,2,3,4,5,6,7,8,9,0].map((n) => (
          <button key={n} id={`btn-${n}`} onClick={() => handleClick(n.toString())}>
            {n}
          </button>
        ))}

        {/* Operators */}
        <button id="btn-add" onClick={() => handleClick("+")}>+</button>
        <button id="btn-sub" onClick={() => handleClick("-")}>-</button>
        <button id="btn-mul" onClick={() => handleClick("*")}>*</button>
        <button id="btn-div" onClick={() => handleClick("/")}>/</button>

        {/* Clear Button */}
        <button id="btn-clear" onClick={handleClear}>C</button>

        {/* Equals Button */}
        <button id="btn-equals" onClick={handleEquals}>=</button>
      </div>
    </div>
  );
}