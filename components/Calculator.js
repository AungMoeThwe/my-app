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
      if (/E{2,}/.test(display) || /^E/.test(display)) {
        setDisplay("Error");
        return;
      }
      const result = eval(display);
      setDisplay(result.toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div
      id="calculator"
      style={{
        width: "260px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "12px",
        background: "#1a1a1a",
        boxShadow: "0 0 18px rgba(0,0,0,0.35)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Display */}
      <input
        id="display"
        type="text"
        value={display}
        readOnly
        style={{
          width: "100%",
          height: "60px",
          fontSize: "28px",
          textAlign: "right",
          marginBottom: "20px",
          borderRadius: "8px",
          padding: "10px",
          border: "none",
          background: "#333",
          color: "#0f0",
          boxSizing: "border-box",
        }}
      />

      {/* Buttons Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {/* Digits */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => (
          <button
            key={n}
            id={`btn-${n}`}
            onClick={() => handleClick(n.toString())}
            style={buttonStyle}
          >
            {n}
          </button>
        ))}

        {/* Operators */}
        <button id="btn-add" onClick={() => handleClick("+")} style={opButtonStyle}>
          +
        </button>
        <button id="btn-sub" onClick={() => handleClick("-")} style={opButtonStyle}>
          -
        </button>
        <button id="btn-mul" onClick={() => handleClick("*")} style={opButtonStyle}>
          *
        </button>
        <button id="btn-div" onClick={() => handleClick("/")} style={opButtonStyle}>
          /
        </button>

        {/* Scientific Notation */}
        <button id="btn-e" onClick={() => handleClick("E")} style={opButtonStyle}>
          E
        </button>

        {/* Clear */}
        <button id="btn-clear" onClick={handleClear} style={clearButtonStyle}>
          C
        </button>

        {/* Equals */}
        <button id="btn-equals" onClick={handleEquals} style={equalsButtonStyle}>
          =
        </button>
      </div>
    </div>
  );
}

/* --- Button Styles --- */

const buttonStyle = {
  padding: "15px 0",
  fontSize: "20px",
  background: "#444",
  border: "none",
  borderRadius: "8px",
  color: "white",
  cursor: "pointer",
};

const opButtonStyle = {
  ...buttonStyle,
  background: "#555",
};

const equalsButtonStyle = {
  gridColumn: "span 2",
  padding: "15px 0",
  fontSize: "22px",
  background: "#0a84ff",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const clearButtonStyle = {
  ...buttonStyle,
  background: "#d00000",
};