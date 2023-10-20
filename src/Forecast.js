import React from "react";
import axios from "axios";

export default function Forecast(props) {
  function getForecast(response) {
    console.log(response);
  }

  const apiKey = "f30aff8e88d9o961t06a5249f250f1b6";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getForecast);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <img src={props.url} />
          <div>
            <span className="Forecast-temp-max">19°</span>{" "}
            <span className="Forecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
