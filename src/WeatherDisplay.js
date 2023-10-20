import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";

export default function WeatherDisplay(props) {
  return (
    <div className="row mt-3">
      <div className="col-4">
        <div className="current-emoji">
          <img
            src={props.data.imgUrl}
            alt="Weather-icon"
            className="current-emoji"
          />
        </div>
        <span className="current">
          <WeatherTemp celsius={props.data.temperature} />

          <div className="current-description">{props.data.description}</div>
        </span>
      </div>

      <ul className="col-4 wind-humidity">
        <li>Wind Speed: {props.data.wind} km/h</li>
        <li>Humidity: {props.data.humidity}%</li>
      </ul>

      <div className="col-4">
        <h1>{props.data.city}</h1>
        <div className="date">
          <FormattedDate date={props.data.date} />
        </div>
      </div>
    </div>
  );
}
