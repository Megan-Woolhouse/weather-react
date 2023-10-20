import React from "react";

export default function Forecast(props) {
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
