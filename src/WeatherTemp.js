import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="temp"> {Math.round(props.celsius)} </span>

        <div className="unit">
          °C |{" "}
          <a href="/" onClick={convertToF}>
            °F
          </a>
        </div>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="temp"> {Math.round(fahrenheit)} </span>

        <div className="unit">
          <a href="/" onClick={convertToC}>
            °C
          </a>{" "}
          | °F
        </div>
      </span>
    );
  }
}
