import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="Forecast-day">{day()}</div>
      <img
        src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`}
      />
      <div>
        <span className="Forecast-temp-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>{" "}
        <span className="Forecast-temp-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
