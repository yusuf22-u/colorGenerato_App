import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("#000000");
  const [colorType, setColorType] = useState("hex");
  function randomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function generateHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }
    setColor(hexColor);
  }
  function generateRgbColor() {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);
    setColor(`rgb (${r},${g},${b})`);
  }
  useEffect(() => {
    if (colorType === "hex") generateHexColor();
    else generateRgbColor();
  }, [colorType]);
  return (
    <div
      style={{ height: "100vh", width: "100vw", background: `${color}` }}
      className=""
    >
      <button onClick={() => setColorType("rgb")}>RGB</button>
      <button onClick={() => setColorType("hex")}>hex</button>
      <button
        onClick={colorType === "hex" ? generateHexColor : generateRgbColor}
      >
        Generate color
      </button>
      <div
        style={{ display: "flex", alignItems: "center", margin: "10" }}
        className=""
      >
        <h1> {colorType === "hex" ? "hex color : " : "RGB color: "} </h1>
        <p style={{ color: "wheat" }}>{color}</p>
      </div>
    </div>
  );
}

export default App;
